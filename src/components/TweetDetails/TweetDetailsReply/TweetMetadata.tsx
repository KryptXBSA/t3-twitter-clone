import { useFormattedDate } from "@hooks/useFormattedDate";
import React from "react";
import { VerifiedIcon } from "@icons/tweet/VerifiedIcon";
import { TweetProps } from "@types";
import NextLink from "@components/NextLink";
import { ColorType, PickVerificationIcon } from "@components/PickVerificationIcon";

export function TweetMetadata({color,...props}: TweetProps&ColorType) {
  const formattedDate = useFormattedDate(props.createdAt);

  return (
    <>
      <div className="flex">
      <div className="flex flex-col">
        <p className="flex items-center text-base font-medium leading-6 text-gray-800 dark:text-white">
          {props.user.name || props.user.username}
                        <PickVerificationIcon color={color}/>
          <span className="ml-1 text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300">
            @{props.user.username} · {formattedDate}
          </span>
        </p>
          <span className="text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300">
            Replying to <NextLink href=""><span className="text-main-accent ">@{props.user.username} </span></NextLink>
          </span>
      </div>
      </div>
    </>
  );
}
