import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import DiscordIcon from "../icons/discord";
import GithubIcon from "../icons/github";
import GoogleIcon from "../icons/google";
import TwitterIcon from "../icons/twitter";

export default function SigninModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: any;
}) {
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
                  <TwitterIcon className="w-10 fill-[#1d9bf0]" />
                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-semibold leading-6  text-black dark:text-white "
                  >
                    Sign in to Twitter
                  </Dialog.Title>
                  <div className="flex w-3/4  flex-col gap-4">
                    <div className="flex flex-col gap-4">
                      {providers.map((p) => (
                        <SigninBtn
                          key={p.provider}
                          onClick={closeModal}
                          {...p}
                        />
                      ))}
                    </div>

                    <fieldset className="w-full border-t border-gray-600">
                      <legend className="mx-auto grow px-2 text-lg text-black dark:text-white ">
                        or
                      </legend>
                    </fieldset>

                    <div className=" flex flex-col gap-2">
                      <input
                        type="text"
                        className="block w-full rounded border border-solid border-gray-300 bg-transparent p-3 text-lg font-normal text-black focus:border-blue-500   
                                    focus:outline-none dark:border-gray-700 dark:text-white dark:focus:border-blue-500"
                        placeholder="Username"
                      />

                      <input
                        type="text"
                        className="block w-full rounded border border-solid border-gray-300 bg-transparent p-3 text-lg font-normal text-black focus:border-blue-500   
                                    focus:outline-none dark:border-gray-700 dark:text-white dark:focus:border-blue-500"
                        placeholder="Password"
                      />

                      <button
                        type="button"
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
let providers = [
  { provider: "Github", icon: <GithubIcon className="w-7" /> },
  { provider: "Google", icon: <GoogleIcon className="w-7" /> },
  { provider: "Discord", icon: <DiscordIcon className="w-7" /> },
];

function SigninBtn({
  icon,
  onClick,
  provider,
}: {
  onClick: any;
  provider: string;
  icon: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className="text-md inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      onClick={onClick}
    >
      {icon} Sign in with {provider}
    </button>
  );
}
