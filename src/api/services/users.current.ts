import { AUTH_TOKEN_KEY } from "../../constants";
import { api } from "../config/axios";

export type CurrentUserResponse = {
  username: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export const getCurrentUser = async (): Promise<CurrentUserResponse> => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  const response = await api.get<CurrentUserResponse>("/staff/current_user/", {
    headers: { Authorization: `Token ${token}` },
  });
  return response.data;
};
