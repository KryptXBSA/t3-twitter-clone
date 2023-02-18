import React, { useEffect, useRef, useState } from "react";
import { TweetInput } from "@components/inputs/TweetInput";
import { Tweet } from "@components/Tweet/Tweet";
import { trpc } from "@utils/trpc";
import { Spinner } from "@components/Spinner";
import { NewTweets } from "@components/NewTweets";

export default function HomeContent() {
    let allTweets = trpc.tweet.getAllTweets.useQuery({ id: "anysddssdss" });
    const [tweets, setTweets] = useState(allTweets.data?.tweets);
    console.log("tweetssss",tweets,allTweets.data)
    useEffect(() => {
        setTweets(allTweets.data?.tweets)
    }, [allTweets.data])

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
        <div className="h-screen sm:w-[700px]">
        <div className="h-full border-b border-l border-r main-border sm:w-[700px]">
            <div className="sticky top-0 flex items-center justify-between px-4 py-3  dark:bg-dim-900">
                <h2 className="font-sm font-bold text-gray-800 dark:text-gray-100">
                    Home
                </h2>
            </div>
            <TweetInput onPost={onPost} />
                <NewTweets/>
                {tweets?.map((t) => (
                <div className="tweet-hover border-b main-border p-4 ">
                    <Tweet key={t.id} tweet={t} />
                </div>
                ))}
            <Spinner />
        </div>
        </div>
    );
}
