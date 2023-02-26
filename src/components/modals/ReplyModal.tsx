import { ReplyInput } from "@components/inputs/ReplyInput";
import { TweetInput } from "@components/inputs/TweetInput";
import  Avatar  from "@components/Avatar";
import { Dialog, Transition } from "@headlessui/react";
import { signIn } from "next-auth/react";
import { Fragment } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { TweetProps } from "@types";
import MainTweet from "@components/MainTweet";
import { TweetReply } from "@components/TweetReply";

type Inputs = {
    username: string;
    password: string;
};
export default function ReplyModal({
    isOpen,
    closeModal,
    onReply,
    tweet,
}: {
    isOpen: boolean;
    closeModal: any;
    onReply: any;
    tweet: TweetProps;
}) {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed  inset-0 bg-gray-500 bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-[99] overflow-y-auto">
                        <div className="flex min-h-full z-[99] items-start justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="flex z-50 w-full max-w-[600px] transform flex-col  justify-center gap-9 overflow-hidden rounded-2xl bg-white p-6 text-left align-middle text-white shadow-xl transition-all dark:bg-black dark:text-white">
                                    <div className="flex flex-col">
                                        <TweetReply reply={true} tweet={tweet} />
                                        <div className="flex  ">
                                            <div className="grow pt-2">
                                            <ReplyInput  onReply={onReply} />
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
