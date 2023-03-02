import React, { useEffect, useRef, useState } from "react";
import { TweetInput } from "@components/inputs/TweetInput";
import { trpc } from "@utils/trpc";
import { Spinner } from "@components/Spinner";
import { NewTweets } from "@components/NewTweets";
import { PageHead } from "@components/PageHead";
import MainTweet from "@components/MainTweet";
import { useInView } from "react-intersection-observer";
import { newTweet } from "../../../../server/src/router/routes/tweetRouter/newTweet";

export default function HomeContent() {
  let getTweets = trpc.tweet.getAllTweets.useMutation();
  const [tweets, setTweets] = useState(getTweets.data?.tweets);
  const [hasMore, setHasMore] = useState(false);

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  async function fetchTweets() {
    const newTweets = await getTweets.mutateAsync({
      skip: tweets?.length || 0,
    });
        console.log("dateee",newTweets.tweets)
      setTweets((prevTweets) => [
        ...(prevTweets || []),
        ...(newTweets?.tweets || []),
      ]);
    setHasMore(newTweets.hasMore); // Update the hasMore state
  }

  useEffect(() => {
    fetchTweets();
  }, []);

  // Refetch tweets when inView and not loading
  useEffect(() => {
    if (inView && !getTweets.isLoading && hasMore) {
      fetchTweets();
    }
  }, [getTweets.isLoading, inView, tweets, hasMore]);

  function onPost(data: any) {
    //@ts-ignore
    data && setTweets([data, ...tweets]);
  }
  return (
    <div className="main-content ">
      <div className="main-border mcz border-b border-l border-r ">
        <PageHead name="Home" />
        <TweetInput onPost={onPost} />

        {/* 
         <NewTweets /> */}
        {tweets?.map((t, i) => (
          <MainTweet key={i} tweet={t} />
        ))}
        <div ref={ref}>
          {hasMore && <Spinner />}
          {getTweets.isLoading && <Spinner />}
        </div>
      </div>
    </div>
  );
}
