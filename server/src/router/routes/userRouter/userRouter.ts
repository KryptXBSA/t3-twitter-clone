import { protectedProcedure, publicProcedure, t } from "../../../trpc/trpc";
import bcrypt from "bcrypt";
import { z } from "zod";
import { followUser } from "./followUser";
import { getUserFollowers } from "./getUserFollowers";
import { updateImg } from "./updateImg";
import { updateBadge } from "./updateBadge";
import { TO_REMOVE } from "../../../utils/TO_REMOVE";
import _ from "lodash";
import { removeProperties } from "../../../utils/removeProperties";

const Provider = z.enum(["credentials", "google", "github", "discord"]);

export const userRouter = t.router({
  updateUser: protectedProcedure
    .input(
      z
        .object({
          // username: z.string(),
          name: z.string().trim().min(3).nullish(),
          bio: z.string().nullish(),
          website: z.string().nullish(),
          bgImage: z.string().nullish(),
          profileImage: z.string().nullish(),
        })
        .refine((obj) => {
          if (
            Object.values(obj).some((val) => val === null && val === undefined)
          ) {
            throw new Error("At least one value has to be defined");
          }
          return true;
        })
    )
    .mutation(async ({ input, ctx }) => {
      let user = await ctx.prisma.user.update({
        where: { id: ctx.session.id },
        data: {
          ...input,
        },
      });
      return { success: true, user };
    }),
  getUser: protectedProcedure
    .input(
      z
        .object({ id: z.string().nullish(), username: z.string().nullish() })
        .refine((obj) => {
          if (!obj.id && !obj.username) {
            throw new Error("At least one of id or username must be defined");
          }
          return true;
        })
    )
    .query(async ({ input, ctx }) => {
      let user = await ctx.prisma.user.findFirst({
        where: {
          OR: [{ id: input.id! }, { username: input.username! }],
        },
        include: {
          followers: true,
          following: true,
          tweets: {
            orderBy: { createdAt: "desc" },
            include: {
              user: true,
              likes: true,
              replies: true,
              retweets: true,
            },
          },
        },
      });

      return { success: true, user: removeProperties(user) };
    }),
  createUser: publicProcedure
    .input(
      z
        .object({
          name: z.string().trim().min(3).nullish(),
          username: z.string().trim().min(3),
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
          // @ts-ignore
          data: {
            ...input,
          },
        });
        return {
          success: true,
          data: user,
        };
      }

      // if no user and provider is credentials just sign up
      if (!existingUser && input.provider === "credentials") {
        // Create a new user
        let user = await ctx.prisma.user.create({
          // @ts-ignore the input is already validated above no worries
          data: {
            ...input,
            password: bcrypt.hashSync(input.password!, 10), // hash the password
          },
        });

        // Create a new session for the user
        // let session = await createSession(user, ctx);

        return {
          success: true,
          data: user,
        };
      }
      if (existingUser) {
        // if it's via email just login
        if (input.provider !== "credentials") {
          return {
            success: true,
            data: existingUser,
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
            data: existingUser,
          };
        } else {
          return { success: false, data: "Invalid password" };
        }
      }

      return { success: true, data: "no" };
    }),
  followUser,
  getUserFollowers,
  updateImg,
  updateBadge,
  topUsers: protectedProcedure.query(async ({ ctx }) => {
    let users = await ctx.prisma.user.findMany({
      orderBy: { followersCount: "desc" },
      take: 3,
    });
    return { success: true, users };
  }),
});
