import { SEO } from "@components/SEO";
import { type NextPage } from "next";
import SidebarLeft from "@components/SidebarLeft";
import DirectMessage from "@components/DirectMessage";
import MessagesContent from "@components/pageComponents/messages/MessagesContent";

const Home: NextPage = () => {
  return (
    <>
      <SEO title="Home" />
      <div className="mx-auto ">
        <div className="flex  flex-row md:mr-12 justify-center">
          <SidebarLeft active={0} />
          <MessagesContent />
          <DirectMessage />
        </div>
      </div>
    </>
  );
};

export default Home;
