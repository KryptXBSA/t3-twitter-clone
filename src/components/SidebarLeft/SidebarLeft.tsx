import { getUserSession } from "@hooks/getUserSession";
import React, { useEffect, useState } from "react";
import Avatar from "@components/Avatar";
import { NavItem } from "./NavItem";
import { navItems } from "./navItems";
import { Logo } from "./Logo";
import TweetModal from "@components/modals/TweetModal";
import VerifiedModal from "@components/modals/VerifiedModal";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid";
import { signOut } from "next-auth/react";
import NextLink from "@components/NextLink";
import { BlueVerified } from "@icons/verified";
import { PickVerificationIcon } from "@components/PickVerificationIcon";
import { trpc } from "@utils/trpc";

export default function SidebarLeft({ active }: { active?: number }) {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const [isOpen2, setIsOpen2] = useState(false);
  function toggleModal2() {
    setIsOpen2(!isOpen2);
  }
    let session=getUserSession()
  return (
    <>
      <TweetModal isOpen={isOpen} closeModal={toggleModal} />
      <VerifiedModal isOpen={isOpen2} closeModal={toggleModal2} />
      <div className="h-screen xs:w-[88px] block xl:w-[275px]">
        <div className="fixed flex h-screen w-[68px] flex-col overflow-y-auto xs:w-[88px] xl:w-[275px]">
          <Logo />
          <nav className="mt-5 ">
            {navItems.map((item, index) => (
              <NavItem {...item} key={index} index={index} active={active} />
            ))}
              <NavItem icon={<ProfileIcon/>} href={"/"+session.username} text="Profile"  index={6} active={active} />
            <div
              onClick={toggleModal2}
              className="duration-350 sidebar-hover flex cursor-pointer items-center 
                            justify-center rounded-full p-4  transition ease-in-out xl:justify-start"
            >
              <BlueVerified className="h-6 w-6" />
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
  const [user, setUser] = useState(session);
  function logout() {
    signOut();
  }
  if (!user) return <></>;
  return (
    <div
      className="mx-auto mt-auto mb-5 flex w-14 cursor-pointer flex-row items-center 
            justify-between rounded-full p-3 transition duration-150 ease-in-out xl:w-full"
    >
      <NextLink href={"/" + user.username}>
        <div className="flex flex-row items-center">
          <Avatar avatarImage={user.profileImage!} />
          <div className="ml-2 hidden xl:block">
            <h1 className="flex text-sm font-bold text-gray-800 dark:text-white">
              <span className="truncate text-ellipsis ">
                {" "}
                {user.name||user.username}
              </span>
              <PickVerificationIcon color={user.badge!} />
            </h1>
            <p className="text-sm text-gray-400">@{user.username}</p>
          </div>
        </div>
      </NextLink>
      <div>
        <div
          onClick={logout}
          className="flex items-center rounded-full p-3 text-gray-800 duration-150 hover:bg-gray-700 dark:text-white"
        >
          <ArrowRightOnRectangleIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

function ProfileIcon() {
  return (
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"
                />
            </svg>
  )
}
