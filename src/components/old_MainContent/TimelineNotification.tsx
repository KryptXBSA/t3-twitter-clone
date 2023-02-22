import React from "react";

export function TimelineNotification() {
    return (
        <div className="border-b border-l border-r  py-2 main-border ">
            <div className="duration-350 flex cursor-pointer flex-col items-center justify-center border-b border-t main-border  p-6 text-center text-sm text-blue-400 transition ease-in-out    ">
                <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                    Customize your view
                </h1>
                <p className="mb-5 text-gray-500">
                    Manage your font size, color and background. These settings affect
                    all the Twitter accounts on this browser.
                </p>
                <a
                    href="javascript:void(0)"
                    className="font-sm duration-350 mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-blue-400 py-3 font-bold text-white transition ease-in-out hover:bg-blue-500 xl:w-48"
                >
                    <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="block h-6 w-6 xl:hidden"
                    >
                        <g>
                            <path d="M15.692 11.205l6.383-7.216c.45-.45.45-1.18 0-1.628-.45-.45-1.178-.45-1.627 0l-7.232 6.402s.782.106 1.595.93c.548.558.882 1.51.882 1.51z" />
                            <path d="M17.45 22.28H3.673c-1.148 0-2.083-.946-2.083-2.11V7.926c0-1.165.934-2.112 2.082-2.112h5.836c.414 0 .75.336.75.75s-.336.75-.75.75H3.672c-.32 0-.583.274-.583.612V20.17c0 .336.26.61.582.61h13.78c.32 0 .583-.273.583-.61v-6.28c0-.415.336-.75.75-.75s.75.335.75.75v6.28c0 1.163-.934 2.11-2.084 2.11z" />
                        </g>
                    </svg>
                    <span className="text-md hidden font-bold xl:block">
                        Toggle Dark Mode
                    </span>
                </a>
            </div>
        </div>
    );
}

