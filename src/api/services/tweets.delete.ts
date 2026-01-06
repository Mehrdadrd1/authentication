import { api } from "../config/axios";

export const deleteTweet = async (id: number) => {
  const response = await api.delete(`/tweet/${id}/`);
  return response.data;
};
