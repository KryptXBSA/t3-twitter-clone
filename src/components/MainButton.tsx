import { ButtonHTMLAttributes } from "react";
import cn from "clsx";

export default function MainButton({
    text,
    textClassname,
    ...props
}: { text: string; textClassname?: string } & ButtonHTMLAttributes<any>) {
    return (
        <button
            tabIndex={-1}
            {...props}
            className={cn(
                "h-8 w-28 rounded-3xl bg-blue-500 text-white transition-opacity hover:opacity-75 ",
                props.className
            )}
        >
            <span className={cn("text-md font-semibold", textClassname)}>{text}</span>
        </button>
    );
}
