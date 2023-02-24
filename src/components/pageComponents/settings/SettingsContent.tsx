import React, { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TweetInput } from "@components/inputs/TweetInput";
import { trpc } from "@utils/trpc";
import { Spinner } from "@components/Spinner";
import { NewTweets } from "@components/NewTweets";
import { PageHead } from "@components/PageHead";
import MainTweet from "@components/MainTweet";
import Avatar from "@components/Avatar";
import { PickVerificationIcon } from "@components/PickVerificationIcon";
import NextLink from "@components/NextLink";
import MainButton from "@components/MainButton";

export default function SettingsContent() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<any>();
  let allTweets = trpc.tweet.getAllTweets.useQuery({ id: "anysddssdss" });
  const [tweets, setTweets] = useState(allTweets.data?.tweets);
  console.log("tweetssss", tweets, allTweets.data);
  useEffect(() => {
    setTweets(allTweets.data?.tweets);
  }, [allTweets.data]);

  return (
    <div className="main-content ">
      <div className="main-border h-screen border-b border-l border-r sm:w-[350px] ">
        <PageHead name="Settings" />
        <div className="flex flex-col gap-4 p-4">
          <input
            {...register("username", { required: true })}
            type="text"
            className="block w-full rounded border border-solid border-gray-300 bg-transparent p-3 text-lg font-normal text-black focus:border-blue-500   
                                    focus:outline-none dark:border-gray-700 dark:text-white dark:focus:border-blue-500"
            placeholder="New passowrd"
          />
          <MainButton className="h-12" text="Save" />
        </div>
        <Spinner />
      </div>
    </div>
  );
}
