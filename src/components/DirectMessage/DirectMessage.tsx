import Avatar from "@components/Avatar";
import { MessageHead } from "./Messagehead";
import { MessageInput } from "./MessageInput";

export default function DirectMessage() {
  return (
    <div className="main-border hidden h-screen w-[290px]  border-r lg:block lg:w-[550px]">
      <div className="fixed flex h-screen w-[290px] flex-col justify-between overflow-y-auto lg:w-[550px]">
        <div className="flex h-full flex-col justify-between  ">
          <MessageHead name="aaland" />
          <div className="flex-col space-y-2 px-4">
            <MessageBody />
            <MessageBody2 />
            <MessageBody />
          </div>
        </div>
        <MessageInput />
      </div>
    </div>
  );
}

let body = `
adssdsdsadjhasd dashasdgdash sdahdshagd asdhhg asdddddddddhj 
`;
function MessageBody() {
  return (
    <div className="ml-auto flex max-w-[80%] flex-col justify-center gap-1">
      <div
        className={`ml-auto w-fit  ${
          body.length > 50 ? " rounded-xl" : "rounded-full"
        } flex items-center justify-center bg-[#2B9BF0] p-2 px-3`}
      >
        <span>{body}</span>
      </div>
      <img
        className="max-h-[200px]  w-full rounded-2xl "
        src="http://localhost:7019/images/ab21f97c-022f-4b07-949d-116ad0d485cd.jpeg"
        alt=""
      />
    </div>
  );
}
function MessageBody2() {
  return (
    <div className="flex max-w-[80%] flex-col justify-center gap-1">
    <div
      className={`w-fit  ${
        body.length > 50 ? " rounded-xl" : "rounded-full"
      } flex items-center justify-center bg-[#2E3236] p-2 px-3`}
    >
      <span>{body}</span>
    </div>
      <img
        className="max-h-[200px]  w-full rounded-2xl "
        src="http://localhost:7019/images/ab21f97c-022f-4b07-949d-116ad0d485cd.jpeg"
        alt=""
      />
    </div>
  );
}
