/** @format */
import { useSession, signIn, signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import Head from "next/head";
import { ReactNode, useEffect, useRef, useState } from "react";
import TwitterIcon from "../icons/twitter";

const Auth = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();
  const { theme, setTheme } = useTheme();
  console.log(theme);

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

  if (status === "unauthenticated") {
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
            <SignUp />
          </div>
        </div>
      </>
    );
  }

  return <>{children}</>;
};

export default Auth;

function SignUp() {
  const [error, setError] = useState("");
  let usernameInputRef: any = useRef();
  let passwordInputRef: any = useRef();
  async function signup(e: any) {
    e.preventDefault();
    let username = usernameInputRef.current.value;
    let password = passwordInputRef.current.value;
    let data = { username, password };
  }
  return (
    <form onSubmit={signup} className="flex w-full items-center justify-center">
      <div className="flex flex-col gap-5">
        <TwitterIcon className="w-10 fill-[#1d9bf0] " />
        <p className="mb-12 text-3xl font-bold">
          See what's happening in the world right now
        </p>
        <p className="text-xl font-semibold"> Join Twitter today.</p>
        <button className="w-full rounded-full bg-blue-500 px-5 py-2.5 text-center text-xl font-semibold text-white hover:bg-opacity-[85%] focus:outline-none  focus:ring-4 sm:w-auto">
          Sign Up
        </button>
        <button className="w-full rounded-full border-blue-900 bg-opacity-100 px-5 py-2.5 text-center text-xl font-semibold text-[#1D9BF0] ring hover:bg-blue-500 hover:bg-opacity-[20%] dark:text-white     sm:w-auto">
          Login
        </button>
      </div>
    </form>
  );
}
