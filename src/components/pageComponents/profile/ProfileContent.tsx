import { type NextPage } from "next";
import { PageHead } from "@components/PageHead";
import { useRouter } from "next/router";
import { FollowBtn } from "./FollowBtn";
import { Url } from "./Url";
import { Joined } from "./Joined";
import { FollowStats } from "./FollowStats";
import { Tweet } from "./Tweet";

export const ProfileContent: NextPage = () => {
  const router = useRouter();
  const { username } = router.query as { username: string };
  return (
    <>
      <>
        <section className="main-content">
          <PageHead backBtn profile username={username} name="CoinDesk" />
          {/* User card*/}
          <div>
            <div
              className="w-full bg-cover bg-center bg-no-repeat"
              style={{
                height: 200,
                backgroundImage:
                  "url(https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200)",
              }}
            >
              <img
                className="h-full w-full opacity-0"
                src="https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200"
                alt=""
              />
            </div>
            <div className="p-4">
              <div className="relative flex w-full">
                {/* Avatar */}
                <div className="flex flex-1">
                  <div style={{ marginTop: "-6rem" }}>
                    <div
                      style={{ height: "9rem", width: "9rem" }}
                      className="md avatar relative rounded-full"
                    >
                      <img
                        style={{ height: "9rem", width: "9rem" }}
                        className="md relative rounded-full border-4 border-gray-900"
                        src="https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg"
                        alt=""
                      />
                      <div className="absolute" />
                    </div>
                  </div>
                </div>
                <FollowBtn />
              </div>
              <div className="mt-3 ml-3 w-full justify-center space-y-1">
                <div>
                  <h2 className="text-xl font-bold leading-6 text-white">
                    Aland Sleman
                  </h2>
                  <p className="text-sm font-medium leading-5 text-gray-600">
                    {username}
                  </p>
                </div>
                <div className="mt-3">
                  <p className="mb-2 leading-tight text-white">
                    Software Engineer / Designer / Entrepreneur <br />
                    Visit my website to test a working <b>
                      Twitter Clone.
                    </b>{" "}
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
            <Tweet />
          </ul>
        </section>
      </>
    </>
  );
};
