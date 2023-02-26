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
import { getUserSession } from "@hooks/getUserSession";

export function TweetActions(props: TweetProps) {
  let [isOpen, setIsOpen] = useState(false);
  let session = getUserSession();
  const [buttons, setButtons] = useState<ActionButtonProps[]>([
    {
      id: "reply",
      icon: <ReplyIcon />,
      count: props.replyCount,
      active: interactionState(props,session.id).replied,
      onClick: toggleModal,
    },
    {
      id: "retweet",
      icon: <RetweetIcon />,
      count: props.retweetCount,
      className: "dark:hover:text-green-400",
      active: false,
      activeClassName: "text-green-400",
      onClick: reTweet,
    },
    {
      id: "like",
      count: props.likeCount,
      active: interactionState(props,session.id).liked,
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
    let result = likeTweet.mutate({ id: props.id });
    let toInteract: ToInteract = "like";
    console.log("btnsss", buttons);
    let inc = buttons.find((b) => b.id === "like");
    console.log("incccc", inc?.active);
    interact(toInteract, !inc?.active);
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

  function interactionState(props: any, userId: string) {
    const liked = props.likes.some((like) => like.userId === userId);
    const retweeted = props.retweets.some(
      (retweet) => retweet.userId === userId
    );
    const replied = props.replies.some((reply) => reply.userId === userId);
    return { liked, retweeted, replied };
  }
  useEffect(() => {
    // Update interactionState
    let state = interactionState(props, session.id);
    setButtons((prevButtons) =>
      prevButtons.map((button) => {
        if (button.id === "like") {
          return {
            ...button,
            active: state.liked,
          };
        } else if (button.id === "retweet") {
          return {
            ...button,
            active: state.retweeted,
          };
        } else if (button.id === "reply") {
          return {
            ...button,
            active: state.replied,
          };
        } else {
          return button;
        }
      })
    );
  }, [props.likes, props.retweets, props.replies, session.id]);
  if (buttons[2].active === null) return <>wtf</>;
  return (
    <div onClick={(e) => e.preventDefault()}>
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
    </div>
  );
}
function ActionButton({
  icon,
  count,
  className,
  onClick,
  id,
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
      {id === "like" ? (
        active ? (
          <LikeIcon className={"fill-red-600"} />
        ) : (
          <LikeIcon />
        )
      ) : (
        icon
      )}

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
  icon?: ReactNode;
  className?: string;
};
