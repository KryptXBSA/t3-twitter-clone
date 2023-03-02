import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { prisma } from "../prisma/prisma";
import { User } from "@prisma/client";

type CreateContextOptions = {
  session: User;
  isServer: boolean;
};

const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    isServer: opts.isServer,
    prisma,
  };
};

import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { getServerAuthSession } from "pages/api/auth/[...nextauth]";
export const createContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;
  const session = await getServerAuthSession({ req, res });
  return createInnerTRPCContext({
    session: session?.userData,
    isServer: req?.headers?.pass === process.env.SERVER_SECRET,
  });
};

export const t = initTRPC.context<typeof createContext>().create({
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
  if (ctx.isServer) {
    return next({
      ctx: {
        // infers the `session` as non-nullable
        session: { ...ctx.session },
      },
    });
  }
  if (!ctx.session || !ctx.session?.id ) {
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
