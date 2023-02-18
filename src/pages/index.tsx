import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import MainContent from "../components/MainContent/MainContent";
import SidebarLeft from "../components/SidebarLeft";
import SidebarRight from "../components/SidebarRight/SidebarRight";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Twitter clone home" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto ">
                <div className="flex  flex-row justify-center">
                    <SidebarLeft />
                    <MainContent />
                    <SidebarRight />
                </div>
            </div>
        </>
    );
};

export default Home;
