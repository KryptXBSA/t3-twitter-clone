import React from "react";
import NextLink from "@components/NextLink";

export type NavItemProps = {
  href: string;
  text: string;
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
}: NavItemProps) {
  return (
    <NextLink
      href={href}
      className={`duration-350 p-4 sidebar-hover rounded-full   flex items-center justify-center ${
        active === index ? "text-blue-400 " : "text-gray-800 dark:text-white"
      } transition ease-in-out xl:justify-start`}
    >
      {icon}
      <span className="text-md ml-4 hidden font-bold xl:block">{text}</span>
    </NextLink>
  );
}
