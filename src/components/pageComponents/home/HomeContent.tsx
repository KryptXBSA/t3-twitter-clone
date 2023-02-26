import React, { useEffect, useRef, useState } from "react";
import { TweetInput } from "@components/inputs/TweetInput";
import { trpc } from "@utils/trpc";
import { Spinner } from "@components/Spinner";
import { NewTweets } from "@components/NewTweets";
import { PageHead } from "@components/PageHead";
import MainTweet from "@components/MainTweet";

export default function HomeContent() {
  let allTweets = trpc.tweet.getAllTweets.useQuery({ id: "anysddssdss" });
  const [tweets, setTweets] = useState(allTweets.data?.tweets);
  console.log("tweetssss", tweets, allTweets.data);
  useEffect(() => {
    setTweets(allTweets.data?.tweets);
  }, [allTweets.data]);

  function onPost(data: any) {
    console.log("onPostData", data);
    data && setTweets([data, ...tweets]);
  }
  return (
    <div className="main-content ">
      <div className="main-border mcz border-b border-l border-r ">
        <PageHead name="Home" />
        <TweetInput onPost={onPost} />
        <NewTweets />
        {tweets?.map((t) => (
          <MainTweet key={t.id} tweet={t} />
        ))}
        <Spinner />
      </div>
    </div>
  );
}
