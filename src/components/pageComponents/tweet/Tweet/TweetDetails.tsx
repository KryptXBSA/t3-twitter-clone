import React from "react";
import cn from "clsx";
import type { Tweet, User, Like, Retweet, Reply } from "@prisma/client";

import { AnimatePresence, motion } from "framer-motion";

import type { Variants } from "framer-motion";
import { TweetMetadata } from "./TweetMetadata";
import { Body } from "./Body";
import { TweetActions } from "./TweetActions";
import Link from "next/link";
import { Avatar } from "./Avatar";
import { useSession } from "next-auth/react";
import NextLink from "@components/NextLink";
import ReactTextareaAutosize from "react-textarea-autosize";
import { TweetReply } from "@components/TweetReply";
import MainButton from "@components/MainButton";

export const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};
export type TweetProps = Tweet & {
  user: User;
  likes: Like[];
  retweets: Retweet[];
  replies: Reply[];
};
export function TweetDetails({
  reply,
  tweet,
}: {
  reply?: boolean;
  tweet: TweetProps;
}) {
  return (
    <div className="fade-in flex cursor-pointer flex-col   transition-all  ease-in-out">
      <TweetDetailsMetaData tweet={tweet} reply={reply!} />

      <Body {...tweet} />

      <div className="my-2 flex  flex-col space-y-4  ">
        <p className="">{`10:58 PM · Feb 17, 2023
·
19.6K
 Views`}</p>
        <p className="">{`20
 Retweets
2
 Quote Tweets
334
 Likes`}</p>
        <div className="w-full">
          <TweetActions {...tweet} />
        </div>

        <div className="main-border flex items-center gap-6 border-b">
          <div className="">
            <Avatar avatarImage="" />
          </div>

          <ReactTextareaAutosize
            maxRows={9}
            rows={4}
            placeholder="Tweet your reply"
            className="flex h-20 w-full resize-none items-center justify-center border-0 bg-transparent text-gray-900 placeholder-gray-400  focus:outline-none dark:text-white"
          />

          <MainButton text="Reply" type="submit" />
        </div>
        <TweetReply tweet={tweet} />
      </div>
    </div>
  );
}

export function TweetDetailsMetaData({
  tweet,
  reply,
}: {
  tweet: TweetProps;
  reply: boolean;
}) {
  return (
    <div className="flex   space-x-2   ">
      <div className=" flex min-h-full flex-col items-center ">
        <Avatar avatarImage={tweet.user.imageUrl!} />
        {reply && (
          <div className="hover-animation  bg-line-reply dark:bg-dark-line-reply  h-[80%] w-0.5"></div>
        )}
      </div>
      <div className="flex w-full flex-col">
        <NextLink href={`/${tweet.user.username}`}>
          <TweetMetadata {...tweet} />
        </NextLink>
      </div>
    </div>
  );
}
