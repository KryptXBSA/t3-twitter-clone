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
  let getUser = trpc.user.getUser.useQuery({ id: session.id });
  const [user, setUser] = useState(getUser?.data?.user);
  function logout() {
    signOut();
  }
  useEffect(() => {
    setUser(getUser?.data?.user);
  }, [getUser.data]);
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
              <span className="truncate text-ellipsis "> {user.name }</span>
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
