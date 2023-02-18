import { useFormattedDate } from "@hooks/useFormattedDate";
import React from "react";
import { TweetProps } from "./Tweet";
import { VerifiedIcon } from "@icons/tweet/VerifiedIcon";

export function TweetMetadata(props: TweetProps) {
    const formattedDate = useFormattedDate(props.createdAt);

    return (
        <div className="flex">
            <Avatar />
            <div className="ml-3">
                <p className="flex items-center text-base font-medium leading-6 text-gray-800 dark:text-white">
                    {props.user.name || props.user.username}
                    <VerifiedIcon />
                    <span className="ml-1 text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300">
                        @{props.user.username} · {formattedDate}
                    </span>
                </p>
            </div>
        </div>
    );
}

function Avatar() {
    return (
        <div>
            <img
                className="inline-block h-12 w-12 rounded-full"
                src="https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg"
                alt=""
            />
        </div>
    );
}
