import { api } from "../config/axios";

export type CurrentUserResponse = {
  username: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export const getCurrentUser = async (): Promise<CurrentUserResponse> => {
  const response = await api.get<CurrentUserResponse>("/staff/current_user/");
  return response.data;
};
