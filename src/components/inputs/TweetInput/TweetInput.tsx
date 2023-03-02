import React, { useEffect, useRef, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { useForm, SubmitHandler } from "react-hook-form";
import Avatar from "@components/Avatar";
import { useSession } from "next-auth/react";
import { trpc } from "@utils/trpc";
import { OtherIcons } from "./OtherIcons";
import { FilePreview } from "./FilePreview";
import { compressFile } from "@utils/comporessImage";
import { getUserSession } from "@hooks/getUserSession";

type Inputs = {
  body: string;
};
export function TweetInput({ onPost }: { onPost?: any }) {
  const [isPosting, setIsPosting] = useState(false);
  let session = getUserSession();
  const [user, setUser] = useState(session);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  let { data } = useSession();
  let newTweet = trpc.tweet.newTweet.useMutation();

  const [selectedFile, setSelectedFile] = useState<string | null>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsPosting(true);
    newTweet.mutate({
      body: data.body,
      image: selectedFile || null,
    });
    // if (!newTweet.isError) onPost(newTweet.data?.tweet);
    reset();
    clearInputs();
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleImageUploadClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }
  async function handleFileSelection(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      //compress
      let compressedFile = await compressFile(selectedFile, 0.7);
      // Read the contents of the selected file
      console.log("imageee", compressedFile);
      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);

      // When the file contents are loaded, set the selected file state to the Data URI
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setSelectedFile(reader.result);
        }
      };
    }
  }
  function clearInputs() {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  useEffect(() => {
    if (
      isPosting &&
      !newTweet.isLoading &&
      !newTweet.isError &&
      newTweet.data?.tweet
    ) {
      onPost(newTweet.data.tweet);
      setIsPosting(false);
    }
  }, [isPosting, newTweet, onPost]);
  if (!user) return <></>;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-b main-border w-full "
    >
      <div className="flex  flex-shrink-0 p-4 pb-0">
        <div className="">
          <Avatar avatarImage={user.profileImage!} />
        </div>
        <div className="w-full p-2">
          <ReactTextareaAutosize
            {...register("body", { required: true })}
            maxRows={9}
            placeholder="What's happening?"
            className="h-10 w-full resize-none border-0 bg-transparent text-gray-900 placeholder-gray-400  focus:outline-none dark:text-white"
          />
          <FilePreview selectedFile={selectedFile!} clearInputs={clearInputs} />
        </div>
      </div>
      <div className="items-top flex w-full p-2 pl-14 text-white">
        <div
          onClick={handleImageUploadClick}
          className=" hover-main rounded-full p-2 text-blue-400"
        >
          <input
            id="image-upload"
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleFileSelection}
            style={{ display: "none" }}
          />
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <g>
              <path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z" />
              <circle cx="8.868" cy="8.309" r="1.542" />
            </g>
          </svg>
        </div>
        <OtherIcons />
        <button
          type="submit"
          className="ml-auto mr-1 rounded-full bg-blue-400 py-1 px-4 text-white hover:bg-blue-500"
        >
          <span className="text-sm font-bold">Tweet</span>
        </button>
      </div>
    </form>
  );
}
