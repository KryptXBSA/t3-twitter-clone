import React from "react";
import cn from "clsx";
import type { Tweet, User, Like, Retweet, Reply } from "@prisma/client";

import { AnimatePresence, motion } from "framer-motion";

import type { Variants } from "framer-motion";
import { TweetMetadata } from "./TweetMetadata";
import { Body } from "./Body";
import { TweetActions } from "./TweetActions";
import Link from "next/link";
import { Avatar } from "./Avatar";
import { useSession } from "next-auth/react";

export const variants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};
export type TweetProps = Tweet & {
    user: User;
    likes: Like[];
    retweets: Retweet[];
    replies: Reply[];
};
export function Tweet({
    reply,
    tweet,
}: {
    reply?: boolean;
    tweet: TweetProps;
}) {
    return (
        <div className="flex cursor-pointer space-x-2  transition-all  ease-in-out">
            <div className=" flex min-h-full flex-col items-center ">
                <Avatar avatarImage={tweet.user.imageUrl!} />
                {reply && (
                    <div className="hover-animation  w-0.5 h-[80%]  bg-light-line-reply dark:bg-dark-line-reply"></div>
                )}
            </div>
            <div className="flex flex-col">
                <TweetMetadata {...tweet} />
                <Body {...tweet} />
                <div className="flex">
                    {reply ? (
                        <p className="cursor-text text-light-secondary dark:text-dark-secondary">
                            Replying to
                            <Link
                                className="ml-1 text-main-accent"
                                href={`/${tweet.user.username}`}
                            >
                                @{tweet.user.username}
                            </Link>
                        </p>
                    ) : (
                        <div className="w-full">
                            <TweetActions {...tweet} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
