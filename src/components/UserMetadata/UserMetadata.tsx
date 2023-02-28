import React from "react";
import NextLink from "@components/NextLink";
import Avatar from "@components/Avatar";
import { PickVerificationIcon } from "@components/PickVerificationIcon";

export function UserMetadata({
  user,
}: {
  user: {
    bio: string;
    username: string;
    name: string;
    profileImage: string;
    badge: any;
  };
}) {
  return (
    <div className="flex   space-x-2   ">
      <div className=" flex min-h-full flex-col items-center ">
        <Avatar avatarImage={user.profileImage} />
      </div>
      <div className="flex w-full flex-col">
        <NextLink href={`/${user.username}`}>
          <div className="flex flex-col items-start">
            <p className="flex items-center text-base font-medium leading-6 text-gray-800 dark:text-white">
              {user.name || user.username}
              <PickVerificationIcon color={user.badge} />
            </p>
            <span className="text-secondary text-sm font-medium leading-5 transition duration-150 ease-in-out group-hover:text-gray-300">
              @{user.username}
            </span>
          </div>
        </NextLink>
      </div>
    </div>
  );
}
