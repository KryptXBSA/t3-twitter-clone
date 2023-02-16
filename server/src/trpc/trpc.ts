import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { OpenApiMeta } from "trpc-openapi";
import * as trpcExpress from "@trpc/server/adapters/express";
import jwt from "jsonwebtoken";
import { prisma } from "../prisma/prisma";

type CreateContextOptions = {
  session: { id: string };
};

const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma
  };
};

export const createContext = async (
  opts: trpcExpress.CreateExpressContextOptions
) => {
  const { req } = opts;

  let decoded: any;
  let session = { id: "1" };
  if (!req.headers.authorization) session = { id: "2" };
  try {
        console.log("secc",process.env.JWT_SECRET)
    decoded = jwt.verify(req.headers.authorization!, process.env.JWT_SECRET!);
    console.log(decoded);
    session = decoded;
  } catch (e) {
    console.log("jwt_decode err", e);
  }

  return createInnerTRPCContext({
    session,
  });
};

export const t = initTRPC
  .context<typeof createContext>()
  .meta<OpenApiMeta>()
  .create({
    transformer: superjson,
    errorFormatter({ shape }) {
      return shape;
    },
  });

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;

/**
 * Reusable middleware that enforces users are logged in before running the
 * procedure.
 */
const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session },
    },
  });
});

/**
 * Protected (authenticated) procedure
 *
 * If you want a query or mutation to ONLY be accessible to logged in users, use
 * this. It verifies the session is valid and guarantees `ctx.session.user` is
 * not null.
 *
 * @see https://trpc.io/docs/procedures
 */
export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
