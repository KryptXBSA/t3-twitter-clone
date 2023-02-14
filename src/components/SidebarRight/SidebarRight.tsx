import React from 'react'

export default function SidebarRight() {
  return (
          <div className="hidden h-screen w-290 md:block lg:w-350">
            <div className="fixed flex h-screen w-290 flex-col overflow-y-auto lg:w-350">
              {/* Search */}
              <div className="relative m-2">
                <div className="absolute flex h-full cursor-pointer items-center pl-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mail"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                  </svg>
                </div>
                <input
                  className="flex h-9 w-full items-center rounded-full border border-gray-200 bg-gray-200 pl-12 text-sm font-normal text-gray-100 shadow focus:border focus:border-blue-200 focus:bg-gray-100 focus:outline-none dark:border-dim-400 dark:bg-dim-400 dark:focus:bg-dim-900"
                  placeholder="Search Twitter"
                />
              </div>
              {/* /Search */}
              {/* What’s happening */}
              <div className="m-2 rounded-2xl bg-gray-50 dark:bg-dim-700">
                <h1 className="text-md border-b border-gray-200 p-3 font-bold text-gray-900 dark:border-dim-200 dark:text-white">
                  What’s happening
                </h1>
                {/* Trending Topic */}
                <div className="duration-350 cursor-pointer border-b border-gray-200 p-3 text-sm font-normal text-blue-400 transition ease-in-out hover:bg-gray-100 dark:border-dim-200 dark:hover:bg-dim-300">
                  <h2 className="text-md font-bold text-gray-800 dark:text-white">
                    #FreePS5Monday
                  </h2>
                  <p className="text-xs text-gray-400">29.7K Tweets</p>
                </div>
                {/* /Trending Topic */}
                {/* Trending Topic */}
                <div className="duration-350 cursor-pointer border-b border-gray-200 p-3 text-sm font-normal text-blue-400 transition ease-in-out hover:bg-gray-100 dark:border-dim-200 dark:hover:bg-dim-300">
                  <h2 className="text-md font-bold text-gray-800 dark:text-white">
                    #BTSonGMA
                  </h2>
                  <p className="text-xs text-gray-400">351K Tweets</p>
                </div>
                {/* /Trending Topic */}
                {/* Trending Topic */}
                <div className="duration-350 cursor-pointer border-b border-gray-200 p-3 text-sm font-normal text-blue-400 transition ease-in-out hover:bg-gray-100 dark:border-dim-200 dark:hover:bg-dim-300">
                  <h2 className="text-md font-bold text-gray-800 dark:text-white">
                    #AstraZeneca
                  </h2>
                  <p className="text-xs text-gray-400">52.7K Tweets</p>
                </div>
                {/* /Trending Topic */}
                <div className="duration-350 cursor-pointer p-3 text-sm font-normal text-blue-400 transition ease-in-out hover:bg-gray-100 dark:hover:bg-dim-300">
                  Show more
                </div>
              </div>
              {/* /What’s happening */}
              {/* Who to follow */}
              <div className="m-2 rounded-2xl bg-gray-50 dark:bg-dim-700">
                <h1 className="text-md border-b border-gray-200 p-3 font-bold text-gray-900 dark:border-dim-200 dark:text-white">
                  Who to follow
                </h1>
                {/* Twitter Account */}
                <div className="duration-350 cursor-pointer border-b border-gray-200 p-3 text-sm font-normal text-blue-400 transition ease-in-out hover:bg-gray-100 dark:border-dim-200 dark:hover:bg-dim-300">
                  <div className="flex flex-row justify-between p-2">
                    <div className="flex flex-row">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg"
                        alt="Joe Biden"
                      />
                      <div className="ml-2 flex flex-col">
                        <h1 className="text-sm font-bold text-gray-900 dark:text-white">
                          Joe Biden
                        </h1>
                        <p className="text-sm text-gray-400">@JoeBiden</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex h-full items-center text-gray-800 dark:text-white">
                        <a
                          href="#"
                          className="rounded-full border-2 border-blue-400 px-4 py-1 text-xs font-bold text-blue-400"
                        >
                          Follow
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Twitter Account */}
                {/* Twitter Account */}
                <div className="duration-350 cursor-pointer border-b border-gray-200 p-3 text-sm font-normal text-blue-400 transition ease-in-out hover:bg-gray-100 dark:border-dim-200 dark:hover:bg-dim-300">
                  <div className="flex flex-row justify-between p-2">
                    <div className="flex flex-row">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg"
                        alt="Joe Biden"
                      />
                      <div className="ml-2 flex flex-col">
                        <h1 className="text-sm font-bold text-gray-900 dark:text-white">
                          Joe Biden
                        </h1>
                        <p className="text-sm text-gray-400">@JoeBiden</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex h-full items-center text-gray-800 dark:text-white">
                        <a
                          href="#"
                          className="rounded-full border-2 border-blue-400 px-4 py-1 text-xs font-bold text-blue-400"
                        >
                          Follow
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Twitter Account */}
                {/* Loader */}
                <div className="mx-auto w-full max-w-sm border-b border-gray-200 p-4 dark:border-dim-200">
                  <div className="flex animate-pulse space-x-4">
                    <div className="h-12 w-12 rounded-full bg-gray-400" />
                    <div className="flex-1 space-y-4 py-1">
                      <div className="h-4 w-3/4 rounded bg-gray-400" />
                      <div className="space-y-2">
                        <div className="h-4 rounded bg-gray-400" />
                        <div className="h-4 w-5/6 rounded bg-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Loader */}
                <div className="duration-350 cursor-pointer p-3 text-sm font-normal text-blue-400 transition ease-in-out hover:bg-gray-100 dark:hover:bg-dim-300">
                  Show more
                </div>
              </div>
              {/* /Who to follow */}
              <footer>
                <ul className="my-4 mx-2 text-xs text-gray-500">
                  <li className="mx-2 inline-block">
                    <a className="hover:underline" href="#">
                      Terms of Service
                    </a>
                  </li>
                  <li className="mx-2 inline-block">
                    <a className="hover:underline" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mx-2 inline-block">
                    <a className="hover:underline" href="#">
                      Cookie Policy
                    </a>
                  </li>
                  <li className="mx-2 inline-block">
                    <a className="hover:underline" href="#">
                      Ads info
                    </a>
                  </li>
                  <li className="mx-2 inline-block">
                    <a className="hover:underline" href="#">
                      More
                    </a>
                  </li>
                  <li className="mx-2 inline-block">© 2020 Twitter, Inc.</li>
                </ul>
              </footer>
            </div>
          </div>
  )
}
