import { useFormattedDate } from "@hooks/useFormattedDate";
import React from "react";
import { TweetProps } from "./Tweet";
import { VerifiedIcon } from "@icons/tweet/VerifiedIcon";
import { Avatar } from "./Avatar";

export function TweetMetadata(props: TweetProps) {
    return (
        <>
        <div className="flex flex-col">
                <p className="flex items-center text-base font-medium leading-6 text-gray-800 dark:text-white">
                    {props.user.name || props.user.username}
                    <VerifiedIcon />
                </p>
                    <span className="text-sm font-medium leading-5 text-secondary transition duration-150 ease-in-out group-hover:text-gray-300">
                        @{props.user.username} 
                    </span>
        </div>
        </>
    );
}


