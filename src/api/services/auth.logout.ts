import { AUTH_TOKEN_KEY } from "../../constants";
import { api } from "../config/axios";

export type LogoutResponse = {
  message: string;
};

export const logoutService = async (): Promise<LogoutResponse> => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  const response = await api.delete<LogoutResponse>("/staff/auth/", {
    headers: { Authorization: `Token ${token}` },
  });
  return response.data;
};
