import NextLink from "@components/NextLink";

export function FollowStats({ username ,following,  followers}: { username: string,followers:number,following:number }) {
  return (
    <div className="flex w-full items-start justify-start divide-gray-800 pt-3">
      <div className="pr-3 text-center">
        <NextLink href={"/" + username + "/following"}>
          <span className="font-bold text-white">{following}</span>
          <span className="text-gray-600"> Following</span>
        </NextLink>
      </div>
      <div className="px-3 text-center">
        <NextLink href={"/" + username + "/followers"}>
          <span className="font-bold text-white">{followers}</span>
          <span className="text-gray-600"> Followers</span>
        </NextLink>
      </div>
    </div>
  );
}
