import ArrowIcon from "@icons/tweet/Arrow";
import { useRouter } from "next/router";
import React from "react";

export function PageHead({
  name,
  backBtn,
}: {
  name: string;
  backBtn?: boolean;
}) {
    let router=useRouter()
  return (
    <div className="bg-main main-border sticky top-0 mb-2 flex items-center justify-between border-b px-4  py-3">
      <div className=" font-sm flex items-center justify-center gap-4 text-xl font-medium tracking-wide text-gray-800 dark:text-gray-100">
        {backBtn && <div onClick={()=>router.back()} className="rounded-full p-2 hover-main"><ArrowIcon /></div>} {name}
      </div>
    </div>
  );
}
