import { z } from "zod";
import { protectedProcedure, publicProcedure } from "../../../trpc/trpc";
import _ from "lodash";
import { TO_REMOVE } from "../../../utils/TO_REMOVE";

export const getAllTweets = protectedProcedure
  .input(z.object({ skip: z.number().nullish() }))
  .mutation(async ({ ctx, input }) => {
    const pageSize = 10;
    let tweets = await ctx.prisma.tweet.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: true,
        likes: true,
        replies: true,
        retweets: true,
      },
      take: pageSize + 1, // fetch one more tweet than needed
      skip: input.skip || 0,
    });
    const hasMore = tweets.length > pageSize;
    if (hasMore) {
      tweets.pop();
    }

    let filteredTweets = _.omit(tweets, TO_REMOVE);

    return { success: true, tweets: filteredTweets, hasMore };
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
