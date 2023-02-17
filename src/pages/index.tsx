import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import MainContent from "../components/MainContent/MainContent";
import SidebarLeft from "../components/SidebarLeft";
import SidebarRight from "../components/SidebarRight/SidebarRight";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
    let hi0 = trpc.user.greeting.useQuery({ name: "aa" });
    console.log("oo", hi0);
    const [hi, setHi] = useState(hi0.data?.text);
    useEffect(() => {
        setHi(hi0.data?.text);
    }, []);
    return (
        <>
            <Head>
                <title>a{hi}</title>
                <meta name="description" content="Twitter clone home" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto ">
                <div className="flex flex-row justify-center">
                    <SidebarLeft />
                    <MainContent />
                    <SidebarRight />
                </div>
            </div>
        </>
    );
};

export default Home;
