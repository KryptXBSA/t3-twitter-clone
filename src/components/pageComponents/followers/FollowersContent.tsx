import React, { useEffect, useRef, useState } from "react";
import { Spinner } from "@components/Spinner";
import { trpc } from "@utils/trpc";
import { PageHead } from "@components/PageHead";
import { TweetDetailsMetaData } from "@components/pageComponents/tweet/Tweet/TweetDetails";
import MainButton from "@components/MainButton";
export default function FollowersContent() {
  let tweet = trpc.tweet.getTweet.useQuery({
    id: "b7415a86-eb32-4899-943b-3b49f2b56bb4",
  });
  return (
    <div className="main-border h-screen border-b border-l border-r sm:w-[600px]">
      <PageHead backBtn name="Followers" />

      {tweet.data?.tweet ? (
        <>
          <div className="flex flex-col space-y-4 p-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} className=" flex flex-col -space-y-2.5">
                <div key={i} className=" flex ">
                  <TweetDetailsMetaData tweet={tweet.data?.tweet} />
                  <MainButton className="ml-auto w-24 h-8" text="Follow" />
                </div>
                <p className="text-tweet ml-[65px] break-words">
                  {tweet.data?.tweet?.body}
                  {tweet.data?.tweet?.body}
                  {tweet.data?.tweet?.body}
                  {tweet.data?.tweet?.body}
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
