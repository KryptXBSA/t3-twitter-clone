import { t } from "../../../trpc/trpc";
import { getAllTweets, getTweet } from "./getTweets";
import { likeTweet, replyTweet, reTweet } from "./tweetActions";
import { newTweet } from "./newTweet";

export const tweetRouter = t.router({
  getTweet,
  getAllTweets,
  likeTweet,
  replyTweet,
  reTweet,
  newTweet,
});
