import React from "react";
import cn from "clsx";
import type { Tweet, User, Like, Retweet, Reply } from "@prisma/client";

import { AnimatePresence, motion } from "framer-motion";

import type { Variants } from "framer-motion";
import { TweetMetadata } from "./TweetMetadata";
import { Body } from "./Body";
import { TweetActions } from "./TweetActions";
import Link from "next/link";

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
        <motion.article
            {...(true ? { ...variants, layout: "position" } : {})}
            animate={{
                ...variants.animate,
            }}
            className="dark:hover:bg-dim-300 flex cursor-pointer flex-col pb-4 transition-all  ease-in-out"
        >
            <div className="p-4 pb-0">
                <TweetMetadata {...tweet} />
            </div>
            <div style={{ paddingTop: -10 }} className="pl-20 ">
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
        </motion.article>
    );
}
