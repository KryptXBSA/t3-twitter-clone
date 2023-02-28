import { z } from "zod";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import { protectedProcedure } from "../../../trpc/trpc";
import { uploadImg } from "../../../utils/uploadImg";

export const newTweet = protectedProcedure
  .input(
    z.object({
      body: z.string().min(1),
      image: z.string().nullish(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    let imageUrl = "";
    if (input.image) {
      imageUrl = uploadImg(input.image);
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
  });
function limitTextLines(text: string) {
  const newText = text.replace(/(\n{3,})/g, "\n\n");
  return newText;
}
