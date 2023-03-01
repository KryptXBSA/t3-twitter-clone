import React, { useEffect, useRef, useState } from "react";
import { Spinner } from "@components/Spinner";
import { trpc } from "@utils/trpc";
import { PageHead } from "@components/PageHead";
import MainButton from "@components/MainButton";
import { TweetDetailsMetaData } from "@components/TweetDetails/TweetDetailsMetaData";
import { UserMetadata } from "@components/UserMetadata/UserMetadata";
import NextLink from "@components/NextLink";
export default function FollowersContent({
    username,
    showFollowers,
}: {
    username: string;
    showFollowers: boolean;
}) {
    let userFollowers = trpc.user.getUserFollowers.useQuery({ username });
    const [followers, setFollowers] = useState(
        userFollowers.data?.userFollowers![
        showFollowers ? "followers" : "following"
        ]
    );
    useEffect(() => {
        setFollowers(
            userFollowers.data?.userFollowers![
            showFollowers ? "followers" : "following"
            ]
        );
    }, [userFollowers.data]);
    return (
        <div className="main-border h-screen border-b border-l border-r sm:w-[600px]">
            <PageHead backBtn name={showFollowers ? "Followers" : "Following"} />

            {userFollowers.data || userFollowers.isLoading ? (
                <>
                    <div className="flex flex-col space-y-4 p-2">
                        {followers?.map((f) => (
                            <div key={f.id} className=" flex flex-col -space-y-2.5">
                                            {/* @ts-ignore */}
                                <NextLink href={`/${f[showFollowers ? "following" : "follower"].username}`}>
                                    <div className=" flex ">
                                        <UserMetadata
                                             // {/* @ts-ignore */}
                                            user={{ ...f[showFollowers ? "following" : "follower"] }}
                                        />
                                        <MainButton className="ml-auto h-8 w-24" text="Profile" />
                                    </div>
                                </NextLink>
                                <p className="text-tweet ml-[65px] break-words">
                                    {/* @ts-ignore */}
                                    {f[showFollowers ? "following" : "follower"].bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <Spinner />
            )}
        </div>
    );
}
