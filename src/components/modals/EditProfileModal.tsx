import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import CloseIcon from "@icons/CloseIcon";
import MainButton from "@components/MainButton";
import CameraPlusIcon from "@icons/CameraPlusIcon";
import Avatar from "@components/Avatar";
import ReactTextareaAutosize from "react-textarea-autosize";
import { trpc } from "@utils/trpc";
import { getUserSession } from "@hooks/getUserSession";
import { User } from "@prisma/client";
import { compressFile } from "@utils/comporessImage";
import updateSession from "@utils/updateSession";

type Inputs = {
  bio: string;
  name: string;
  username: string;
  website: string;
};
export default function EditProfileModal({
  isOpen,
  closeModal,
  onSave,
  user,
}: {
  isOpen: boolean;
  closeModal: () => void;
  onSave: any;
  user: User;
}) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  let session = getUserSession();
  const [profileImg, setProfileImg] = useState<string | null>();
  const [bgImg, setBgImg] = useState<string | null>();

  const bgRef = useRef<HTMLInputElement>(null);
  const profileRef = useRef<HTMLInputElement>(null);

  function handleBgClick() {
    if (bgRef.current) {
      bgRef.current.click();
    }
  }
  function handleProfileClick() {
    if (profileRef.current) {
      profileRef.current.click();
    }
  }
  async function handleBgSelection(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      //compress
      let compressedFile = await compressFile(selectedFile, 0.7);
      // Read the contents of the selected file
      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);

      // When the file contents are loaded, set the selected file state to the Data URI
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setBgImg(reader.result);
        }
      };
    }
  }
  async function handleProfileSelection(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      //compress
      let compressedFile = await compressFile(selectedFile, 0.7);
      // Read the contents of the selected file
      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);

      // When the file contents are loaded, set the selected file state to the Data URI
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setProfileImg(reader.result);
        }
      };
    }
  }

  let updateProfile = trpc.user.updateUser.useMutation();
  let updateProfileImg = trpc.user.updateImg.useMutation();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    let res = await updateProfile.mutateAsync({ ...data });
    let resImg = await updateProfileImg.mutateAsync({ bgImg, profileImg });
    onSave(res.user);
    await updateSession();
    closeModal();
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
                    <Buttons close={closeModal} />
                    <div
                      onClick={handleBgClick}
                      className="flex items-center justify-center p-20"
                    >
                      <img
                        className="absolute  z-10 h-1/3 w-[90%] border-none object-cover  outline-none"
                        style={{ display: (!bgImg && "none") || "block" }}
                        src={bgImg!}
                      />
                      <input
                        type="file"
                        ref={bgRef}
                        accept="image/*"
                        onChange={handleBgSelection}
                        style={{ display: "none" }}
                      />
                      <div
                        className="z-50 h-fit  w-fit cursor-pointer rounded-full bg-gray-900 
                                            p-2 transition-colors duration-150  dark:hover:bg-gray-800"
                      >
                        <CameraPlusIcon className="z-50 h-6 w-6 fill-gray-300" />
                      </div>
                    </div>
                    <div onClick={handleProfileClick} className="flex ">
                      <img
                        style={{ width: 56, height: 56 }}
                        className="absolute z-10 rounded-full border-none object-cover outline-none  "
                        src={profileImg!}
                      />
                      <Avatar
                        avatarImage={user.profileImage!}
                        className="absolute"
                      />
                      <div
                        className="z-50 mt-2 ml-2 h-fit w-fit  cursor-pointer rounded-full bg-gray-900 p-2 
                                            opacity-60 transition-colors duration-150  dark:hover:bg-gray-800"
                      >
                        <CameraPlusIcon className="h-6 w-6 fill-gray-300" />
                        <input
                          type="file"
                          ref={profileRef}
                          accept="image/*"
                          onChange={handleProfileSelection}
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>

                    <input
                      {...register("name", {
                        required: false,
                        value: user.name!,
                      })}
                      type="text"
                      className="block w-full rounded border border-solid border-gray-300 bg-transparent p-3 text-lg font-normal text-black focus:border-blue-500   
                                    focus:outline-none dark:border-gray-700 dark:text-white dark:focus:border-blue-500"
                      placeholder="Name"
                    />
                    {/* <input
                      {...register("username", {
                        required: true,
                        value: user.username!,
                      })}
                      type="text"
                      className="block w-full rounded border border-solid border-gray-300 bg-transparent p-3 text-lg font-normal text-black focus:border-blue-500   
                                    focus:outline-none dark:border-gray-700 dark:text-white dark:focus:border-blue-500"
                      placeholder="Username"
                    />*/}
                    <ReactTextareaAutosize
                      {...register("bio", { required: false, value: user.bio! })}
                      maxRows={9}
                      minRows={2}
                      placeholder="Bio"
                      className="block w-full resize-none rounded border border-solid border-gray-300 bg-transparent p-3 text-lg font-normal text-black focus:border-blue-500   
                                    focus:outline-none dark:border-gray-700 dark:text-white dark:focus:border-blue-500"
                    />
                    <input
                      {...register("website", {
                        required: false,
                        value: user.website!,
                      })}
                      type="text"
                      className="block w-full rounded border border-solid border-gray-300 bg-transparent p-3 text-lg font-normal text-black focus:border-blue-500   
                                    focus:outline-none dark:border-gray-700 dark:text-white dark:focus:border-blue-500"
                      placeholder="Website"
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

function Buttons({ close }: { close: () => void }) {
  return (
    <div className="flex w-full items-center">
      <div className="cursor-pointer" onClick={close}>
        <CloseIcon />
      </div>
      <p className="ml-8 text-lg font-semibold"> Edit profile</p>
      <MainButton
        type="submit"
        className="ml-auto w-20 bg-[#d7dbdc] hover:opacity-90 dark:text-white "
        text="Save"
      />
    </div>
  );
}
