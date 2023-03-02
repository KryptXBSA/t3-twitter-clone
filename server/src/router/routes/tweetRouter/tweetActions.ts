import { z } from "zod";
import { protectedProcedure } from "../../../trpc/trpc";

export const likeTweet = protectedProcedure
  .input(z.object({ id: z.string().uuid() }))
  .mutation(async ({ ctx, input }) => {
    const existingLike = await ctx.prisma.like.findFirst({
      where: {
        userId: ctx.session.id,
        tweetId: input.id,
      },
    });
    let updatedTweet;

    if (!existingLike) {
      updatedTweet = await ctx.prisma.tweet.update({
        where: { id: input.id },
        data: {
          likeCount: { increment: 1 },
          likes: {
            create: {
              user: { connect: { id: ctx.session.id } },
            },
          },
        },
        include: {
          likes: true,
        },
      });
    } else {
      updatedTweet = await ctx.prisma.tweet.update({
        where: { id: input.id },
        data: {
          likeCount: { decrement: 1 },
          likes: {
            delete: {
              id: existingLike.id,
            },
          },
        },
        include: {
          likes: true,
        },
      });
    }
    return { success: true };
  });

export const replyTweet = protectedProcedure
  .input(z.object({ id: z.string().uuid(), body: z.string().min(1) }))
  .mutation(async ({ ctx, input }) => {
    const [reply, tweet] = await ctx.prisma.$transaction([
      ctx.prisma.reply.create({
        data: {
          body: input.body,
          user: { connect: { id: ctx.session.id } },
          tweet: { connect: { id: input.id } },
        },
        include: { user: true },
      }),
      ctx.prisma.tweet.update({
        where: { id: input.id },
        data: { replyCount: { increment: 1 } },
      }),
    ]);
    return { success: true, reply };
  });

export const reTweet = protectedProcedure
  .input(z.object({ id: z.string().uuid() }))
  .mutation(async ({ ctx, input }) => {
    const existingRetweet = await ctx.prisma.retweet.findFirst({
      where: {
        userId: ctx.session.id,
        tweetId: input.id,
      },
    });
    let updatedTweet;

    if (!existingRetweet) {
      updatedTweet = await ctx.prisma.tweet.update({
        where: { id: input.id },
        data: {
          retweetCount: { increment: 1 },
          retweets: {
            create: {
              user: { connect: { id: ctx.session.id } },
            },
          },
        },
        include: {
          retweets: true,
        },
      });
    } else {
      updatedTweet = await ctx.prisma.tweet.update({
        where: { id: input.id },
        data: {
          retweetCount: { decrement: 1 },
          retweets: {
            delete: {
              id: existingRetweet.id,
            },
          },
        },
        include: {
          retweets: true,
        },
      });
    }

    return { success: true, data: JSON.stringify(updatedTweet) };
  });
