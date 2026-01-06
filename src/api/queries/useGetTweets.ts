import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
import {
  getTweets,
  type GetTweetsParams,
  type PaginatedTweets,
} from "../services/tweets.list";

export const useInfiniteTweets = (params: GetTweetsParams = {}) => {
  return useInfiniteQuery<
    PaginatedTweets,
    Error,
    InfiniteData<PaginatedTweets>,
    [string, GetTweetsParams],
    number
  >({
    queryKey: ["tweets", params],
    queryFn: ({ pageParam = 1 }) => {
      return getTweets({ ...params, page: pageParam, count_per_page: 10 });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;
      const url = new URL(lastPage.next);
      const nextPage = url.searchParams.get("page");
      return nextPage ? Number(nextPage) : undefined;
    },
  });
};
