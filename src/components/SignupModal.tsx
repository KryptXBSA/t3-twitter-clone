import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import DiscordIcon from "../icons/discord";
import GoogleIcon from "../icons/google";
import TwitterIcon from "../icons/twitter";

export default function SignupModal({
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
                <Dialog.Panel className="flex w-full max-w-xl transform flex-col content-center items-center justify-center gap-9 overflow-hidden rounded-2xl bg-gray-200 p-6 text-left align-middle text-white shadow-xl transition-all dark:bg-black dark:text-white">
                  <TwitterIcon className="w-10 fill-[#1d9bf0]" />
                  <Dialog.Title
                    as="h3"
                    className="text-3xl  font-semibold leading-6 "
                  >
                    Join Twitter today
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-1 rounded-full border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    <GoogleIcon className="w-6" /> Continue with google
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-1 rounded-full border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    <DiscordIcon className="w-6" /> Continue with google
                  </button>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-full border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
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
