import { useState } from "react";
// import CreateTweet from "./CreateTweet";
import { TweetsContent, TweetsPageContainer } from "./tweets.styles";
import TweetList from "./components/TweetList";
import SearchBar from "./components/SearchBar";
import CreateTweet from "./components/createTweet";
import { useTweetsWebSocket } from "../../api/queries/tweetsWS";

const TweetsPage = () => {
  const [search, setSearch] = useState("");

  useTweetsWebSocket();

  return (
    <TweetsPageContainer>
      <TweetsContent>
        <SearchBar value={search} onChange={setSearch} />
        {!search && <CreateTweet />}
        <TweetList search={search} />
      </TweetsContent>
    </TweetsPageContainer>
  );
};

export default TweetsPage;
