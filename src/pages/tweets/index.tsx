import { useState } from "react";
import SearchBar from "./components/SearchBar";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/createTweet";
import { TweetsContent, TweetsPageContainer } from "./tweets.styles";

const TweetsPage = () => {
  const [search, setSearch] = useState("");

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
