import type { Tweet } from "../../../../api/services/tweets.list";
import { TweetCard, TweetText, TweetMeta, TweetDate } from "./tweetItem.styles";

type Props = {
  tweet: Tweet;
};

export default function TweetItem({ tweet }: Props) {
  return (
    <TweetCard>
      <TweetText>{tweet.text}</TweetText>

      <TweetMeta>
        <TweetDate>{new Date(tweet.created_at).toLocaleString()}</TweetDate>
      </TweetMeta>
    </TweetCard>
  );
}
