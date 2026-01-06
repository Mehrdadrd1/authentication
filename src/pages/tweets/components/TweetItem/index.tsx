import type { Tweet } from "../../../../api/services/tweets.list";
import {
  Avatar,
  DeleteButton,
  TweetAuthor,
  TweetCard,
  TweetHeader,
  TweetText,
  TweetTime,
} from "./tweetItem.styles";

import { useDeleteTweet } from "../../../../api/queries/tweets.delete";
import noImage from "../../../../assets/noImage.svg";
import ellipsis from "../../../../assets/ellipsis.svg";

type Props = {
  tweet: Tweet;
  authorAvatar?: string | null; // pass avatar of the tweet's author
  authorName?: string; // pass author's name
};

export default function TweetItem({ tweet, authorAvatar, authorName }: Props) {
  const { mutate: deleteMutate, isPending: isDeleting } = useDeleteTweet();

  const handleDelete = () => {
    deleteMutate(tweet.id);
  };

  return (
    <TweetCard>
      <DeleteButton onClick={handleDelete} disabled={isDeleting}>
        <img src={ellipsis} alt="Delete tweet" />
      </DeleteButton>

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
