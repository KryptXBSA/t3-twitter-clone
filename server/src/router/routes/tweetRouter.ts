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
          replies: true,
          retweets: true,
        },
      });
      return { success: true, tweets: tweet };
    }),
  likeTweet: protectedProcedure
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
      let newTweet = await ctx.prisma.tweet.create({
        data: {
          body: limitTextLines(input.body),
          images: [imageUrl],
          userId: ctx.session.id,
        },
        include: {
          user: true,
          likes: true,
          replies: true,
          retweets: true,
        },
      });
      return { success: true, tweet: newTweet };
    }),
});

function limitTextLines(text: string) {
  const newText = text.replace(/(\n{3,})/g, "\n\n");
  return newText;
}
