import React from "react";
import { UserData } from "@types";
import {
  ColorType,
  PickVerificationIcon,
} from "@components/PickVerificationIcon";

export function TweetMetadata({
  color,
  ...props
}: { user: UserData } & ColorType) {
  return (
    <>
      <div className="flex flex-col items-start">
        <div className="flex items-center">
          <h2 className="flex items-center text-base font-medium leading-6 text-gray-800 dark:text-white">
            {props.user.name || props.user.username}
          </h2>
          <PickVerificationIcon color={color} />
        </div>
        <span className="text-secondary text-sm font-medium leading-5 transition duration-150 ease-in-out group-hover:text-gray-300">
          @{props.user.username}
        </span>
      </div>
    </>
  );
}
