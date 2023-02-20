import { getUserSession } from "@hooks/getUserSession";
import React, { useState } from "react";
import { Avatar } from "@components/Tweet/Avatar";
import { NavItem } from "./NavItem";
import { navItems } from "./navItems";

export default function SidebarLeft({ active  }: { active: number }) {
  let session = getUserSession();
  return (
    <div className="hidden h-screen xs:w-[88px] lg:block xl:w-[275px]">
      <div className="fixed flex h-screen w-[68px] flex-col overflow-y-auto xs:w-[88px] xl:w-[275px] xl:pr-3">
        <a className="my-2 flex justify-center xl:justify-start" href="#">
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8 text-blue-400 dark:text-white"
            fill="currentColor"
          >
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
            </g>
          </svg>
        </a>
        <nav className="mt-5">
          {navItems.map((item, index) => (
            <NavItem {...item} key={index} index={index} active={active} />
          ))}
          <a
            href="#"
            className="duration-350 mb-8 flex items-center justify-center text-gray-800 transition ease-in-out hover:text-blue-400 dark:text-white dark:hover:text-blue-400 xl:justify-start"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"
              />
            </svg>
            <span className="text-md ml-4 hidden font-bold xl:block">
              Messages
            </span>
          </a>
          <a
            href="#"
            className="duration-350 mb-8 flex items-center justify-center text-gray-800 transition ease-in-out hover:text-blue-400 dark:text-white dark:hover:text-blue-400 xl:justify-start"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"
              />
            </svg>
            <span className="text-md ml-4 hidden font-bold xl:block">
              Bookmarks
            </span>
          </a>
          <a
            href="#"
            className="duration-350 mb-8 flex items-center justify-center text-gray-800 transition ease-in-out hover:text-blue-400 dark:text-white dark:hover:text-blue-400 xl:justify-start"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <g>
                <path d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z" />
                <path d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z" />
              </g>
            </svg>
            <span className="text-md ml-4 hidden font-bold xl:block">
              Lists
            </span>
          </a>
          <a
            href="#"
            className="duration-350 mb-8 flex items-center justify-center text-gray-800 transition ease-in-out hover:text-blue-400 dark:text-white dark:hover:text-blue-400 xl:justify-start"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"
              />
            </svg>
            <span className="text-md ml-4 hidden font-bold xl:block">
              Profile
            </span>
          </a>
          <a
            href="#"
            className="duration-350 mb-8 flex items-center justify-center text-gray-800 transition ease-in-out hover:text-blue-400 dark:text-white dark:hover:text-blue-400 xl:justify-start"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <g>
                <path d="M16.5 10.25c-.965 0-1.75.787-1.75 1.75s.784 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.786-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.966 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75 1.75-.786 1.75-1.75-.784-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.965 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.787-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75z" />
                <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z" />
              </g>
            </svg>
            <span className="text-md ml-4 hidden font-bold xl:block">More</span>
          </a>
          <a
            href="#"
            className="font-sm duration-350 mx-auto mb-10 flex h-11 w-11 items-center justify-center rounded-full bg-blue-400 py-3 font-bold text-white transition ease-in-out hover:bg-blue-500 xl:w-auto"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="block h-6 w-6 xl:hidden"
            >
              <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z" />
            </svg>
            <span className="text-md hidden font-bold xl:block">Tweet</span>
          </a>
        </nav>
        <div className="duration-350 mx-auto mt-auto mb-5 flex w-14 cursor-pointer flex-row justify-between rounded-full p-2 transition ease-in-out hover:bg-blue-50 xl:w-full">
          <div className="flex flex-row">
            <Avatar avatarImage={session.imageUrl} />
            <div className="ml-2 hidden xl:block">
              <h1 className="text-sm font-bold text-gray-800 dark:text-white">
                {session.name}
              </h1>
              <p className="text-sm text-gray-400">@{session.username}</p>
            </div>
          </div>
          <div className="hidden xl:block">
            <div className="flex h-full items-center text-gray-800 dark:text-white">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 h-4 w-4"
              >
                <g>
                  <path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
