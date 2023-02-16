import React from "react";

export function NewTweets() {
    return (
        <div className="border-b border-l border-r border-gray-200 bg-gray-50 py-2 dark:border-dim-200 dark:bg-dim-300">
            <div className="duration-350 flex flex-shrink-0 cursor-pointer items-center justify-center border-b border-t border-gray-200 bg-white py-4 text-sm text-blue-400 transition ease-in-out hover:bg-gray-50 dark:border-dim-200 dark:bg-dim-900 dark:hover:bg-dim-300">
                Show 9 Tweets
            </div>
        </div>
    );
}

