import Link from "next/link";
import React from "react";

export default function NextLink({
  href,
  disabled,
  children,
}: {
  href: string;
  disabled?: boolean;
  children: React.ReactNode;
}){
  if (disabled) return <>{children}</>;

  return <Link href={href}>{children}</Link>;
}
