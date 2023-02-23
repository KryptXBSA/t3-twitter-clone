import { SEO } from "@components/SEO";
import { type NextPage } from "next";
import SidebarLeft from "@components/SidebarLeft";
import SidebarRight from "@components/SidebarRight";
import HomeContent from "@components/pageComponents/home/HomeContent";

const Home: NextPage = () => {
  return (
    <>
      <SEO title="Home" />
      <div className="mx-auto ">
        <div className=" flex  flex-row justify-center">
          <SidebarLeft active={0} />
          <HomeContent />
          <SidebarRight />
        </div>
      </div>
    </>
  );
};

export default Home
