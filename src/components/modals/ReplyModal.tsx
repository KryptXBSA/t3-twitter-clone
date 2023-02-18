import { ReplyInput } from "@components/inputs/ReplyInput";
import { TweetInput } from "@components/inputs/TweetInput";
import { Avatar } from "@components/Tweet/Avatar";
import { Tweet, TweetProps } from "@components/Tweet/Tweet";
import { TweetMetadata } from "@components/Tweet/TweetMetadata";
import { Dialog, Transition } from "@headlessui/react";
import { signIn } from "next-auth/react";
import { Fragment } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    username: string;
    password: string;
};
export default function ReplyModal({
    isOpen,
    closeModal,
    tweet,
}: {
    isOpen: boolean;
    closeModal: any;
    tweet: TweetProps;
}) {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log("cred data", data);
        signIn("credentials", { ...data });
        reset();
    };
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed  inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-start justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="flex  max-w-xl transform flex-col  content-center items-center justify-center gap-9 overflow-hidden rounded-2xl bg-white p-6 text-left align-middle text-white shadow-xl transition-all dark:bg-black dark:text-white">
                                    <div className="flex flex-col">
                                        <Tweet reply={true} tweet={tweet} />
                                        <div className="flex  ">
                                            <div className="grow pt-2">
                                            <ReplyInput  onPost={() => console.log("reply")} />
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
