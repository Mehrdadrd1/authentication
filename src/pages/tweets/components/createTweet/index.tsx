import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createTweet } from "../../../../api/services/tweets.list";
import {
  Avatar,
  BottomRow,
  Container,
  PostButton,
  TextArea,
  TopRow,
} from "./createTweet.styles";
import { useCurrentUser } from "../../../../api/queries/currentUser";

const CreateTweet = () => {
  const [text, setText] = useState("");
  const queryClient = useQueryClient();

  const { data } = useCurrentUser();

  const { mutate, isPending } = useMutation({
    mutationFn: createTweet,
    onSuccess: () => {
      setText(""); // clear textarea after successful post
      queryClient.invalidateQueries({ queryKey: ["tweets"] }); // refresh tweets list
    },
    onError: (err) => {
      console.error("Error creating tweet:", err);
    },
  });

  const handlePost = () => {
    if (!text) return;
    mutate(text);
  };

  return (
    <Container>
      <TopRow>
        <Avatar src={data?.avatar} alt="User Avatar" />
        <TextArea
          placeholder="What's Happening?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </TopRow>
      <BottomRow>
        <PostButton disabled={!text || isPending} onClick={handlePost}>
          Post
        </PostButton>
      </BottomRow>
    </Container>
  );
};

export default CreateTweet;
