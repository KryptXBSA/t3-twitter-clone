import { Dialog, Transition } from "@headlessui/react";
import { signIn } from "next-auth/react";
import { Fragment } from "react";
import DiscordIcon from "@icons/social/discord";
import GithubIcon from "@icons/social/github";
import GoogleIcon from "@icons/social/google";
import TwitterIcon from "@icons/social/twitter";

import { useForm, SubmitHandler } from "react-hook-form";
import { TweetInput } from "@components/inputs/TweetInput";

type Inputs = {
    username: string;
    password: string;
};
export default function TweetModal({
    isOpen,
    closeModal,
}: {
    isOpen: boolean;
    closeModal: any;
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
                                <Dialog.Panel className="flex w-[100%] max-w-xl  transform flex-col content-center items-center justify-center gap-9 overflow-hidden rounded-2xl bg-white p-2 text-left align-middle text-white shadow-xl transition-all dark:bg-black dark:text-white md:p-6">
                                    <TweetInput onPost={() => null} />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
let providers = [
    {
        provider: "github",
        providerText: "Github",
        icon: <GithubIcon className="w-7" />,
    },
    {
        provider: "google",
        providerText: "Google",
        icon: <GoogleIcon className="w-7" />,
    },
    {
        provider: "discord",
        providerText: "Discord",
        icon: <DiscordIcon className="w-7" />,
    },
];

function SigninBtn({
    icon,
    onClick,
    provider,
    providerText,
}: {
    onClick: any;
    provider: string;
    providerText: string;
    icon: React.ReactNode;
}) {
    return (
        <button
            type="button"
            className="text-md inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={() => onClick(provider)}
        >
            {icon} Sign in with {providerText}
        </button>
    );
}
