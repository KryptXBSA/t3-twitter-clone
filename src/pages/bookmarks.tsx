import { SEO } from "@components/SEO";
import { type NextPage } from "next";
import SidebarLeft from "@components/SidebarLeft";
import SidebarRight from "@components/SidebarRight/SidebarRight";
import BookmarksContent from "@components/pageComponents/bookmarks/BookmarksContent";

const Home: NextPage = () => {
    return (
        <>
            <SEO title="Home" />
            <div className="mx-auto ">
                <div className="flex  flex-row justify-center">
                    <SidebarLeft active={0} />
                    <BookmarksContent/>
                    <SidebarRight />
                </div>
            </div>
        </>
    );
};

export default Home;
