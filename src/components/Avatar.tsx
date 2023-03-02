import React from "react";
import cn from"clsx"

export default function Avatar({
  size = 56,
  avatarImage,
    className
}: {
  size?: number;
  avatarImage?: string;
  className?: string;
}) {
  return (
    <div className={cn("",className)} style={{ width: size, height: size }}>
      <img
        className="h-full object-contain w-full rounded-full"
        src={
          avatarImage ||
          "/default.png"
        }
        alt="avatar"
      />
    </div>
  );
}
