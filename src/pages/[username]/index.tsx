import { SEO } from "@components/SEO";
import { type NextPage } from "next";
import SidebarLeft from "@components/SidebarLeft";
import SidebarRight from "@components/SidebarRight/SidebarRight";
import { ProfileContent } from "@components/pageComponents/profile/ProfileContent";

const ProfilePage: NextPage = () => {
  return (
    <>
      <SEO title="Home" />
      <div className="mx-auto ">
        <div className="flex  flex-row justify-center">
          <SidebarLeft />
          <ProfileContent />
          <SidebarRight />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

