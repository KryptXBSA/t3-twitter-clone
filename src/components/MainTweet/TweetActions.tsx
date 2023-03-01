import React, { ReactNode, useEffect, useState } from "react";
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

export function TweetActions({
  allDisabled,
  ...props
}: TweetProps & { allDisabled?: boolean }) {
  let [isOpen, setIsOpen] = useState(false);
  let userId = getUserSession().id!;
  const [buttons, setButtons] = useState<ActionButtonProps[]>([
    {
      id: "reply",
      icon: <ReplyIcon />,
      count: allDisabled ? 0 : props.replyCount,
      active: allDisabled ? false : interactionState(props, userId).replied,
      onClick: toggleModal,
      disabled: allDisabled || false,
    },
    {
      id: "retweet",
      icon: <RetweetIcon />,
      count: allDisabled ? 0 : props.retweetCount,
      className: "dark:hover:text-green-400",
      active: allDisabled ? false : interactionState(props, userId).retweeted,
      activeClassName: "text-green-400",
      onClick: reTweet,
      disabled: allDisabled || false,
    },
    {
      id: "like",
      count: allDisabled ? 0 : props.likeCount,
      active: allDisabled ? false : interactionState(props, userId).liked,
      activeClassName: "text-red-600",
      className: "dark:hover:text-red-600",
      onClick: like,
      disabled: allDisabled || false,
    },
    { id: "share", icon: <ShareIcon />, disabled: true },
  ]);

  if (allDisabled)
    return (
      <div
        onClick={(e) => e.preventDefault()}
        className="my-1 flex  w-full justify-around"
      >
        {buttons.map((p) => (
          <ActionButton key={p.id} {...p} />
        ))}
      </div>
    );

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
    let inc = buttons.find((b) => b.id === "like");
    interact(toInteract, !inc?.active);
  }
  function reply(body: string) {
    let toInteract: ToInteract = "reply";
    interact(toInteract, true);
    toggleModal();
    replyTweet.mutate({ id: props.id, body });
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

  function interactionState(props: TweetProps, userId: string) {
    const liked = props.likes.some((like) => like.userId === userId);
    const retweeted = props.retweets.some(
      (retweet) => retweet.userId === userId
    );
    const replied = props.replies.some((reply) => reply.userId === userId);
    return { liked, retweeted, replied };
  }
  useEffect(() => {
    // Update interactionState
    let state = interactionState(props, userId);
    setButtons((prevButtons) =>
      prevButtons.map((button) => {
        if (button.id === "like") {
          return {
            ...button,
            count: props.likeCount,
            active: state.liked,
          };
        } else if (button.id === "retweet") {
          return {
            ...button,
            count: props.retweetCount,
            active: state.retweeted,
          };
        } else if (button.id === "reply") {
          return {
            ...button,
            count: props.replyCount,
            active: state.replied,
          };
        } else {
          return button;
        }
      })
    );
  }, [props.likes, props.retweets, props.replies, userId]);
  if (buttons[2].active === null) return <></>;
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
      onClick={disabled ? () => null : onClick}
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
