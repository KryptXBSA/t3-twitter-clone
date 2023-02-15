/** @format */
import { useSession, signIn, signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import Head from "next/head";
import { ReactNode, useEffect, useRef, useState } from "react";
import SigninModal from "../components/SigninModal";
import TwitterIcon from "../icons/twitter";
import { trpc } from "../utils/trpc";

const Auth = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();
  const { theme, setTheme } = useTheme();

  if (status === "loading") {
    return (
      <>
        <Head>
          <title>Loading</title>
          <meta name="description" content="Twitter Clone" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </>
    );
  }

  if (status === "authenticated") {
    return (
      <>
        <Head>
          <title>Login</title>
          <meta name="description" content="Twitter Clone" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div
          className="flex h-[100vh] justify-between sm:flex-col sm:gap-9"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <div className="flex h-full w-[50%] items-center justify-center bg-[#15406A] sm:w-full">
            <TwitterIcon className=" h-full   w-[90%]  fill-[#1d9bf0] p-2 sm:p-8" />
          </div>
          <div className="flex grow items-center justify-center space-x-2 p-5 sm:p-12">
            <SignIn />
          </div>
        </div>
      </>
    );
  }

  return <>{children}</>;
};

export default Auth;

function SignIn() {
  let user = trpc.user.getUser.useQuery("hi");
  console.log("datauser", user.data);
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  async function signup(e: any) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }
  return (
    <>
      <SigninModal isOpen={isOpen} closeModal={closeModal} />
      <form
        onSubmit={signup}
        className="flex w-full items-center justify-center"
      >
        <div className="flex flex-col gap-5">
          <TwitterIcon className="w-10 fill-[#1d9bf0] " />
          <p className="mb-12 text-3xl font-bold">
            See what's happening in the world right now
          </p>
          <p className="text-xl font-semibold"> Join Twitter today.</p>
          <button className="w-full rounded-full bg-blue-500 px-5 py-2.5 text-center text-xl font-semibold text-white hover:bg-opacity-[85%] focus:outline-none  focus:ring-4 sm:w-auto">
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}
