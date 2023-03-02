import React from "react";
import { TweetMetadata } from "./TweetMetadata";
import { Avatar } from "./Avatar";
import NextLink from "@components/NextLink";
import { TweetProps } from "./TweetDetails";


export function TweetDetailsMetaData({
    tweet, reply,
}: {
    tweet: TweetProps;
    reply?: boolean;
}) {
    return (
        <div className="flex   space-x-2   ">
            <div className=" flex min-h-full flex-col items-center ">
                <Avatar avatarImage={tweet.user.profileImage!} />
                {reply && (
                    <div className="hover-animation  bg-line-reply dark:bg-dark-line-reply  h-[80%] w-0.5"></div>
                )}
            </div>
            <div className="flex w-full flex-col">
                <NextLink href={`/${tweet.user.username}`}>
                    <TweetMetadata color={tweet.user.badge!} {...tweet} />
                </NextLink>
            </div>
        </div>
    );
}

