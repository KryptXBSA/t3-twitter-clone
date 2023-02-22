import { ReplyInput } from "@components/inputs/ReplyInput";
import { Dialog, Transition } from "@headlessui/react";
import { signIn } from "next-auth/react";
import { Fragment } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { TweetProps } from "@types";
import { TweetReply } from "@components/TweetReply";
import CloseIcon from "@icons/CloseIcon";
import MainButton from "@components/MainButton";
import CameraPlusIcon from "@icons/CameraPlusIcon";
import Avatar from "@components/Avatar";
import ReactTextareaAutosize from "react-textarea-autosize";

type Inputs = {
    bio: string;
    name: string;
    username: string;
    location: string;
};
export default function EditProfileModal({
    isOpen,
    closeModal,
    onSave,
}: {
    isOpen: boolean;
    closeModal: () => void;
    onSave: any;
}) {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log("data", data);
        onSave();
        reset();
        closeModal()
    };
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
                        <div className="z-[99] flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="z-50 flex w-full max-w-[600px] transform flex-col  justify-center gap-9 overflow-hidden rounded-2xl bg-white p-6 text-left align-middle text-white shadow-xl transition-all dark:bg-black dark:text-white">
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="flex flex-col gap-8"
                                    >
                                        <Buttons />
                                        <div className="flex items-center justify-center p-12">
                                            <div
                                                className="h-fit  w-fit cursor-pointer rounded-full bg-gray-900 
                                            p-2 transition-colors duration-150  dark:hover:bg-gray-800"
                                            >
                                                <CameraPlusIcon className="h-6 w-6 fill-gray-300" />
                                            </div>
                                        </div>
                                        <div className="flex ">
                                            <Avatar className="absolute" />
                                            <div
                                                className="z-50 mt-2 ml-2 h-fit w-fit  cursor-pointer rounded-full bg-gray-900 p-2 
                                            opacity-60 transition-colors duration-150  dark:hover:bg-gray-800"
                                            >
                                                <CameraPlusIcon className="h-6 w-6 fill-gray-300" />
                                            </div>
                                        </div>

                                        <input
                                            {...register("name", { required: true })}
                                            type="text"
                                            className="block w-full rounded border border-solid border-gray-300 bg-transparent p-3 text-lg font-normal text-black focus:border-blue-500   
                                    focus:outline-none dark:border-gray-700 dark:text-white dark:focus:border-blue-500"
                                            placeholder="Name"
                                        />
                                        <input
                                            {...register("username", { required: true })}
                                            type="text"
                                            className="block w-full rounded border border-solid border-gray-300 bg-transparent p-3 text-lg font-normal text-black focus:border-blue-500   
                                    focus:outline-none dark:border-gray-700 dark:text-white dark:focus:border-blue-500"
                                            placeholder="Username"
                                        />
                                        <ReactTextareaAutosize
                                            {...register("bio", { required: true })}
                                            maxRows={9}
                                            minRows={2}
                                            placeholder="Bio"
                                            className="block w-full resize-none rounded border border-solid border-gray-300 bg-transparent p-3 text-lg font-normal text-black focus:border-blue-500   
                                    focus:outline-none dark:border-gray-700 dark:text-white dark:focus:border-blue-500"
                                        />
                                        <input
                                            {...register("location", { required: true })}
                                            type="text"
                                            className="block w-full rounded border border-solid border-gray-300 bg-transparent p-3 text-lg font-normal text-black focus:border-blue-500   
                                    focus:outline-none dark:border-gray-700 dark:text-white dark:focus:border-blue-500"
                                            placeholder="Location"
                                        />
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

function Buttons() {
    return (
        <div className="flex w-full items-center">
            <CloseIcon />
            <p className="ml-8 text-lg font-semibold"> Edit profile</p>
            <MainButton
                type="submit"
                className="ml-auto w-20 bg-[#d7dbdc] hover:opacity-90 dark:text-black "
                text="Save"
            />
        </div>
    );
}
