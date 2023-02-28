import { type NextPage } from "next";
import { useRouter } from "next/router";
import SidebarLeft from "@components/SidebarLeft";
import SidebarRight from "@components/SidebarRight/SidebarRight";
import { SEO } from "@components/SEO";
import FollowersContent from "@components/pageComponents/followers/FollowersContent";

const Tweet: NextPage = () => {
  const router = useRouter();
  const { username } = router.query as { username: string };
  return (
    <>
      <SEO title="Followers" />
      <div className="mx-auto ">
        <div className="bg-r flex  flex-row justify-center">
          <SidebarLeft />
          <FollowersContent showFollowers={true} username={username} />
          <SidebarRight />
        </div>
      </div>
    </>
  );
};

export default Tweet;
