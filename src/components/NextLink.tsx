import Link from "next/link";
import React from "react";

export default function NextLink({
  href,
  disabled,
  children,
  ...props
}: {
  href: string;
  disabled?: boolean;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (disabled) return <>{children}</>;

  return (
    <Link {...props} href={href}>
      {children}
    </Link>
  );
}
