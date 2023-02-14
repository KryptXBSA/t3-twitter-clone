import { type AppType } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Auth from "../layouts/MainLayout";

const MyApp: AppType = ({
    Component,
    pageProps: { session, ...pageProps },
}: any) => {
    return (
        <SessionProvider session={session}>
            <Auth>
                <Component {...pageProps} />
            </Auth>
        </SessionProvider>
    );
};

export default api.withTRPC(MyApp);
