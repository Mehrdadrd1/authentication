import { useEffect, useRef } from "react";
import { useInfiniteTweets } from "../../../../api/queries/useGetTweets";
import TweetItem from "../TweetItem";
import EmptyState from "./emptyState";
import { TweetListContainer, TweetListLoader } from "./tweetList.styles";

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

  if (search && data?.pages[0].results.length === 0) {
    return <EmptyState searchTerm={search} />;
  }

  return (
    <TweetListContainer>
      {data?.pages.flatMap((page) =>
        page.results.map((tweet) => (
          <TweetItem
            key={tweet.id}
            tweet={tweet}
            authorAvatar={tweet.author.avatar}
            authorName={`${tweet.author.first_name} ${tweet.author.last_name}`}
          />
        ))
      )}

      {hasNextPage && (
        <TweetListLoader ref={loaderRef}>
          {isFetchingNextPage ? "Loading more tweets…" : ""}
        </TweetListLoader>
      )}
    </TweetListContainer>
  );
}
