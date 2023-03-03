import NextAuth, { getServerSession, NextAuthOptions, User } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import jwt from "jsonwebtoken";
import superjson from "superjson";
import { UserData } from "@types";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../../../../server/src/router/root";
const client = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: process.env.NEXTAUTH_URL + "/api/trpc",
      headers() {
        return {
          pass: process.env.SERVER_SECRET,
        };
      },
    }),
  ],
});
declare module "next-auth" {
  interface Session {
    userData: UserData;
  }
  interface User {
    userData: UserData;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    userData: UserData;
  }
}

export function authOptions(update?: boolean): NextAuthOptions {
  return {
    callbacks: {
      async signIn(p) {
        let success = false;
        let body = {};
        if (!p.credentials) {
          let provider = p.account?.provider;
          let username = p.user.name?.replace(/\s/g, "")
          let email = p.user.email;
          body = {
            provider,
            username,
            name: username,
            email,
          };
        } else {
          body = {
            provider: "credentials",
            username: p.credentials.username,
            password: p.credentials.password,
          };
        }
        try {
          // @ts-ignore
          let createUser = await client.user.createUser.mutate({ ...body });
          success = createUser.success;
          let userData = createUser.data;
          if (typeof createUser.data === "string") {
            throw new Error(createUser.data);
          }
          // @ts-ignore
          p.user.userData = userData;
        } catch (e: any) {}
        return success;
      },

      async jwt(p) {
        if (update) {
          let { user } = await client.user.getUser.query({
            id: p.token.userData.id,
          });
          //@ts-ignore
          p.token.userData = user;
        } else {
          p.token.userData = p.user?.userData || p.token.userData;
        }
        // params.token.customData = params.user?.customData || params.token.customData;
        return p.token;
      },
      async session(p) {
        if (update) {
          let { user } = await client.user.getUser.query({
            id: p.token.userData.id,
          });
          //@ts-ignore
          p.session.userData = user;
        } else {
          p.session.userData = p.token.userData;
        }
        return p.session;
      },
    },
    providers: getProviders(),
    jwt: {
      async encode(p) {
        let token = jwt.sign(p.token!, p.secret);
        return token;
      },
      // @ts-ignore
      async decode(p) {
        // @ts-ignore
        let decoded = jwt.verify(p.token, p.secret);
        return decoded;
      },
    },
  };
}
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions());
};
function getProviders() {
  return [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Username",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        let body = {};
        if (!credentials) {
          throw new Error("Invalid login");
        } else {
          body = {
            provider: "credentials",
            username: credentials.username,
            password: credentials.password,
          };
        }
        // @ts-ignore
        let createUser = await client.user.createUser.mutate({ ...body });
        // @ts-ignore
        let userData: User = { userData: createUser.data };
        if (typeof createUser.data === "string") {
          throw new Error(createUser.data);
        }
        return userData;
      },
    }),
  ];
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // @ts-ignore
  return await NextAuth(req, res, authOptions(req?.query?.update));
};
export default handler;
