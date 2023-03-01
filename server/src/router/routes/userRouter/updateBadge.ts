import { z } from "zod";
import { protectedProcedure } from "../../../trpc/trpc";

export const updateBadge = protectedProcedure
  .input(z.object({ badge: z.string() }))
  .mutation(async ({ ctx, input }) => {
    let user = await ctx.prisma.user.update({
      where: { id: ctx.session.id },
      data: {
        badge: input.badge,
      },
    });
    return { success: true };
  });
