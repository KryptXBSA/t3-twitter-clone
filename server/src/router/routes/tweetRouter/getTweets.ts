import { z } from "zod";
import { publicProcedure } from "../../../trpc/trpc";

export const getAllTweets = publicProcedure
  .input(z.object({  skip: z.number().nullish() }))
  .mutation(async ({ ctx, input }) => {
    let tweet = await ctx.prisma.tweet.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: true,
        likes: true,
        replies: true,
        retweets: true,
      },
      take: 10,
      skip: input.skip || 0,
    });
    return { success: true, tweets: tweet };
  });
export const getTweet = publicProcedure
  .input(z.object({ id: z.string().uuid() }))
  .query(async ({ ctx, input }) => {
    let tweet = await ctx.prisma.tweet.findUnique({
      where: { id: input.id },
      include: {
        user: true,
        likes: true,
        replies: { include: { user: true } },
        retweets: true,
      },
    });
    return { success: true, tweet };
  });
