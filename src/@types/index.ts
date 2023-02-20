
import type { Tweet, User, Like, Retweet, Reply } from "@prisma/client";
export type UserData = {
  id: string;
  username: string;
  name: string;
  email: string;
  provider: string;
  password: string;
  imageUrl: string;
  createdAt: string;
};


export type TweetProps = Tweet & {
  user: User;
  likes: Like[];
  retweets: Retweet[];
  replies: Reply[];
};
