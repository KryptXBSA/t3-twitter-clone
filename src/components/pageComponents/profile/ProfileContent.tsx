import { type NextPage } from "next";
import { PageHead } from "@components/PageHead";
import { useRouter } from "next/router";
import { Url } from "./Url";
import { Joined } from "./Joined";
import { FollowStats } from "./FollowStats";
import Avatar from "@components/Avatar";
import MainTweet from "@components/MainTweet";
import { trpc } from "@utils/trpc";
import { useEffect, useState } from "react";
import { EditProfileBtn } from "./EditProfileBtn";
import EditProfileModal from "@components/modals/EditProfileModal";
import { Spinner } from "@components/Spinner";
import { SEO } from "@components/SEO";
import { getUserSession } from "@hooks/getUserSession";
import MainButton from "@components/MainButton";

export const ProfileContent: NextPage = () => {
  const router = useRouter();
  const { username } = router.query as { username: string };
  let getUser = trpc.user.getUser.useQuery({ username });
  let followUser = trpc.user.followUser.useMutation();
  const [user, setUser] = useState(getUser.data?.user);
  let session = getUserSession();
  const [isFollowing, setIsFollowing] = useState(
    user?.followers.some((f) => f.followingId === session.id)
  );
  useEffect(() => {
    setUser(getUser.data?.user);
    setIsFollowing(user?.followers.some((f) => f.followingId === session.id));
  }, [getUser.data,user]);
  let [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  console.log("fffffffffff", user?.followers,session.id);
  function editProfile() {}
  async function follow() {
    setIsFollowing(!isFollowing);
    let res = await followUser.mutateAsync({ id: user?.id! });
    console.log("tressss", res);
  }
  return (
    <>
      <section className="mcz">
        <PageHead
          backBtn
          profile
          username={username}
          name={user?.name || username}
        />
        <SEO title={user?.name || username} />
        {getUser.data ? (
          <>
            <div>
              <BgImg src={user?.bgImageUrl!} />
              <div className="p-4">
                <div className="relative flex w-full items-center justify-between">
                  <div style={{ marginTop: "-5rem" }}>
                    <Avatar size={130} />
                  </div>
                  {username !== user?.username ? (
                    <EditProfileBtn onClick={toggleModal} />
                  ) : (
                    <MainButton
                      onClick={follow}
                      text={isFollowing ? "Unfollow" : "Follow"}
                    />
                  )}
                </div>
                <div className="mt-3 ml-3 w-full justify-center space-y-1">
                  <div>
                    <h2 className="text-xl font-bold leading-6 text-white">
                      {user?.name || username}
                    </h2>
                    <p className="text-sm font-medium leading-5 text-gray-600">
                      @{username}
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className="mb-2 leading-tight text-white">{user?.bio}</p>
                    <div className="flex text-gray-600">
                      <Url website={user?.website!} />
                      <Joined date={user?.createdAt!} />
                    </div>
                  </div>
                  <FollowStats
                    followers={user?.followersCount!}
                    following={user?.followingCount!}
                    username={username}
                  />
                </div>
              </div>
              <hr className="border-gray-800" />
            </div>
            <ul className="list-none">
              {user?.tweets?.map((t) => (
                <div className="">
                  <MainTweet key={t.id} tweet={t} />
                </div>
              ))}
            </ul>
          </>
        ) : (
          <>
            <Spinner />
          </>
        )}
      </section>
      <EditProfileModal
        isOpen={isOpen}
        closeModal={toggleModal}
        onSave={editProfile}
      />
    </>
  );
};

function BgImg({ src }: { src: string }) {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        height: 200,
        backgroundImage:
          src ||
          "url(https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200)",
      }}
    ></div>
  );
}
