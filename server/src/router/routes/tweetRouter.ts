import { protectedProcedure, publicProcedure, t } from "../../trpc/trpc";
import { z } from "zod";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export const tweetRouter = t.router({
  getTweet: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      let tweet = await ctx.prisma.tweet.findUnique({
        where: { id: input.id },
        include: {
          user: true,
          likes: true,
          // views: true,
          replies: true,
          retweets: true,
        },
      });
      return { success: true, tweet };
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
        image: z.string().nullish(),
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
      let imageUrl = "";
      if (input.image) {
        const image = input.image;
        const extension = image.substring(
          "data:image/".length,
          image.indexOf(";base64")
        );
        const imageName = uuidv4() + "." + extension;
        imageUrl = "http://localhost:7019/images/" + imageName;
        fs.writeFile(
          "./images/" + imageName,
          image.replace(/^data:image\/\w+;base64,/, ""),
          { encoding: "base64" },
          (err) => {
            if (err) throw err;
            console.log("Image saved successfully");
          }
        );
      }

        console.log("image url",imageUrl)
      let newTweet: any = await ctx.prisma.tweet.create({
        data: {
          body: limitTextLines(input.body),
          images: [imageUrl],
          userId: ctx.session.id,
        },
      });
      return { success: true, data: JSON.stringify(newTweet) };
    }),
});

function limitTextLines(text: string) {
  const newText = text.replace(/(\n{3,})/g, "\n\n");
  return newText;
}
