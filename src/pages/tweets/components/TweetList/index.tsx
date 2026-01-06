import TweetItem from "../TweetItem";
import { TweetListContainer, TweetListLoader } from "./tweetList.styles";
import { useRef, useEffect } from "react";
import { useInfiniteTweets } from "../../../../api/queries/useGetTweets";

export default function TweetList({ search }: { search: string }) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteTweets({ search, count_per_page: 10 }); // example

  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loaderRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        fetchNextPage();
      }
    });

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  return (
    <TweetListContainer>
      {data?.pages.flatMap((page) =>
        page.results.map((tweet) => <TweetItem key={tweet.id} tweet={tweet} />)
      )}

      {hasNextPage && (
        <TweetListLoader ref={loaderRef}>
          {isFetchingNextPage ? "Loading more tweets…" : ""}
        </TweetListLoader>
      )}
    </TweetListContainer>
  );
}
