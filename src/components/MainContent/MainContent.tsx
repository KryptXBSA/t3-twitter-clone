import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { CustomTimeline } from "./CustomTimeline";
import { NewTweets } from "./NewTweets";
import { PostTweet } from "./PostTweet";
import { Spinner } from "./Spinner";
import { TimelineNotification } from "./TimelineNotification";
import { Tweet } from "@components/Tweet/Tweet";
import { trpc } from "../../utils/trpc";

export default function MainContent() {
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
        <div className="h-screen duration-1000 sm:w-[700px]">
            <div className="sticky top-0 flex items-center justify-between border-b border-l border-r border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-dim-900">
                <h2 className="font-sm font-bold text-gray-800 dark:text-gray-100">
                    Home
                </h2>
                <CustomTimeline />
            </div>
            <PostTweet onPost={onPost} />
            <NewTweets />

                {tweets?.map((t) => (
                <div className="border border-t-0 border-gray-500">
                    <Tweet key={t.id} tweet={t} />
                </div>
                ))}
            <TimelineNotification />
            <Spinner />
        </div>
    );
}
let tweets0: any = [];
