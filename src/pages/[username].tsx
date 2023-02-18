import { SEO } from "@components/SEO";
import { type NextPage } from "next";
import SidebarLeft from "@components/SidebarLeft";
import SidebarRight from "@components/SidebarRight/SidebarRight";
import HomeContent from "@components/pageComponents/home/HomeContent";

const ProfilePage: NextPage = () => {
  return (
    <>
      <SEO title="Home" />
      <div className="mx-auto ">
        <div className="bg-r flex  flex-row justify-center">
          <SidebarLeft />
          <Profile />
          <SidebarRight />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

const Profile: NextPage = () => {
  return (
    <>
      <>
        <section className="main-content">
          {/* User card*/}
          <div>
            <div
              className="w-full bg-cover bg-center bg-no-repeat"
              style={{
                height: 200,
                backgroundImage:
                  "url(https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200)",
              }}
            >
              <img
                className="h-full w-full opacity-0"
                src="https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200"
                alt=""
              />
            </div>
            <div className="p-4">
              <div className="relative flex w-full">
                {/* Avatar */}
                <div className="flex flex-1">
                  <div style={{ marginTop: "-6rem" }}>
                    <div
                      style={{ height: "9rem", width: "9rem" }}
                      className="md avatar relative rounded-full"
                    >
                      <img
                        style={{ height: "9rem", width: "9rem" }}
                        className="md relative rounded-full border-4 border-gray-900"
                        src="https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg"
                        alt=""
                      />
                      <div className="absolute" />
                    </div>
                  </div>
                </div>
                <FollowBtn />
              </div>
              <div className="mt-3 ml-3 w-full justify-center space-y-1">
                <div>
                  <h2 className="text-xl font-bold leading-6 text-white">
                    Aland Sleman
                  </h2>
                  <p className="text-sm font-medium leading-5 text-gray-600">
                    @Ricardo_oRibeir
                  </p>
                </div>
                <div className="mt-3">
                  <p className="mb-2 leading-tight text-white">
                    Software Engineer / Designer / Entrepreneur <br />
                    Visit my website to test a working <b>
                      Twitter Clone.
                    </b>{" "}
                  </p>
                  <div className="flex text-gray-600">
                    <Url />
                    <Joined />
                  </div>
                </div>
                <FollowStats />
              </div>
            </div>
            <hr className="border-gray-800" />
          </div>
          <ul className="list-none">
            <Tweet />
          </ul>
        </section>
      </>
    </>
  );
};

function FollowBtn() {
  return (
    <div className="flex flex-col text-right">
      <button className="mr-0 ml-auto  flex flex max-h-max  max-w-max  items-center justify-center whitespace-nowrap rounded rounded-full border border-blue-500 bg-transparent py-2 px-4 font-bold text-blue-500 hover:border-blue-800 hover:border-blue-800 hover:shadow-lg focus:outline-none focus:ring">
        Edit Profile
      </button>
    </div>
  );
}

function Url() {
  return (
    <span className="mr-2 flex">
      <svg viewBox="0 0 24 24" className="paint-icon h-5 w-5">
        <g>
          <path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z" />
          <path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z" />
        </g>
      </svg>{" "}
      <a
        href="https://ricardoribeirodev.com/personal/"
        target="#"
        className="ml-1 leading-5 text-blue-400"
      >
        www.RicardoRibeiroDEV.com
      </a>
    </span>
  );
}

function Joined() {
  return (
    <span className="mr-2 flex">
      <svg viewBox="0 0 24 24" className="paint-icon h-5 w-5">
        <g>
          <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z" />
          <circle cx="7.032" cy="8.75" r="1.285" />
          <circle cx="7.032" cy="13.156" r="1.285" />
          <circle cx="16.968" cy="8.75" r="1.285" />
          <circle cx="16.968" cy="13.156" r="1.285" />
          <circle cx={12} cy="8.75" r="1.285" />
          <circle cx={12} cy="13.156" r="1.285" />
          <circle cx="7.032" cy="17.486" r="1.285" />
          <circle cx={12} cy="17.486" r="1.285" />
        </g>
      </svg>{" "}
      <span className="ml-1 leading-5">Joined December, 2019</span>
    </span>
  );
}

function FollowStats() {
  return (
    <div className="flex w-full items-start justify-start divide-x divide-solid divide-gray-800 pt-3">
      <div className="pr-3 text-center">
        <span className="font-bold text-white">520</span>
        <span className="text-gray-600"> Following</span>
      </div>
      <div className="px-3 text-center">
        <span className="font-bold text-white">23,4m </span>
        <span className="text-gray-600"> Followers</span>
      </div>
    </div>
  );
}

function Tweet() {
  return (
    <li>
      {/*second tweet*/}
      <article className="duration-350 transition ease-in-out hover:bg-gray-800">
        <div className="flex flex-shrink-0 p-4 pb-0">
          <a href="#" className="group block flex-shrink-0">
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block h-10 w-10 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-base font-medium leading-6 text-white">
                  Sonali Hirave
                  <span className="text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300">
                    @ShonaDesign . 16 April
                  </span>
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="pl-16">
          <p className="width-auto flex-shrink text-base font-medium text-white">
            Day 07 of the challenge{" "}
            <a href="#" className="text-blue-400">
              #100DaysOfCode
            </a>
            I was wondering what I can do with{" "}
            <a href="#" className="text-blue-400">
              #tailwindcss
            </a>
            , so just started building Twitter UI using Tailwind and so far it
            looks so promising. I will post my code after completion. [07/100]
            <a href="#" className="text-blue-400">
              {" "}
              #WomenWhoCode #CodeNewbie
            </a>
          </p>
          <div className="pr-6 pt-3 md:flex-shrink">
            <div
              className="h-64 w-full rounded-lg bg-cover bg-center bg-no-repeat"
              style={{
                height: 200,
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80)",
              }}
            >
              <img
                className="h-full w-full opacity-0"
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center py-4">
            <div className="duration-350 flex flex-1 items-center text-xs text-white text-gray-400 transition ease-in-out hover:text-blue-400">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 h-5 w-5"
              >
                <g>
                  <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z" />
                </g>
              </svg>
              12.3 k
            </div>
            <div className="duration-350 flex flex-1 items-center text-xs text-white text-gray-400 transition ease-in-out hover:text-green-400">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 h-5 w-5"
              >
                <g>
                  <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z" />
                </g>
              </svg>
              14 k
            </div>
            <div className="duration-350 flex flex-1 items-center text-xs text-white text-gray-400 transition ease-in-out hover:text-red-600">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 h-5 w-5"
              >
                <g>
                  <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z" />
                </g>
              </svg>
              14 k
            </div>
            <div className="duration-350 flex flex-1 items-center text-xs text-white text-gray-400 transition ease-in-out hover:text-blue-400">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 h-5 w-5"
              >
                <g>
                  <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z" />
                  <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <hr className="border-gray-800" />
      </article>
    </li>
  );
}
