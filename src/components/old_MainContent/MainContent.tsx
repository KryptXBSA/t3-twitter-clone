import React, { useEffect, useRef, useState } from "react";
import { CustomTimeline } from "./CustomTimeline";
import { NewTweets } from "@components/NewTweets";
import { TweetInput } from "@components/inputs/TweetInput";
import { Spinner } from "@components/Spinner";
import { TimelineNotification } from "./TimelineNotification";
import { trpc } from "../../utils/trpc";

export default function MainContent() {
    let allTweets = trpc.tweet.getAllTweets.useQuery({ id: "anysddssdss" });
    const [tweets, setTweets] = useState(allTweets.data?.tweets);
    console.log("tweetssss",tweets,allTweets.data)
    useEffect(() => {
        setTweets(allTweets.data?.tweets)
    }, [allTweets.data])

    function onPost(body: string,image:string) {
        const newTweet = {
            username: "new",
            body,
            image,
            name: "Test test",
            id: Date.now(),
        };
        setTweets([newTweet, ...tweets]);
    }
    return (
        <div className="h-screen duration-1000 border-b border-l main-border sm:w-[700px]">
            <div className="sticky top-0 flex items-center justify-between border-b border-l border-r main-border px-4 py-3  dark:bg-dim-900">
                <h2 className="font-sm font-bold text-gray-800 dark:text-gray-100">
                    Home
                </h2>
                <CustomTimeline />
            </div>
            <TweetInput onPost={onPost} />
            <NewTweets />

                {tweets?.map((t) => (
                <div className="border tweet-hover p-4 border-t-0 main-border">
                    <Tweet key={t.id} tweet={t} />
                </div>
                ))}
            <TimelineNotification />
            <Spinner />
        </div>
    );
}
