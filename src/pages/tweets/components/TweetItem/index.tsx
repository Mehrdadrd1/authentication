import { useState, useRef, useEffect } from "react";
import type { Tweet } from "../../../../api/services/tweets.list";
import {
  Avatar,
  DeleteMenu,
  DeleteMenuItem,
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
import deleteIcon from "../../../../assets/deleteIcon.svg"; // icon for delete menu

type Props = {
  tweet: Tweet;
  authorAvatar?: string | null;
  authorName?: string;
};

export default function TweetItem({ tweet, authorAvatar, authorName }: Props) {
  const { mutate: deleteMutate, isPending: isDeleting } = useDeleteTweet();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleDelete = () => {
    deleteMutate(tweet.id);
    setMenuOpen(false); // close menu after delete
  };

  // close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <TweetCard>
      <div style={{ position: "relative" }} ref={menuRef}>
        <DeleteButton onClick={() => setMenuOpen((prev) => !prev)}>
          <img src={ellipsis} alt="Options" />
        </DeleteButton>

        {menuOpen && (
          <DeleteMenu>
            <DeleteMenuItem onClick={handleDelete} disabled={isDeleting}>
              <img src={deleteIcon} alt="Delete" />
              Delete Post
            </DeleteMenuItem>
          </DeleteMenu>
        )}
      </div>

      <TweetHeader>
        <Avatar src={authorAvatar || noImage} alt={`${authorName} avatar`} />
        <div>
          <TweetAuthor>{authorName}</TweetAuthor>
          <TweetTime>{new Date(tweet.created_at).toLocaleString()}</TweetTime>
        </div>
      </TweetHeader>

      <TweetText>{tweet.text}</TweetText>
    </TweetCard>
  );
}
