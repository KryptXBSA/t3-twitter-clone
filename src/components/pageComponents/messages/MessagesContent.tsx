import React, { useEffect, useRef, useState } from "react";
import { TweetInput } from "@components/inputs/TweetInput";
import { trpc } from "@utils/trpc";
import { Spinner } from "@components/Spinner";
import { NewTweets } from "@components/NewTweets";
import { PageHead } from "@components/PageHead";
import MainTweet from "@components/MainTweet";
import Avatar from "@components/Avatar";
import { PickVerificationIcon } from "@components/PickVerificationIcon";
import NextLink from "@components/NextLink";

export default function MessagesContent() {
  let allTweets = trpc.tweet.getAllTweets.useQuery({ id: "anysddssdss" });
  const [tweets, setTweets] = useState(allTweets.data?.tweets);
  console.log("tweetssss", tweets, allTweets.data);
  useEffect(() => {
    setTweets(allTweets.data?.tweets);
  }, [allTweets.data]);

  function onPost(body: string) {
    const newTweet = {
      username: "new",
      body,
      name: "Test test",
      id: Date.now(),
    };
    // setTweets([newTweet, ...tweets]);
  }
  return (
    <div className="main-content ">
      <div className="main-border h-screen sm:w-[350px] border-b border-l border-r ">
        <PageHead name="Messages" />
        <div className="flex flex-col ">
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
        <Spinner />
      </div>
    </div>
  );
}

function Message() {
  return (
    <div className="flex items-center gap-3  hover-main px-3 p-2">
      <Avatar size={50} />
      <div className="flex flex-col">
        <p className="flex items-center text-base font-medium leading-6 text-gray-800 dark:text-white">
          aland
          <PickVerificationIcon color={"red"} />
          <span className="ml-1 text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300">
            @{"aland"} · {"10 pm "}
          </span>
        </p>
        <span className="text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300">
          <span className="text-secondary ">{"aland"} </span>
        </span>
      </div>
    </div>
  );
}
