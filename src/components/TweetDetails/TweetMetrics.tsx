import React from "react";
import moment from "moment";

export function TweetMetrics() {
    let metrics = {
        date: 1677449651000,
    };
    return (
        <div className="flex flex-col divide-y divide-gray-600 ">
            <div className="text-secondary flex py-3 text-md">
                <p>{moment(metrics.date).format("h:mm A · MMM D, YYYY")}</p>{" "}
            </div>
            <div className="text-secondary flex gap-4 py-3">
                <div className="flex ">
                    <span className="font-semibold text-white">{20}</span>
                    <span className="text-secondary ml-1">Retweets</span>
                </div>
                <div className="flex ">
                    <span className="text-white font-semibold">
                        {15}
                    </span>
                    <span className="text-secondary ml-1">Likes</span>
                </div>
            </div>
        </div>
    );
}

