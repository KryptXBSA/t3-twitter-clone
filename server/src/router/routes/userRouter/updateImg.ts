import { z } from "zod";
import { protectedProcedure } from "../../../trpc/trpc";
import { uploadImg } from "../../../utils/uploadImg";

export const updateImg = protectedProcedure
  .input(z.object({ bgImg: z.string().nullish(), profileImg: z.string().nullish() }))
  .mutation(async ({ ctx, input }) => {
    let currentUser = await ctx.prisma.user.findUnique({
      where: { id: ctx.session.id },
    });
    let bgImage = "";
    if (input.bgImg) {
      bgImage = await uploadImg(input.bgImg);
    } else {
      bgImage = currentUser?.bgImage!;
    }
    let profileImage = "";
    if (input.profileImg) {
      profileImage = await uploadImg(input.profileImg);
    } else {
      profileImage = currentUser?.profileImage!;
    }
    let user = await ctx.prisma.user.update({
      where: { id: ctx.session.id },
      data: {
        bgImage,
        profileImage,
      },
    });
    return { success: true };
  });
