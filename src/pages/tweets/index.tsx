import { useState } from "react";
// import SearchBar from "./SearchBar";
// import CreateTweet from "./CreateTweet";
import { TweetsContent, TweetsPageContainer } from "./tweets.styles";
import TweetList from "./components/TweetList";

const TweetsPage = () => {
  const [search, setSearch] = useState("");

  return (
    <TweetsPageContainer>
      <TweetsContent>
        {/* <SearchBar value={search} onChange={setSearch} /> */}
        {/* <CreateTweet /> */}
        <TweetList search={search} />
      </TweetsContent>
    </TweetsPageContainer>
  );
};

export default TweetsPage;
