import { type AppType } from "next/app";
import { SessionProvider } from "next-auth/react";
import Auth from "../Auth/Auth";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import "../styles/globals.css";
import { useState } from "react";
import { trpc } from "../utils/trpc";
import Cookies from "js-cookie";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}: any) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:7019",
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
        <Auth>
          <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
            </QueryClientProvider>
          </trpc.Provider>
        </Auth>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default MyApp;
