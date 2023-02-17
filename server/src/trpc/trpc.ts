import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { OpenApiMeta } from "trpc-openapi";
import * as trpcExpress from "@trpc/server/adapters/express";
import jwt from "jsonwebtoken";
import { prisma } from "../prisma/prisma";

type UserData = {
  id: string;
  username: string;
  name: string;
  email: string;
  provider: string;
  password: string;
  imageUrl: string;
  createdAt: string;
};
type Token = {
  iat: number;
  sub: string;
} & UserData;

type CreateContextOptions = {
  session: Token;
};

const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma,
  };
};

export const createContext = async (
  opts: trpcExpress.CreateExpressContextOptions
) => {
  const { req } = opts;

  let session: Token;
  // if (!req.headers.authorization) session = { id: "2" };
  try {
    let decoded: any = jwt.verify(
      req.headers.authorization!,
      process.env.JWT_SECRET!
    );
    session = {
      iat: decoded.iat,
      sub: decoded.sub,
      ...decoded.userData,
    };
  } catch (e) {
    // console.log("jwt_decode err", e);
  }
  console.log("context", session!);

  return createInnerTRPCContext({
    session: session!,
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
  console.log("via middleware", ctx);
  if (!ctx.session || !ctx.session?.id) {
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
