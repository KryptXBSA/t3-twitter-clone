import { createTRPCRouter } from "../trpc/trpc";
import { userRouter } from "./routes/userRouter";

export const appRouter = createTRPCRouter({
  user: userRouter,
});

export type AppRouter = typeof appRouter;
