import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import axios from "axios";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            username: string;
            name: string;
            email: string;
            provider: string;
            password: string;
            imageUrl: string;
            createdAt: string;
        };
    }
}

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        userId?: string;
    }
}
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
            async signIn(p) {
                let success = false;
                console.log("signin from", p);
                let body = {};
                if (!p.credentials) {
                    let provider = p.account?.provider;
                    let username = p.user.name;
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
                console.log("bodyyyy", body);
                try {
                    const { data } = await axios.post(
                        process.env.API_URL + "/auth/login",
                        body
                        // {
                        //   headers: {
                        //     "Content-Type": "application/x-www-form-urlencoded",
                        //   },
                        // }
                    );
                    console.log("success SIGNIN", data);
                    success = data.success;
                    let userData = JSON.parse(data.data);
                    console.log("userData", userData);
                    p.user.user = userData;
                } catch (e: any) {
                    console.log("error", e);
                }
                return success;
            },

            async jwt(p) {
                p.token.user = p.user || p.token.user;
                console.log("TOKENnnnnnnnn", p);
                console.log("endd of token");

                // params.token.customData = params.user?.customData || params.token.customData;
                return p.token;
            },
            async session(p) {
                // @ts-ignore
                p.session.user = p.token.user;
                console.log("SESSION DATA", p);
                return p.session;
            },
        },
        jwt: {
            async encode(p) {
                // @ts-ignore
                let token = jwt.sign(p.token, p.secret);
                return token;
            },
            async decode(p) {
                // @ts-ignore
                let decoded = jwt.verify(p.token, p.secret);
                return decoded;
            },
        },
    });
}

function getProviders() {
    return [
        GithubProvider({
            // @ts-ignore
            clientId: process.env.GITHUB_ID,
            // @ts-ignore
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            // @ts-ignore
            clientId: process.env.GOOGLE_CLIENT_ID,
            // @ts-ignore
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
                        // body: Object.entries(credentials)
                        //   .map((e) => e.join("="))
                        //   .join("&"),
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
