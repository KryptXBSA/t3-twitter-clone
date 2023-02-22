import React from "react";
import type { Tweet, User, Like, Retweet, Reply } from "@prisma/client";

import type { Variants } from "framer-motion";
import { Avatar } from "./Avatar";
import ReactTextareaAutosize from "react-textarea-autosize";
import { TweetReply } from "@components/TweetReply";
import MainButton from "@components/MainButton";
import { Body } from "@components/MainTweet/Body";
import { TweetDetailsMetaData } from "./TweetDetailsMetaData";
import { TweetMetrics } from "./TweetMetrics";
import { TweetActions } from "@components/MainTweet/TweetActions";
import TweetDetailsReply from "./TweetDetailsReply";

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
    <div className="fade-in flex cursor-pointer flex-col px-4   transition-all  ease-in-out">
      <TweetDetailsMetaData tweet={tweet} reply={reply!} />

      <Body {...tweet} />

      <div className="my-2 flex  flex-col space-y-4  ">
        <TweetMetrics />
        <div className="w-full border-y main-border">
          <TweetActions {...tweet} />
        </div>

        <div className="main-border flex items-center gap-6 border-b pb-5 ">
          <div className="">
            <Avatar avatarImage="" />
          </div>
          <ReactTextareaAutosize
            maxRows={9}
            rows={4}
            placeholder="Tweet your reply"
            className="flex h-20 w-full resize-none items-center justify-center  bg-transparent text-secondary text-lg placeholder-gray-400  focus:outline-none "
          />

          <MainButton text="Reply" type="submit" />
        </div>
        <div className="flex flex-col ">
        <TweetDetailsReply tweet={tweet} />
        <TweetDetailsReply tweet={tweet} />
        <TweetDetailsReply tweet={tweet} />
        </div>
      </div>
    </div>
  );
}


