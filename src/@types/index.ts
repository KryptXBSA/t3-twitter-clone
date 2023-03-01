
import type { Tweet, User, Like, Retweet, Reply } from "@prisma/client";
export type UserData = User

export type TweetProps = Tweet & {
  user: User;
  likes: Like[];
  retweets: Retweet[];
  replies: Reply[];
};
