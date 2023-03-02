import React from "react";
import * as Menubar from "@radix-ui/react-menubar";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";
import { TweetMetadata } from "@components/TweetDetails/TweetMetadata";
import { getUserSession } from "@hooks/getUserSession";
import Avatar from "@components/Avatar";
import MainButton from "@components/MainButton";
import { trpc } from "@utils/trpc";
import updateSession from "@utils/updateSession";

const COLORS: any[] = ["blue", "red", "gold", "gray"];

const VerifiedDropdown = ({ closeModal }: { closeModal: any }) => {
  let session = getUserSession();
  const [radioSelection, setRadioSelection] = React.useState<any>(
    session.badge
  );
  let updateBadge = trpc.user.updateBadge.useMutation();
  async function update() {
    updateBadge.mutateAsync({ badge: radioSelection });
    updateSession();
    closeModal();
  }

  return (
    <>
      <Menubar.Root className="MenubarRoot">
        <Menubar.Menu>
          <Menubar.Trigger className="outline-none">
            <div className="flex items-center gap-2">
              <Avatar avatarImage={session.profileImage!} />
              <TweetMetadata color={radioSelection!} user={{ ...session }} />
            </div>
          </Menubar.Trigger>
          <Menubar.Portal className="">
            <Menubar.Content
              className="z-50 w-52 rounded-md bg-gray-800 p-2"
              align="start"
              sideOffset={5}
              alignOffset={-14}
            >
              <Menubar.RadioGroup
                className="flex flex-col gap-1 "
                value={radioSelection}
                onValueChange={setRadioSelection}
              >
                {COLORS.map((item) => (
                  <Menubar.RadioItem
                    className="MenubarRadioItem inset"
                    key={item}
                    value={item}
                  >
                    <div className="flex cursor-pointer items-center gap-2 rounded-lg p-2 duration-200  hover:bg-gray-700">
                      <div className="">
                        <Avatar avatarImage={session.profileImage!} />
                      </div>
                      <TweetMetadata color={item} user={{ ...session }} />
                    </div>
                  </Menubar.RadioItem>
                ))}
              </Menubar.RadioGroup>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
      </Menubar.Root>
      <MainButton text="Save" onClick={update} />
    </>
  );
};

export default VerifiedDropdown;
