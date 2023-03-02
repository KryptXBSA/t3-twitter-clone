import { z } from "zod";
import { protectedProcedure } from "../../../trpc/trpc";
import { removeProperties } from "../../../utils/removeProperties";

export const getUserFollowers = protectedProcedure
  .input(z.object({ username: z.string() }))
  .query(async ({ ctx, input }) => {
    let userFollowers = await ctx.prisma.user.findUnique({
      where: { username: input.username },
      include: {
        following: {
          include: {
            follower: {
              select: {
                bio: true,
                username: true,
                name: true,
                profileImage: true,
                badge: true,
              },
            },
          },
        },
        followers: {
          include: {
            following: {
              select: {
                bio: true,
                username: true,
                name: true,
                profileImage: true,
                badge: true,
              },
            },
          },
        },
      },
    });
    return { success: true, userFollowers:removeProperties(userFollowers) };
  });
