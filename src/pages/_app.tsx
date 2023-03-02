import { type AppType } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";
import Auth from "../Auth/Auth";
import { ThemeProvider } from "next-themes";
import { trpc } from "../utils/trpc";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}: any) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider forcedTheme="dark" defaultTheme="dark" attribute="class">
        <Auth>
          <Component {...pageProps} />
          <Analytics />
          <Toaster />
        </Auth>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
