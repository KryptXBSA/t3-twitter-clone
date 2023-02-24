import React from "react";
import NextLink from "@components/NextLink";

export type NavItemProps = {
  href?: string;
  text: string;
  diabled?: boolean;
  icon?: React.ReactNode;
  active?: number;
  index?: number;
};

export function NavItem({
  href,
  text,
  icon,
  active,
  index,
  diabled,
}: NavItemProps) {
  if (diabled)
    return (
      <div
        className={`duration-350 sidebar-hover flex cursor-not-allowed items-center  justify-center rounded-full p-4 ${
          active === index ? "text-blue-400 " : "text-gray-800 dark:text-white"
        } transition ease-in-out xl:justify-start`}
      >
        {icon}
        <span className="text-md ml-4 hidden font-bold xl:block">{text}</span>
      </div>
    );

  return (
    <NextLink
      href={href}
      className={`duration-350 sidebar-hover flex items-center   justify-center rounded-full p-4 ${
        active === index ? "text-blue-400 " : "text-gray-800 dark:text-white"
      } transition ease-in-out xl:justify-start`}
    >
      {icon}
      <span className="text-md ml-4 hidden font-bold xl:block">{text}</span>
    </NextLink>
  );
}
