import React from "react";

export function Avatar({size=56,avatarImage}:{size?:number,avatarImage:string}) {
    return (
        <div  style={{width:size,height:size}}>
            <img
                className="w-full h-full rounded-full"
                src={avatarImage||"/default.png"}
                alt="avatar" />
        </div>
    );
}

