import { getUserSession } from "@hooks/getUserSession";
import React, { useState } from "react";
import Avatar from "@components/Avatar";
import { NavItem } from "./NavItem";
import { navItems } from "./navItems";
import { Logo } from "./Logo";
import TweetModal from "@components/modals/TweetModal";
import VerifiedModal from "@components/modals/VerifiedModal";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid";
import { signOut } from "next-auth/react";
import NextLink from "@components/NextLink";

export default function SidebarLeft({ active }: { active?: number }) {
    const [isOpen, setIsOpen] = useState(false);
    function toggleModal() {
        setIsOpen(!isOpen);
    }

    const [isOpen2, setIsOpen2] = useState(false);
    function toggleModal2() {
        setIsOpen2(!isOpen2);
    }
    return (
        <>
            <TweetModal isOpen={isOpen} closeModal={toggleModal} />
            <VerifiedModal isOpen={isOpen2} closeModal={toggleModal2} />
            <div className="hidden h-screen xs:w-[88px] lg:block xl:w-[275px]">
                <div className="fixed flex h-screen w-[68px] flex-col overflow-y-auto xs:w-[88px] xl:w-[275px] xl:pr-3">
                    <Logo />
                    <nav className="mt-5 ">
                        {navItems.map((item, index) => (
                            <NavItem {...item} key={index} index={index} active={active} />
                        ))}

                        <div
                            onClick={toggleModal2}
                            className="duration-350 sidebar-hover flex items-center 
                            justify-center rounded-full p-4  transition ease-in-out xl:justify-start"
                        >
                            <VerifiedIcon />
                            <span className="text-md ml-4 hidden font-bold xl:block">
                                Get Verified
                            </span>
                        </div>
                        <a
                            onClick={toggleModal}
                            className="font-sm mx-auto mt-2 mb-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-blue-500 py-3 font-bold text-white transition-colors duration-150 dark:hover:bg-blue-400 xl:w-auto"
                        >
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
    function logout() {
        signOut()
        
    }
    return (
        <div className="duration-150 mx-auto mt-auto mb-5 flex w-14 cursor-pointer flex-row 
            justify-between items-center rounded-full p-3 px-4 transition ease-in-out xl:w-full">
            <NextLink href={"/"+session.username}>
            <div className="flex flex-row items-center">
                <Avatar avatarImage={session.imageUrl} />
                <div className="ml-2 hidden xl:block">
                    <h1 className="text-sm font-bold text-gray-800 dark:text-white">
                        {session.name}
                    </h1>
                    <p className="text-sm text-gray-400">@{session.username}</p>
                </div>
            </div>
            </NextLink>
            <div className="xl:block">
                <div onClick={logout} className="flex items-center p-3 rounded-full hover:bg-gray-700 duration-150 text-gray-800 dark:text-white">
                    <ArrowRightOnRectangleIcon className="w-6 h-6"/>
                </div>
            </div>
        </div>
    );
}

function VerifiedIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-label="Verified account"
            className="h-6 w-6 fill-[#209DEB]"
            data-testid="icon-verified"
        >
            <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
        </svg>
    );
}
