import { type NextPage } from "next";
import { useRouter } from "next/router";
import SidebarLeft from "@components/SidebarLeft";
import SidebarRight from "@components/SidebarRight";
import { SEO } from "@components/SEO";
import TweetContent from "@components/pageComponents/tweet/TweetContent";

const Tweet: NextPage = () => {
  const router = useRouter();
  const {  tweetId } = router.query as { tweetId: string };

  return (
    <>
      <SEO title="Tweet" />
      <div className="mx-auto ">
        <div className="bg-r flex  flex-row justify-center">
          <SidebarLeft  />
          <TweetContent tweetId={tweetId} />
          <SidebarRight />
        </div>
      </div>
    </>
  );
};

export default Tweet;
