import { SEO } from "@components/SEO";
import { type NextPage } from "next";
import SidebarLeft from "@components/SidebarLeft";
import SidebarRight from "@components/SidebarRight/SidebarRight";
import HomeContent from "@components/pageComponents/home/HomeContent";

const Home: NextPage = () => {
  return (
    <>
      <SEO title="Home" />
      <div className="mx-auto ">
        <div className="bg-r flex  flex-row justify-center">
          <SidebarLeft />
          <HomeContent />
          <SidebarRight />
        </div>
      </div>
    </>
  );
};

export default Home;
