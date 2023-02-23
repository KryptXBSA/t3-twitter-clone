import TweetBody from "@components/TweetBody";
import { TweetProps } from "@types";
import React from "react";

export function Body(props: TweetProps) {
  return (
    <>
      <p className="text-tweet whitespace-pre-line mb-2 break-words">
        <TweetBody body={props.body} />
      </p>
      {props.images[0] && (
        <div className="my-3 mr-2 flex rounded-2xl ">
          <img
            className="max-h-[560px] rounded-2xl w-full "
            src={props.images[0]}
            alt=""
          />
        </div>
      )}
    </>
  );
}
