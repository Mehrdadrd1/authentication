import { api } from "../config/axios";

export interface Tweet {
  id: number;
  text: string;
  author: number;
  has_edit_permission: string;
  created_at: string;
  updated_at: string;
}

export interface PaginatedTweets {
  count: number;
  next: string | null;
  previous: string | null;
  results: Tweet[];
}

export interface GetTweetsParams {
  search?: string;
  ordering?: string;
  page?: number;
  count_per_page?: number;
}

export const getTweets = async (params: GetTweetsParams = {}) => {
  const response = await api.get<PaginatedTweets>("/tweet/", { params });
  return response.data;
};

export const createTweet = async (text: string) => {
  const response = await api.post("/tweet/", { text });
  return response.data;
};
