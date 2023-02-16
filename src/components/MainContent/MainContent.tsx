import React from "react";

export default function MainContent() {
    return (
        <div className="h-screen sm:w-[700px]">
            {/* Header */}
            <div className="sticky top-0 flex items-center justify-between border-b border-l border-r border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-dim-900">
                {/* Title */}
                <h2 className="font-sm font-bold text-gray-800 dark:text-gray-100">
                    Home
                </h2>
                {/* /Title */}
                {/* Custom Timeline */}
                <div>
                    <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 text-blue-400"
                        fill="currentColor"
                    >
                        <g>
                            <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z" />
                        </g>
                    </svg>
                </div>
                {/* /Custom Timeline */}
            </div>
            {/* /Header */}
            {/* Post Tweet */}
            <div className="border-b border-l border-r border-gray-200 pb-4 dark:border-dim-200">
                <div className="flex flex-shrink-0 p-4 pb-0">
                    <div className="items-top flex w-12">
                        <img
                            className="inline-block h-10 w-10 rounded-full"
                            src="https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg"
                            alt=""
                        />
                    </div>
                    <div className="w-full p-2">
                        <textarea
                            className="h-10 w-full resize-none border-0 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none dark:text-white"
                            placeholder="What's happening?"
                            defaultValue={""}
                        />
                    </div>
                </div>
                <div className="items-top flex w-full p-2 pl-14 text-white">
                    <a
                        href="#"
                        className="rounded-full p-2 text-blue-400 hover:bg-blue-50 dark:hover:bg-dim-800"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                            <g>
                                <path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z" />
                                <circle cx="8.868" cy="8.309" r="1.542" />
                            </g>
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="rounded-full p-2 text-blue-400 hover:bg-blue-50 dark:hover:bg-dim-800"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                            <g>
                                <path d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z" />
                                <path d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z" />
                            </g>
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="rounded-full p-2 text-blue-400 hover:bg-blue-50 dark:hover:bg-dim-800"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                            <g>
                                <path d="M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z" />
                            </g>
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="rounded-full p-2 text-blue-400 hover:bg-blue-50 dark:hover:bg-dim-800"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                            <g>
                                <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z" />
                                <path d="M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z" />
                                <circle cx="14.738" cy="9.458" r="1.478" />
                                <circle cx="9.262" cy="9.458" r="1.478" />
                            </g>
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="rounded-full p-2 text-blue-400 hover:bg-blue-50 dark:hover:bg-dim-800"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                            <g>
                                <path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z" />
                                <path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z" />
                                <path d="M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z" />
                                <path d="M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z" />
                            </g>
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="ml-auto mr-1 rounded-full bg-blue-400 py-1 px-4 text-white hover:bg-blue-500"
                    >
                        <span className="text-sm font-bold">Tweet</span>
                    </a>
                </div>
            </div>
            {/* /Post Tweet */}
            {/* Timeline */}
            {/* New Tweets */}
            <div className="border-b border-l border-r border-gray-200 bg-gray-50 py-2 dark:border-dim-200 dark:bg-dim-300">
                <div className="duration-350 flex flex-shrink-0 cursor-pointer items-center justify-center border-b border-t border-gray-200 bg-white py-4 text-sm text-blue-400 transition ease-in-out hover:bg-gray-50 dark:border-dim-200 dark:bg-dim-900 dark:hover:bg-dim-300">
                    Show 9 Tweets
                </div>
            </div>
            {/* /New Tweets */}
            {/* Tweet */}
            <div className="duration-350 cursor-pointer border-b border-l border-r border-gray-200 pb-4 transition ease-in-out hover:bg-gray-100 dark:border-dim-200 dark:hover:bg-dim-300">
                <div className="flex flex-shrink-0 p-4 pb-0">
                    <a href="#" className="group block flex-shrink-0">
                        <div className="items-top flex">
                            <div>
                                <img
                                    className="inline-block h-9 w-9 rounded-full"
                                    src="https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="ml-3">
                                <p className="flex items-center text-base font-medium leading-6 text-gray-800 dark:text-white">
                                    Joe Biden
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-label="Verified account"
                                        fill="currentColor"
                                        className="ml-1 h-4 w-4 text-blue-500 dark:text-white"
                                    >
                                        <g>
                                            <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                                        </g>
                                    </svg>
                                    <span className="ml-1 text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300">
                                        @JoeBiden . Nov 7
                                    </span>
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="pl-16">
                    <p className="width-auto flex-shrink text-base font-medium text-gray-800 dark:text-white">
                        America, I’m honored that you have chosen me to lead our great
                        country.
                        <br />
                        <br />
                        The work ahead of us will be hard, but I promise you this: I will be
                        a
                        <a href="#" className="text-blue-400 hover:underline">
                            #President
                        </a>
                        for all Americans — whether you voted for me or not.
                        <br />
                        <br />I will keep the faith that you have placed in me.
                    </p>
                    <div className="my-3 mr-2 flex rounded-2xl border border-gray-600">
                        <img
                            className="rounded-2xl"
                            src="https://pbs.twimg.com/media/EnTkhz-XYAEH2kY?format=jpg&name=small"
                            alt=""
                        />
                    </div>
                    <div className="flex">
                        <div className="w-full">
                            <div className="flex items-center">
                                <div className="duration-350 flex flex-1 items-center text-xs text-gray-800 text-gray-400 transition ease-in-out hover:text-blue-400 dark:text-white dark:hover:text-blue-400">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-2 h-5 w-5"
                                    >
                                        <g>
                                            <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z" />
                                        </g>
                                    </svg>
                                    12.3 k
                                </div>
                                <div className="duration-350 flex flex-1 items-center text-xs text-gray-800 text-gray-400 transition ease-in-out hover:text-green-400 dark:text-white dark:hover:text-green-400">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-2 h-5 w-5"
                                    >
                                        <g>
                                            <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z" />
                                        </g>
                                    </svg>
                                    14 k
                                </div>
                                <div className="duration-350 flex flex-1 items-center text-xs text-gray-800 text-gray-400 transition ease-in-out hover:text-red-600 dark:text-white dark:hover:text-red-600">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-2 h-5 w-5"
                                    >
                                        <g>
                                            <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z" />
                                        </g>
                                    </svg>
                                    14 k
                                </div>
                                <div className="duration-350 flex flex-1 items-center text-xs text-gray-800 text-gray-400 transition ease-in-out hover:text-blue-400 dark:text-white dark:hover:text-blue-400">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-2 h-5 w-5"
                                    >
                                        <g>
                                            <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z" />
                                            <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Tweet */}
            {/* Timeline Notification */}
            <div className="border-b border-l border-r border-gray-200 bg-gray-50 py-2 dark:border-dim-200 dark:bg-dim-300">
                <div className="duration-350 flex cursor-pointer flex-col items-center justify-center border-b border-t border-gray-200 bg-white p-6 text-center text-sm text-blue-400 transition ease-in-out hover:bg-gray-50 dark:border-dim-200 dark:bg-dim-900 dark:hover:bg-dim-300">
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
            {/* /Timeline Notification */}
            {/* Tweet */}
            <div className="duration-350 cursor-pointer border-b border-l border-r border-gray-200 pb-4 transition ease-in-out hover:bg-gray-100 dark:border-dim-200 dark:hover:bg-dim-300">
                <div className="flex flex-shrink-0 pt-4 pb-0 text-gray-400">
                    <div className="flex w-16 justify-end pr-2 pb-1">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4">
                            <g>
                                <path d="M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z" />
                            </g>
                        </svg>
                    </div>
                    <div className="text-xs font-bold">Joe Biden Retweeted</div>
                </div>
                <div className="flex flex-shrink-0 px-4">
                    <a href="#" className="group block flex-shrink-0">
                        <div className="items-top flex">
                            <div>
                                <img
                                    className="inline-block h-9 w-9 rounded-full"
                                    src="https://pbs.twimg.com/profile_images/1325420616258887686/ghhYYwwT_normal.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="ml-3">
                                <p className="flex items-center text-base font-medium leading-6 text-gray-800 dark:text-white">
                                    Presidential Transition
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-label="Verified account"
                                        fill="currentColor"
                                        className="ml-1 h-4 w-4 text-blue-500 dark:text-white"
                                    >
                                        <g>
                                            <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                                        </g>
                                    </svg>
                                    <span className="ml-1 text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300">
                                        @Transition46 . 19h
                                    </span>
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="pl-16">
                    <p className="width-auto mb-6 flex-shrink text-base font-medium text-gray-800 dark:text-white">
                        Under the Biden-Harris administration, American national security
                        and foreign policy will be led by experienced professionals ready to
                        restore principled leadership on the world stage and dignified
                        leadership at home.
                    </p>
                    <div className="flex">
                        <div className="w-full">
                            <div className="flex items-center">
                                <div className="duration-350 flex flex-1 items-center text-xs text-gray-800 text-gray-400 transition ease-in-out hover:text-blue-400 dark:text-white dark:hover:text-blue-400">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-2 h-5 w-5"
                                    >
                                        <g>
                                            <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z" />
                                        </g>
                                    </svg>
                                    12.3 k
                                </div>
                                <div className="duration-350 flex flex-1 items-center text-xs text-gray-800 text-gray-400 transition ease-in-out hover:text-green-400 dark:text-white dark:hover:text-green-400">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-2 h-5 w-5"
                                    >
                                        <g>
                                            <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z" />
                                        </g>
                                    </svg>
                                    14 k
                                </div>
                                <div className="duration-350 flex flex-1 items-center text-xs text-gray-800 text-gray-400 transition ease-in-out hover:text-red-600 dark:text-white dark:hover:text-red-600">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-2 h-5 w-5"
                                    >
                                        <g>
                                            <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z" />
                                        </g>
                                    </svg>
                                    14 k
                                </div>
                                <div className="duration-350 flex flex-1 items-center text-xs text-gray-800 text-gray-400 transition ease-in-out hover:text-blue-400 dark:text-white dark:hover:text-blue-400">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-2 h-5 w-5"
                                    >
                                        <g>
                                            <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z" />
                                            <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Tweet */}
            {/* Tweet */}
            <div className="duration-350 cursor-pointer border-b border-l border-r border-gray-200 pb-4 transition ease-in-out hover:bg-gray-100 dark:border-dim-200 dark:hover:bg-dim-300">
                <div className="flex flex-shrink-0 p-4 pb-0">
                    <a href="#" className="group block flex-shrink-0">
                        <div className="items-top flex">
                            <div>
                                <img
                                    className="inline-block h-9 w-9 rounded-full"
                                    src="https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="ml-3">
                                <p className="flex items-center text-base font-medium leading-6 text-gray-800 dark:text-white">
                                    Joe Biden
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-label="Verified account"
                                        fill="currentColor"
                                        className="ml-1 h-4 w-4 text-blue-500 dark:text-white"
                                    >
                                        <g>
                                            <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                                        </g>
                                    </svg>
                                    <span className="ml-1 text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300">
                                        @JoeBiden . Nov 7
                                    </span>
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="pl-16">
                    <p className="width-auto flex-shrink text-base font-medium text-gray-800 dark:text-white">
                        America, I’m honored that you have chosen me to lead our great
                        country.
                        <br />
                        <br />
                        The work ahead of us will be hard, but I promise you this: I will be
                        a President for all Americans — whether you voted for me or not.
                        <br />
                        <br />I will keep the faith that you have placed in me.
                    </p>
                    <div className="my-3 mr-2 flex rounded-2xl border border-gray-600">
                        <img
                            className="rounded-2xl"
                            src="https://pbs.twimg.com/media/EnTkhz-XYAEH2kY?format=jpg&name=small"
                            alt=""
                        />
                    </div>
                    <div className="flex">
                        <div className="w-full">
                            <div className="flex items-center">
                                <div className="duration-350 flex flex-1 items-center text-xs text-gray-800 text-gray-400 transition ease-in-out hover:text-blue-400 dark:text-white dark:hover:text-blue-400">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-2 h-5 w-5"
                                    >
                                        <g>
                                            <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z" />
                                        </g>
                                    </svg>
                                    12.3 k
                                </div>
                                <div className="duration-350 flex flex-1 items-center text-xs text-gray-800 text-gray-400 transition ease-in-out hover:text-green-400 dark:text-white dark:hover:text-green-400">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-2 h-5 w-5"
                                    >
                                        <g>
                                            <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z" />
                                        </g>
                                    </svg>
                                    14 k
                                </div>
                                <div className="duration-350 flex flex-1 items-center text-xs text-gray-800 text-gray-400 transition ease-in-out hover:text-red-600 dark:text-white dark:hover:text-red-600">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-2 h-5 w-5"
                                    >
                                        <g>
                                            <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z" />
                                        </g>
                                    </svg>
                                    14 k
                                </div>
                                <div className="duration-350 flex flex-1 items-center text-xs text-gray-800 text-gray-400 transition ease-in-out hover:text-blue-400 dark:text-white dark:hover:text-blue-400">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-2 h-5 w-5"
                                    >
                                        <g>
                                            <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z" />
                                            <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Tweet */}
            {/* Spinner */}
            <div className="flex items-center justify-center border-b border-l border-r border-gray-200 p-4 dark:border-gray-700">
                <svg className="h-8 w-8 animate-spin-fast">
                    <circle
                        cx={16}
                        cy={16}
                        fill="none"
                        r={14}
                        strokeWidth={4}
                        style={{ stroke: "rgb(29, 161, 242)", opacity: "0.2" }}
                    />
                    <circle
                        cx={16}
                        cy={16}
                        fill="none"
                        r={14}
                        strokeWidth={4}
                        style={{
                            stroke: "rgb(29, 161, 242)",
                            strokeDasharray: 80,
                            strokeDashoffset: 60,
                        }}
                    />
                </svg>
            </div>
            {/* /Spinner */}
            {/* /Timeline */}
        </div>
    );
}
