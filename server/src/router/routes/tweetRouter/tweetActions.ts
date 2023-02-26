import { z } from "zod";
import { protectedProcedure } from "../../../trpc/trpc";

export const likeTweet = protectedProcedure
  .input(z.object({ id: z.string().uuid() }))
  .mutation(async ({ ctx, input }) => {
    const existingLike = await ctx.prisma.like.findFirst({
      where: {
        userId: ctx.session.id,
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
  .output(
    z.object({
      success: z.boolean(),
      data: z.string(),
      token: z.string().nullish(),
      code: z.number().nullish(),
    })
  )
  .meta({
    openapi: {
      method: "POST",
      path: "/tweet/reply",
      tags: ["tweet"],
    },
  })
  .mutation(async ({ ctx, input }) => {
    const reply = await ctx.prisma.reply.create({
      data: {
        body: input.body,
        user: { connect: { id: ctx.session.id } },
        tweet: { connect: { id: input.id } },
      },
    });
    const tweet = await ctx.prisma.tweet.update({
      where: { id: input.id },
      data: { replyCount: { increment: 1 } },
    });
    return { success: true, data: JSON.stringify(reply) };
  });
export const reTweet = protectedProcedure
  .input(z.object({ id: z.string().uuid() }))
  .mutation(async ({ ctx, input }) => {
    const retweet = await ctx.prisma.retweet.create({
      data: {
        userId: ctx.session.id,
        tweetId: input.id,
      },
    });

    const tweet = await ctx.prisma.tweet.update({
      where: { id: input.id },
      data: { retweetCount: { increment: 1 } },
    });
    return { success: true, data: JSON.stringify(retweet) };
  });
