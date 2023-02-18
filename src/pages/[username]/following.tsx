import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import SidebarLeft from "@components/SidebarLeft";
import SidebarRight from "@components/SidebarRight/SidebarRight";
import { trpc } from "@utils/trpc";
import { SEO } from "@components/SEO";
import TweetContent from "@components/pageComponents/tweet/TweetContent";
import FollowersContent from "@components/pageComponents/followers/FollowersContent";

const Tweet: NextPage = () => {
  const router = useRouter();
  const {  tweetId } = router.query as { tweetId: string };

  return (
    <>
      <SEO title="Tweet" />
      <div className="mx-auto ">
        <div className="bg-r flex  flex-row justify-center">
          <SidebarLeft />
          <FollowersContent />
          <SidebarRight />
        </div>
      </div>
    </>
  );
};

export default Tweet;
