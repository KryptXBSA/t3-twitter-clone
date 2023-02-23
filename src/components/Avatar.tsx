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
        className="h-full w-full rounded-full"
        src={
          avatarImage ||
          "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
        }
        alt="avatar"
      />
    </div>
  );
}
