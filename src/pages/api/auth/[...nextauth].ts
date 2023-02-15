import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const providers = getProviders();
  return await NextAuth(req, res, {
    cookies: {
      sessionToken: {
        name: `token`,
        options: {
          httpOnly: false,
          sameSite: true,
          path: "/",
          secure: true,
        },
      },
    },
    providers,
    callbacks: {
      async session({ session, token }) {
        return session;
      },
      async signIn(props) {
        return true;
      },
    },
    jwt: {
      async encode(params) {
        let token = jwt.sign(params.token, params.secret);
        return token;
      },
      async decode(params) {
        let decoded = jwt.verify(params.token, params.secret);
        return decoded;
      },
    },
  });
}

function getProviders() {
  return [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      id: "credentials",
      name: "credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: { label: "Password", type: "password" },
        paassword: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        console.log("body", req.body);
        console.log("header", req.headers);
        return { user: "aland" };
        const user = await fetch(
          `${process.env.NEXTAUTH_URL}/api/user/check-credentials`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              accept: "application/json",
            },
            body: Object.entries(credentials)
              .map((e) => e.join("="))
              .join("&"),
          }
        )
          .then((res) => res.json())
          .catch((err) => {
            return null;
          });

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ];
}
