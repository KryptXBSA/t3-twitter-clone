import { t } from "../../trpc/trpc";
import bcrypt from "bcrypt";
import { quotelessJson, z } from "zod";
import { TRPCError } from "@trpc/server";

export const tweetRouter = t.router({
  getTweet: t.procedure.input(z.string()).query((req) => {
    req.input; // string
    return { id: req.input, name: "Bilbo" };
  }),
  likeTweet: t.procedure
    .input(z.object({ id: z.string().uuid() }))
    .output(
      z.object({
        success: z.boolean(),
        message: z.string(),
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
          user: { connect: { id: "1asds" } },
          tweet: { connect: { id: input.id } },
        },
      });
      const tweet = await ctx.prisma.tweet.update({
        where: { id: input.id },
        data: { likeCount: { increment: 1 } },
      });
      return { success: true, message: JSON.stringify(like) };
    }),
  viewTweet: t.procedure
    .input(z.object({ id: z.string().uuid() }))
    .output(
      z.object({
        success: z.boolean(),
        message: z.string(),
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
      return { success: true, message: JSON.stringify(view) };
    }),
  replyTweet: t.procedure
    .input(z.object({ id: z.string().uuid(), body: z.string().min(1) }))
    .output(
      z.object({
        success: z.boolean(),
        message: z.string(),
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
          user: { connect: { id: "1asds" } },
          tweet: { connect: { id: input.id } },
        },
      });
      const tweet = await ctx.prisma.tweet.update({
        where: { id: input.id },
        data: { replyCount: { increment: 1 } },
      });
      return { success: true, message: JSON.stringify(reply) };
    }),

  reTweet: t.procedure
    .input(z.object({ id: z.string().uuid() }))
    .output(
      z.object({
        success: z.boolean(),
        message: z.string(),
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
      return { success: true, message: JSON.stringify(retweet) };
    }),
  createTweet: t.procedure
    .input(
      z.object({
        body: z.string().min(1),
      })
    )
    .output(
      z.object({
        success: z.boolean(),
        message: z.string(),
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
      return { success: true, message: JSON.stringify(newTweet) };
    }),
});
