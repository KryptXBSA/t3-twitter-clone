import React from "react";

import type { Variants } from "framer-motion";
import { TweetMetadata } from "./TweetMetadata";
import Link from "next/link";
import NextLink from "@components/NextLink";
import Avatar from "@components/Avatar";
import { TweetProps } from "@types";
import TweetOptions from "@components/TweetOptions";
import { Body } from "@components/MainTweet/Body";
import { TweetActions } from "@components/MainTweet/TweetActions";

export const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};
export function TweetDetailsReply({
  reply,
  tweet,
}: {
  reply?: boolean;
  tweet: TweetProps;
}) {
  return (
    <NextLink disabled={reply} href={`/tweet/${tweet.id}`}>
      <div className="tweet-hover main-border border-b mb-2 ">
        <div className="fade-in flex   cursor-pointer space-x-2  transition-all  ease-in-out">
          <div className=" flex min-h-full flex-col items-center ">
            <Avatar avatarImage={tweet.user.profileImage!} />
            {reply && (
              <div className="hover-animation  bg-line-reply dark:bg-dark-line-reply  h-[80%] w-0.5"></div>
            )}
          </div>
          <div className="flex w-full grow flex-col">
            <NextLink href={`/${tweet.user.username}`}>
              <TweetMetadata color={tweet.user.badge!} {...tweet} />
            </NextLink>
            <Body {...tweet} />
            <TweetActions allDisabled {...tweet} />
          </div>
          <TweetOptions id={tweet.id} />
        </div>
      </div>
    </NextLink>
  );
}
