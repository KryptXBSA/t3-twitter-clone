import { ButtonHTMLAttributes } from "react";
import cn from "clsx";

export default function MainButton({
  text,
  ...props
}: { text: string } & ButtonHTMLAttributes<any>) {
  return (
    <button
      {...props}
      className={cn(
        "h-8 w-28 rounded-3xl bg-blue-500 text-white hover:opacity-75 transition-opacity ",
        props.className
      )}
    >
      <span className="text-md font-semibold">{text}</span>
    </button>
  );
}
