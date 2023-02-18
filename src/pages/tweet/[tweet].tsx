import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import MainContent from "@components/MainContent/MainContent";
import SidebarLeft from "@components/SidebarLeft";
import SidebarRight from "@components/SidebarRight/SidebarRight";
import { trpc } from "@utils/trpc";

const Tweet: NextPage = () => {
  const router = useRouter();
  const { tweet: tweetId } = router.query as { tweet: string };
  let { data } = trpc.tweet.getTweet.useQuery({ id: tweetId });
    console.log("tweeet",data)

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Twitter clone home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto ">
        <div className="bg-r flex  flex-row justify-center">
          <SidebarLeft />
          <MainContent />
          <SidebarRight />
        </div>
      </div>
    </>
  );
};

export default Tweet;
