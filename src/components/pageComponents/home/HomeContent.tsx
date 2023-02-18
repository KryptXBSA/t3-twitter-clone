import React, { useEffect, useRef, useState } from "react";
import { TweetInput } from "@components/inputs/TweetInput";
import { Tweet } from "@components/Tweet/Tweet";
import { trpc } from "@utils/trpc";
import { Spinner } from "@components/Spinner";
import { NewTweets } from "@components/NewTweets";
import { PageHead } from "@components/PageHead";

export default function HomeContent() {
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
    <div className="main-content">
      <div className="main-border h-full border-b border-l border-r sm:w-[700px]">
        <PageHead name="Home" />
        <TweetInput onPost={onPost} />
        <NewTweets />
        {tweets?.map((t) => (
          <div className="tweet-hover main-border border-b p-4 ">
            <Tweet key={t.id} tweet={t} />
          </div>
        ))}
        <Spinner />
      </div>
    </div>
  );
}
