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
        {!search && <div style={{ margin: "16px 0" }}>Create Tweet</div>}
        <TweetList search={search} />
      </TweetsContent>
    </TweetsPageContainer>
  );
};

export default TweetsPage;
