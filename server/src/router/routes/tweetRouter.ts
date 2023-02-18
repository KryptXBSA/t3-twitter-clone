import { protectedProcedure, publicProcedure, t } from "../../trpc/trpc";
import { z } from "zod";

export const tweetRouter = t.router({
  getTweet: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      let tweet = await ctx.prisma.tweet.findUnique({
        where: { id: input.id },
      });
      return { success: true,  tweet };
    }),
  getAllTweets: publicProcedure
    .input(z.object({ id: z.string() }))
    // .meta({
    //   openapi: {
    //     method: "GET",
    //     path: "/tweet/getAll",
    //     tags: ["tweet"],
    //   },
    // })
    .query(async ({ ctx, input }) => {
      let tweet = await ctx.prisma.tweet.findMany({
        orderBy: { createdAt: "desc" },
        include: {
          user: true,
          likes: true,
          // views: true,
          replies: true,
          retweets: true,
        },
      });
      return { success: true, tweets: tweet };
    }),
  likeTweet: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
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
        path: "/tweet/like",
        tags: ["tweet"],
      },
    })
    .mutation(async ({ ctx, input }) => {
      const like = await ctx.prisma.like.create({
        data: {
          user: { connect: { id: ctx.session.id } },
          tweet: { connect: { id: input.id } },
        },
      });
      const tweet = await ctx.prisma.tweet.update({
        where: { id: input.id },
        data: { likeCount: { increment: 1 } },
      });
      return { success: true, data: JSON.stringify(like) };
    }),
  viewTweet: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
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
        path: "/tweet/view",
        tags: ["tweet"],
      },
    })
    .mutation(async ({ ctx, input }) => {
      const view = await ctx.prisma.view.create({
        data: {
          user: { connect: { id: "1asds" } },
          tweet: { connect: { id: input.id } },
        },
      });
      const tweet = await ctx.prisma.tweet.update({
        where: { id: input.id },
        data: { viewCount: { increment: 1 } },
      });
      return { success: true, data: JSON.stringify(view) };
    }),
  replyTweet: protectedProcedure
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
    }),

  reTweet: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
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
        path: "/tweet/retweet",
        tags: ["tweet"],
      },
    })
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
    }),
  newTweet: protectedProcedure
    .input(
      z.object({
        body: z.string().min(1),
      })
    )
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
        path: "/tweet/new",
        tags: ["tweet"],
        summary: "New Tweet",
      },
    })
    .mutation(async ({ ctx, input }) => {
      let newTweet: any = await ctx.prisma.tweet.create({
        data: {
          body: input.body,
          userId: ctx.session.id,
        },
      });
      return { success: true, data: JSON.stringify(newTweet) };
    }),
});
