import { t } from "../../../trpc/trpc";
import { getAllTweets, getTweet } from "./getTweets";
import { likeTweet, replyTweet, reTweet } from "./tweetActions";
import { newTweet } from "./newTweet";

export const tweetRouter = t.router({
  getTweet: getTweet,
  getAllTweets: getAllTweets,
  likeTweet: likeTweet,
  replyTweet: replyTweet,
  reTweet: reTweet,
  newTweet: newTweet,
});
