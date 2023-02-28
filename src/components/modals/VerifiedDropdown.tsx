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

const COLORS: any[] = ["blue", "red", "gold", "gray"];

const VerifiedDropdown = ({ closeModal }: { closeModal: any }) => {
  const [radioSelection, setRadioSelection] = React.useState<any>("");
  let session = getUserSession();
  let updateBadge = trpc.user.updateBadge.useMutation();
  async function update() {
    updateBadge.mutateAsync({ badge: radioSelection });
    closeModal();
  }

  return (
    <>
      <Menubar.Root className="MenubarRoot">
        <Menubar.Menu>
          <Menubar.Trigger className="outline-none">
            <div className="flex items-center gap-2">
              <Avatar />
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
                        <Avatar />
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
      <MainButton text="Save"  onClick={update}/>
    </>
  );
};

export default VerifiedDropdown;
