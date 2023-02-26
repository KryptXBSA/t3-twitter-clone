import { z } from "zod";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import { protectedProcedure } from "../../../trpc/trpc";

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
  });
function limitTextLines(text: string) {
  const newText = text.replace(/(\n{3,})/g, "\n\n");
  return newText;
}
