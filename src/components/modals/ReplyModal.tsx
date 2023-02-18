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
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="flex  max-w-xl transform flex-col content-center items-center justify-center gap-9 overflow-hidden rounded-2xl bg-white p-6 text-left align-middle text-white shadow-xl transition-all dark:bg-black dark:text-white">
                                    <Tweet reply={true} tweet={tweet} />
                                    <div className="flex w-3/4  flex-col gap-4">
                                        <div className="flex flex-col gap-4"></div>

                                        <fieldset className="w-full border-t border-gray-600">
                                            <legend className="mx-auto grow px-2 text-lg text-black dark:text-white ">
                                                or
                                            </legend>
                                        </fieldset>

                                        <form
                                            onSubmit={handleSubmit(onSubmit)}
                                            className=" flex flex-col gap-2"
                                        >
                                            <input
                                                {...register("username", { required: true })}
                                                type="text"
                                                className="block w-full rounded border border-solid border-gray-300 bg-transparent p-3 text-lg font-normal text-black focus:border-blue-500   
                                    focus:outline-none dark:border-gray-700 dark:text-white dark:focus:border-blue-500"
                                                placeholder="Username"
                                            />

                                            <input
                                                type="password"
                                                {...register("password", { required: true })}
                                                className="block w-full rounded border border-solid border-gray-300 bg-transparent p-3 text-lg font-normal text-black focus:border-blue-500   
                                    focus:outline-none dark:border-gray-700 dark:text-white dark:focus:border-blue-500"
                                                placeholder="Password"
                                            />

                                            <button
                                                type="submit"
                                                className="text-md inline-flex w-full justify-center rounded-full border border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Sign in
                                            </button>

                                            <div className="mt-1">
                                                <p className="text-sm text-gray-500">
                                                    Don't worry if you don't have an account. We'll create
                                                    one for you.
                                                </p>
                                            </div>
                                        </form>
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
