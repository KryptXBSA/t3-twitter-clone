import { t } from "../../trpc/trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const userRouter = t.router({
  getUser: t.procedure.input(z.string()).query((req) => {
    req.input; // string
    return { id: req.input, name: "Bilbo" };
  }),
  createUser: t.procedure
    .input(
      z.object({
        name: z.string().min(5),
        username: z.string(),
        provider: z.string(),
      })
    )
    .output(z.object({ success: z.boolean(), message: z.string() }))
    .meta({
      openapi: {
        method: "POST",
        path: "/auth/login",
        tags: ["auth"],
        summary: "Login as an existing user",
        description: "*fashfoihihfohasfhhhasfihffihasifhahaiifhasshf",
        protect: true,
      },
    })
    .mutation(async ({ ctx, input }) => {
      let result = await ctx.prisma.user.create({
        data: {...input},
      });
      console.log(result);

      // throw new TRPCError({
      //   message: "User not found",
      //   code: "UNAUTHORIZED",
      //   cause: { a: "a" },
      // });
      return { success: true, message: "hi" };
    }),
});
