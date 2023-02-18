import React from "react";
import { TweetProps } from "./Tweet";

export function Body(props: TweetProps) {
    return (
        <>
            <p className="width-auto flex-shrink  text-base font-medium text-gray-800 dark:text-white">
                {props.body}
            </p>
            {props.images[0] && (
                <div className="my-3 mr-2 flex rounded-2xl ">
                    <img className="rounded-2xl" src={props.images[0]} alt="" />
                </div>
            )}
        </>
    );
}
