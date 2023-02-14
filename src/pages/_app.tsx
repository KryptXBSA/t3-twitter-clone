import { type AppType } from "next/app";
import { SessionProvider } from "next-auth/react";
import Auth from "../Auth/Auth";
import { ThemeProvider } from "next-themes";
import { api } from "../utils/api";
import "../styles/globals.css";

const MyApp: AppType = ({
    Component,
    pageProps: { session, ...pageProps },
}: any) => {
    return (
        <SessionProvider session={session}>
            <ThemeProvider attribute="class">
                <Auth>
                    <Component {...pageProps} />
                </Auth>
            </ThemeProvider>
        </SessionProvider>
    );
};

export default api.withTRPC(MyApp);
