import { type NextPage } from "next";
import { PageHead } from "@components/PageHead";
import { useRouter } from "next/router";
import { FollowBtn } from "./FollowBtn";
import { Url } from "./Url";
import { Joined } from "./Joined";
import { FollowStats } from "./FollowStats";
import Avatar from "@components/Avatar";
import MainTweet from "@components/MainTweet";
import { trpc } from "@utils/trpc";
import { useEffect, useState } from "react";
import { EditProfileBtn } from "./EditProfileBtn";

let profile = false;
export const ProfileContent: NextPage = () => {
  const router = useRouter();
  const { username } = router.query as { username: string };
  let allTweets = trpc.tweet.getAllTweets.useQuery({ id: "anysddssdss" });
  const [tweets, setTweets] = useState(allTweets.data?.tweets);
  useEffect(() => {
    setTweets(allTweets.data?.tweets);
  }, [allTweets.data]);
  return (
    <>
      <>
        <section className="mcz">
          <PageHead backBtn profile username={username} name="CoinDesk" />
          {/* User card*/}
          <div>
            <BgImg />
            <div className="p-4">
              <div className="relative flex w-full items-center justify-between">
                <div style={{ marginTop: "-5rem" }}>
                  <Avatar size={130} />
                </div>
                {profile ? <EditProfileBtn /> : <FollowBtn />}
              </div>
              <div className="mt-3 ml-3 w-full justify-center space-y-1">
                <div>
                  <h2 className="text-xl font-bold leading-6 text-white">
                    Aland Sleman
                  </h2>
                  <p className="text-sm font-medium leading-5 text-gray-600">
                    @{username}
                  </p>
                </div>
                <div className="mt-3">
                  <p className="mb-2 leading-tight text-white">
                    Software Engineer / Designer / Entrepreneur <br />
                    Visit my website to test a working <b>Twitter Clone.</b>
                  </p>
                  <div className="flex text-gray-600">
                    <Url />
                    <Joined />
                  </div>
                </div>
                <FollowStats username={username} />
              </div>
            </div>
            <hr className="border-gray-800" />
          </div>
          <ul className="list-none">
            {tweets?.map((t) => (
              <div className="">
                <MainTweet key={t.id} tweet={t} />
              </div>
            ))}
          </ul>
        </section>
      </>
    </>
  );
};

function BgImg() {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        height: 200,
        backgroundImage:
          "url(https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200)",
      }}
    ></div>
  );
}
