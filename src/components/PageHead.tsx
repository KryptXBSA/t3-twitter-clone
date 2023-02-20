import ArrowIcon from "@icons/tweet/Arrow";
import { useRouter } from "next/router";
import React from "react";

export function PageHead({
  name,
  username,
  backBtn,
  profile,
}: {
  name: string;
  username?: string;
  backBtn?: boolean;
  profile?: boolean;
}) {
  let router = useRouter();
  return (
    <div className="bg-main z-40 main-border sticky top-0 mb-2 flex items-center justify-between border-b px-4  py-3">
      <div className=" font-sm flex items-center justify-center gap-4 ">
        {backBtn && (
          <div
            onClick={() => router.back()}
            className="hover-main rounded-full p-2"
          >
            <ArrowIcon />
          </div>
        )}
        <div className="flex flex-col -space-y-1">
          <p className="text-primary text-xl font-medium tracking-wide">
            {name}
          </p>
          {profile && (
            <p className="text-secondary ml-0.5 text-sm font-medium tracking-wide">
              @{username}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
