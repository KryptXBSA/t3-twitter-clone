import React from "react";
import { TweetProps } from "./Tweet";

export function Body(props: TweetProps) {
    return (
        <>
            <p className="width-auto flex-shrink  text-base font-medium text-gray-800 dark:text-white">
                {props.body}
            </p>
            <div className="my-3 mr-2 flex rounded-2xl border border-gray-600">
                <img
                    className="rounded-2xl"
                    src="https://pbs.twimg.com/media/EnTkhz-XYAEH2kY?format=jpg&name=small"
                    alt="" />
            </div>
        </>
    );
}

