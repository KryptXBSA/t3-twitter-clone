import { t } from "../../trpc/trpc";
import bcrypt from "bcrypt";
import { z } from "zod";

const Provider = z.enum(["credentials", "google", "github", "discord"]);

export const userRouter = t.router({
  getUser: t.procedure.input(z.string()).query((req) => {
    req.input; // string
    return { id: req.input, name: "Bilbo" };
  }),
  createUser: t.procedure
    .input(
      z
        .object({
          name: z.string().min(3).nullish(),
          username: z.string(),
          password: z.string().nullish(),
          provider: Provider,
          email: z.string().nullish(),
        })
        .refine((data) => {
          // error if not credentials and there is no email
          if (data.provider !== "credentials" && !data.email) {
            throw new z.ZodError([
              {
                path: ["email"],
                message: 'Email should be provided if !=="credentials"',
                code: "custom",
              },
            ]);
          }
          // Throw an error if email is provided and provider is "credentials"
          if (data.provider === "credentials" && data.email) {
            throw new z.ZodError([
              {
                path: ["email"],
                message: 'Email should be null for provider "credentials"',
                code: "custom",
              },
            ]);
          }
          if (data.provider === "credentials" && !data.password) {
            throw new z.ZodError([
              {
                path: ["password"],
                message: "Password should be provided",
                code: "custom",
              },
            ]);
          }
          return true;
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
        path: "/auth/login",
        tags: ["auth"],
        summary: "Login or Signup",
        description: "If there is no account sign  up",
      },
    })
    .mutation(async ({ ctx, input }) => {
      // credentials are only username and password
      // if (input.provider === "credentials" && input.email)
      //   throw new TRPCError({
      //     data: "Invalid request",
      //     code: "BAD_REQUEST",
      //   });
      let existingUser = await ctx.prisma.user.findFirst({
        where: {
          OR: [{ email: input.email }, { username: input.username }],
        },
      });

      // if no user and it's not credentials just sign up via provider
      if (input.provider !== "credentials" && !existingUser) {
        let user = await ctx.prisma.user.create({
          data: {
            ...input,
          },
        });
        return {
          success: true,
          data: "New user via" + input.provider,
          token: JSON.stringify(user),
        };
      }

      // if no user and provider is credentials just sign up
      if (!existingUser && input.provider === "credentials") {
        // Create a new user
        let user = await ctx.prisma.user.create({
          data: {
            ...input,
            password: bcrypt.hashSync(input.password!, 10), // hash the password
          },
        });

        // Create a new session for the user
        // let session = await createSession(user, ctx);

        return {
          success: true,
          data: "signup",
          token: JSON.stringify(user),
        };
      }
      if (existingUser) {
        // if it's via email just login
        if (input.provider !== "credentials") {
          return {
            success: true,
            data: "login via " + input.provider,
          };
        }
        if (
          existingUser.password &&
          input.password &&
          bcrypt.compareSync(input.password, existingUser.password)
        ) {
          // Create a new session for the user
          // let session = await createSession(existingUser, ctx);
          // return { success: true, data: JSON.stringify(session) };
          return {
            success: true,
            data: "login",
            token: JSON.stringify(existingUser),
          };
        } else {
          return { success: false, data: "Invalid password" };
        }
      }

      return { success: true, data: "no" };
    }),
});
