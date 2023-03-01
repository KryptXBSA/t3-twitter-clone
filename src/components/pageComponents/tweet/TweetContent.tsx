import React, { useEffect, useRef, useState } from "react";
import { Spinner } from "@components/Spinner";
import { trpc } from "@utils/trpc";
import { PageHead } from "@components/PageHead";
import { useEventContext } from "@context/EventContext";
import { TweetDetails } from "@components/TweetDetails";

export default function TweetContent({ tweetId }: { tweetId: string }) {
  let { data } = trpc.tweet.getTweet.useQuery({ id: tweetId });

  console.log("tweeet", data);
  // let allTweets = trpc.tweet.getAllTweets.useQuery({ id: "anysddssdss" });
  // const [tweets, setTweets] = useState(allTweets.data?.tweets);
  // console.log("tweetssss", tweets, allTweets.data);
  // useEffect(() => {
  //   setTweets(allTweets.data?.tweets);
  // }, [allTweets.data]);
  //
  return (
    <div className="main-border mcz h-screen border-b border-l border-r">
      <PageHead backBtn name="Tweet" />
      {data?.tweet ? (
          <TweetDetails  tweet={data?.tweet!} />
      ) : (
        <Spinner />
      )}
    </div>
  );
}
