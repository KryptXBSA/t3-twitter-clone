import NextLink from "@components/NextLink";

export function FollowStats({ username }: { username: string }) {
  return (
    <div className="flex w-full items-start justify-start divide-gray-800 pt-3">
      <div className="pr-3 text-center">
        <NextLink href={"/" + username + "/following"}>
          <span className="font-bold text-white">520</span>
          <span className="text-gray-600"> Following</span>
        </NextLink>
      </div>
      <div className="px-3 text-center">
        <NextLink href={"/" + username + "/followers"}>
          <span className="font-bold text-white">23,4m </span>
          <span className="text-gray-600"> Followers</span>
        </NextLink>
      </div>
    </div>
  );
}
