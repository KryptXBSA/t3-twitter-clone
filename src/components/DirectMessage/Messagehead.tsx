import Avatar from "@components/Avatar";
import ArrowIcon from "@icons/tweet/Arrow";
import { useRouter } from "next/router";
import React from "react";

export function MessageHead({
  name,
  username,
}: {
  name?: string;
  username?: string;
}) {
  return (
    <div className="bg-main main-border sticky top-0 z-40 mb-2 flex items-center justify-between border-r px-4  py-3">
      <div className=" font-sm flex items-center justify-center gap-4 ">
                <Avatar size={32}/>
        <div className="flex flex-col -space-y-1">
          <p className="text-primary text-xl font-medium tracking-wide">
            {name || username}
          </p>
        </div>
      </div>
    </div>
  );
}
