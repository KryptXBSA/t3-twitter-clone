import React from "react";
import moment from "moment";
import { TweetProps } from "@types";

export function TweetMetrics({tweet}:{tweet:TweetProps}) {
    return (
        <div className="flex flex-col divide-y divide-gray-600 ">
            <div className="text-secondary flex py-3 text-md">
                <p>{moment(tweet.createdAt).format("h:mm A · MMM D, YYYY")}</p>{" "}
            </div>
            <div className="text-secondary flex gap-4 py-3">
                <div className="flex ">
                    <span className="font-semibold text-white">{tweet.retweetCount}</span>
                    <span className="text-secondary ml-1">Retweets</span>
                </div>
                <div className="flex ">
                    <span className="text-white font-semibold">
                        {tweet.likeCount}
                    </span>
                    <span className="text-secondary ml-1">Likes</span>
                </div>
            </div>
        </div>
    );
}

