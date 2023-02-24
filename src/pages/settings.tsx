import { SEO } from "@components/SEO";
import { type NextPage } from "next";
import SidebarLeft from "@components/SidebarLeft";
import DirectMessage from "@components/DirectMessage";
import MessagesContent from "@components/pageComponents/messages/MessagesContent";
import SettingsContent from "@components/pageComponents/settings/SettingsContent";

const Home: NextPage = () => {
  return (
    <>
      <SEO title="Home" />
      <div className="mx-auto ">
        <div className="flex  flex-row md:ml-12 justify-center">
          <SidebarLeft active={5} />
          <SettingsContent/>
                    <div className="invisible">
          <DirectMessage />
                    </div>
        </div>
      </div>
    </>
  );
};

export default Home;
