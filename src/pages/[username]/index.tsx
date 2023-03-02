import { SEO } from "@components/SEO";
import { type NextPage } from "next";
import SidebarLeft from "@components/SidebarLeft";
import SidebarRight from "@components/SidebarRight";
import { ProfileContent } from "@components/pageComponents/profile/ProfileContent";
import { getUserSession } from "@hooks/getUserSession";
import { useRouter } from "next/router";

const ProfilePage: NextPage = () => {
  let session = getUserSession();
  const router = useRouter();
  const { username } = router.query as { username: string };
  return (
    <>
      <SEO title="Twitter" />
      <div className="mx-auto ">
        <div className="flex  flex-row justify-center">
          <SidebarLeft active={session.username === username&&6} />
          <ProfileContent />
          <SidebarRight />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
