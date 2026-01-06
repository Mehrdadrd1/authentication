import { useState } from "react";
// import CreateTweet from "./CreateTweet";
import { TweetsContent, TweetsPageContainer } from "./tweets.styles";
import TweetList from "./components/TweetList";
import SearchBar from "./components/SearchBar";

const TweetsPage = () => {
  const [search, setSearch] = useState("");

  return (
    <TweetsPageContainer>
      <TweetsContent>
        <SearchBar value={search} onChange={setSearch} />
        {/* <CreateTweet /> */}
        {search ? null : "create Tweet"}
        <TweetList search={search} />
      </TweetsContent>
    </TweetsPageContainer>
  );
};

export default TweetsPage;
