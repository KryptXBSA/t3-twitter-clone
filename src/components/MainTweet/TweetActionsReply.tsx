import React, { useEffect, useState } from "react";
import { trpc } from "@utils/trpc";
import { useSession } from "next-auth/react";
import ReplyModal from "@components/modals/ReplyModal";
import { TweetProps } from "@types";
import ReplyIcon from "@icons/tweet/ReplyIcon";
import RetweetIcon from "@icons/tweet/RetweetIcon";
import LikeIcon from "@icons/tweet/LikeIcon";
import ShareIcon from "@icons/tweet/ShareIcon";

export function TweetActions(props: TweetProps) {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  let { data } = useSession();
  let likeTweet = trpc.tweet.likeTweet.useMutation();
  let replyTweet = trpc.tweet.replyTweet.useMutation();
  let reTweet0 = trpc.tweet.reTweet.useMutation();
  function like() {
    let result = likeTweet.mutate({ id: props.id });
  }
  function reply() {
    setIsOpen(!isOpen);
    // let result = replyTweet.mutate({ id: props.id, body: "test" });
  }
  function reTweet() {
    let result = reTweet0.mutate({ id: props.id });
  }
  const [interactionState, setInteractionState] = useState({
    liked: false,
    retweeted: false,
    replied: false,
  });

  useEffect(() => {
    const isLiked = props.likes.some((l) => l.userId === data?.userData.id);
    const isRetweeted = props.retweets.some(
      (r) => r.userId === data?.userData.id
    );
    const isReplied = props.replies.some((r) => r.userId === data?.userData.id);

    setInteractionState({
      liked: isLiked,
      retweeted: isRetweeted,
      replied: isReplied,
    });
  }, []);
  return (
    <>
      <ReplyModal tweet={props} isOpen={isOpen} closeModal={closeModal} />
      <div
        onClick={reply}
        className={`duration-350 flex flex-1 items-center text-xs ${
          interactionState.replied
            ? "text-blue-400 dark:text-blue-400"
            : "text-gray-800  dark:text-white "
        } 
transition ease-in-out hover:text-blue-400 dark:hover:text-blue-400`}
      >
        <ReplyIcon />
        {props.replyCount}
      </div>
      <div
        onClick={reTweet}
        className="duration-350 flex flex-1 items-center text-xs text-gray-800  transition ease-in-out hover:text-green-400 dark:text-white dark:hover:text-green-400"
      >
        <RetweetIcon />
        {props.retweetCount}
      </div>
      <div
        onClick={like}
        className="duration-350 flex flex-1 items-center text-xs text-gray-800 transition ease-in-out hover:text-red-600 dark:text-white dark:hover:text-red-600"
      >
        <LikeIcon />
        {props.likeCount}
      </div>
      <div className="duration-350 flex flex-1 items-center text-xs text-gray-800  transition ease-in-out hover:text-blue-400 dark:text-white dark:hover:text-blue-400">
        <ShareIcon />
      </div>
    </>
  );
}
