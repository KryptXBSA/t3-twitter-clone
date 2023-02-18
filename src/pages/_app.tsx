import { type AppType } from "next/app";
import { SessionProvider } from "next-auth/react";
import Auth from "../Auth/Auth";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import "../styles/globals.scss";
import { useState } from "react";
import { trpc } from "../utils/trpc";
import Cookies from "js-cookie";
import superjson from "superjson";

const MyApp: AppType = ({
    Component,
    pageProps: { session, ...pageProps },
}: any) => {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpc.createClient({
            transformer: superjson,
            links: [
                httpBatchLink({
                    url: "http://localhost:7019/api/trpc",
                    headers() {
                        return {
                            authorization: Cookies.get("token"),
                        };
                    },
                }),
            ],
        })
    );
    return (
        <SessionProvider session={session}>
            <ThemeProvider attribute="class">
                <trpc.Provider client={trpcClient} queryClient={queryClient}>
                    <QueryClientProvider client={queryClient}>
                        <Auth>
                            <Component {...pageProps} />
                        </Auth>
                    </QueryClientProvider>
                </trpc.Provider>
            </ThemeProvider>
        </SessionProvider>
    );
};

export default MyApp;
