import { createTRPCRouter } from "../trpc/trpc";
import { tweetRouter } from "./routes/tweetRouter";
import { userRouter } from "./routes/userRouter";

export const appRouter = createTRPCRouter({
  user: userRouter,
  tweet: tweetRouter,
});

export type AppRouter = typeof appRouter;
