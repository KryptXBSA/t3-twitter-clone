import { getUserSession } from "@hooks/getUserSession";
import React, { useState } from "react";
import Avatar from "@components/Avatar";
import { NavItem } from "./NavItem";
import { navItems } from "./navItems";
import { Logo } from "./Logo";
import TweetModal from "@components/modals/TweetModal";

export default function SidebarLeft({ active }: { active?: number }) {
    const [isOpen, setIsOpen] = useState(false);
    function toggleModal() {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <TweetModal isOpen={isOpen} closeModal={toggleModal} />
            <div className="hidden h-screen xs:w-[88px] lg:block xl:w-[275px]">
                <div className="fixed flex h-screen w-[68px] flex-col overflow-y-auto xs:w-[88px] xl:w-[275px] xl:pr-3">
                    <Logo />
                    <nav className="mt-5 ">
                        {navItems.map((item, index) => (
                            <NavItem {...item} key={index} index={index} active={active} />
                        ))}
                        <a onClick={toggleModal} className="font-sm cursor-pointer duration-150 mx-auto mt-2 mb-10 flex h-11 w-11 items-center justify-center rounded-full bg-blue-500 py-3 font-bold text-white transition-colors dark:hover:bg-blue-400 xl:w-auto">
                            <span className="text-md hidden font-bold xl:block">Tweet</span>
                        </a>
                    </nav>
                    <User />
                </div>
            </div>
        </>
    );
}

function User() {
    let session = getUserSession();
    return (
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
                    <svg viewBox="0 0 24 24" fill="currentColor" className="mr-2 h-4 w-4">
                        <g>
                            <path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}
