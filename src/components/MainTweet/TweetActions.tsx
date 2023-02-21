import React, { ReactNode, useEffect, useState } from "react";
import CountUp from "react-countup";
import cn from "clsx";
import { trpc } from "@utils/trpc";
import { useSession } from "next-auth/react";
import ReplyModal from "@components/modals/ReplyModal";
import { TweetProps } from "@types";
import ReplyIcon from "@icons/tweet/ReplyIcon";
import RetweetIcon from "@icons/tweet/RetweetIcon";
import LikeIcon from "@icons/tweet/LikeIcon";
import ShareIcon from "@icons/tweet/ShareIcon";
import NextLink from "@components/NextLink";
import { Counter } from "./Counter";

export function TweetActions(props: TweetProps) {
  let [isOpen, setIsOpen] = useState(false);
  const [interactionState, setInteractionState] = useState({
    like: false,
    retweet: false,
    reply: false,
  });
  const [buttons, setButtons] = useState<ActionButtonProps[]>([
    {
      id: "reply",
      icon: <ReplyIcon />,
      count: props.replyCount,
      active: interactionState.reply,
      onClick: toggleModal,
    },
    {
      id: "retweet",
      icon: <RetweetIcon />,
      count: props.retweetCount,
      className: "dark:hover:text-green-400",
      active: interactionState.retweet,
      activeClassName: "text-green-400",
      onClick: reTweet,
    },
    {
      id: "like",
      icon: <LikeIcon />,
      count: props.likeCount,
      active: interactionState.like,
      activeClassName: "text-red-600",
      className: "dark:hover:text-red-600",
      onClick: like,
    },
    { id: "share", icon: <ShareIcon />, disabled: true },
  ]);
  function closeModal() {
    setIsOpen(false);
  }

  let { data } = useSession();
  let likeTweet = trpc.tweet.likeTweet.useMutation();
  let replyTweet = trpc.tweet.replyTweet.useMutation();
  let reTweet0 = trpc.tweet.reTweet.useMutation();
  function interact(id: ToInteract, inc: boolean) {
    let newBtns = buttons;
    newBtns.forEach((b) => {
      if (b.id === id) {
        (b.count || b.count === 0) && inc ? b.count++ : b.count!--;
        b.active = inc;
      }
    });
    setButtons(newBtns);
  }
  function like() {
    // let result = likeTweet.mutate({ id: props.id });
    let toInteract: ToInteract = "like";
    let inc = buttons.find((b) => b.id === toInteract)?.active!;
    interact(toInteract, !inc);
    // console.log("like", result);
  }
  function reply() {
    console.log("replly");
    let toInteract: ToInteract = "reply";
    interact(toInteract, true);
    toggleModal();
    // let result = replyTweet.mutate({ id: props.id, body: "test" });
  }
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  function reTweet() {
    let result = reTweet0.mutate({ id: props.id });

    let toInteract: ToInteract = "retweet";
    let inc = buttons.find((b) => b.id === toInteract)?.active!;
    interact(toInteract, !inc);
  }

  useEffect(() => {
    const isLiked = props.likes.some((l) => l.userId === data?.userData.id);
    const isRetweeted = props.retweets.some(
      (r) => r.userId === data?.userData.id
    );
    const isReplied = props.replies.some((r) => r.userId === data?.userData.id);
    let newState = {
      like: isLiked,
      retweet: isRetweeted,
      reply: isReplied,
    };
    console.log("new", newState);
    setInteractionState(newState);
  }, []);
  return (
    <>
      <NextLink href="">
        <ReplyModal
          onReply={reply}
          tweet={props}
          isOpen={isOpen}
          closeModal={closeModal}
        />
        <div className="my-1 flex  w-full justify-around">
          {buttons.map((p) => (
            <ActionButton key={p.id} {...p} />
          ))}
        </div>
      </NextLink>
    </>
  );
}
function ActionButton({
  icon,
  count,
  className,
  onClick,
  disabled,
  active,
  activeClassName,
}: ActionButtonProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "duration-350 flex grow items-center justify-center p-2 text-xs transition ease-in-out   ",
        disabled
          ? "cursor-not-allowed"
          : "hover:text-blue-400 dark:hover:text-blue-400",
        className,
        active && activeClassName
      )}
    >
      {icon}

      <Counter num={count!} />
    </div>
  );
}
type ToInteract = "like" | "retweet" | "reply" | "share";
type ActionButtonProps = {
  onClick?: () => any;
  id?: ToInteract;
  activeClassName?: string;
  count?: number;
  disabled?: boolean;
  active?: boolean;
  icon: ReactNode;
  className?: string;
};
