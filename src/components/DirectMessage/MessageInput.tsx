export function MessageInput() {
    return (
        <div className="my-4 flex items-center dark:bg-[#212326] mx-2 rounded-xl p-1">
            <div
                // onClick={handleImageUploadClick}
                className=" hover-main p-2 text-blue-400"
            >
                <input
                    id="image-upload"
                    type="file"
                    // ref={fileInputRef}
                    accept="image/*"
                    // onChange={handleFileSelection}
                    style={{ display: "none" }} />
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-blue-400">
                    <g>
                        <path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z" />
                        <circle cx="8.868" cy="8.309" r="1.542" />
                    </g>
                </svg>
            </div>
            <input
                type="text"
                className="block w-full rounded-lg p-2.5 text-sm text-gray-900  
                 dark:text-white dark:bg-[#212326] outline-none dark:placeholder-gray-400 "
                placeholder="Start a new message" />
            <div className="hover-main rounded-full p-2">
                <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5  fill-blue-400"
                >
                    <g>
                        <path d="M2.504 21.866l.526-2.108C3.04 19.719 4 15.823 4 12s-.96-7.719-.97-7.757l-.527-2.109L22.236 12 2.504 21.866zM5.981 13c-.072 1.962-.34 3.833-.583 5.183L17.764 12 5.398 5.818c.242 1.349.51 3.221.583 5.183H10v2H5.981z" />
                    </g>
                </svg>
            </div>
        </div>
    );
}

