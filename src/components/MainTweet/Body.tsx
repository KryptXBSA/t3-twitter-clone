import TweetBody from "@components/TweetBody";
import React from "react";
import { TweetProps } from "./MainTweet";

export function Body(props: TweetProps) {
  return (
    <>
      <p className="text-tweet whitespace-pre-line break-words">
        <TweetBody body={props.body} />
      </p>
      {props.images[0] && (
        <div className="my-3 mr-2 flex rounded-2xl ">
          <img
            className="max-h-[560px] rounded-2xl "
            src={props.images[0]}
            alt=""
          />
        </div>
      )}
    </>
  );
}
