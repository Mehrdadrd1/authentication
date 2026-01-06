import type { Tweet } from "../../../../api/services/tweets.list";
import {
  Avatar,
  TweetAuthor,
  TweetCard,
  TweetHeader,
  TweetText,
  TweetTime,
} from "./tweetItem.styles";

import noImage from "../../../../assets/noImage.svg";

type Props = {
  tweet: Tweet;
  authorAvatar?: string; // pass avatar of the tweet's author
  authorName?: string; // pass author's name
};

export default function TweetItem({ tweet, authorAvatar, authorName }: Props) {
  return (
    <TweetCard>
      <TweetHeader>
        <Avatar
          src={authorAvatar ? authorAvatar : noImage}
          alt={`${authorName} avatar`}
        />
        <div>
          <TweetAuthor>{authorName}</TweetAuthor>
          <TweetTime>{new Date(tweet.created_at).toLocaleString()}</TweetTime>
        </div>
      </TweetHeader>

      <TweetText>{tweet.text}</TweetText>
    </TweetCard>
  );
}
