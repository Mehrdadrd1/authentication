import { api } from "../config/axios";

export type LoginPayload = {
  userName: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

export const loginService = async (
  data: LoginPayload
): Promise<LoginResponse> => {
  const response = await api.post("/staff/auth/", data);
  return response.data;
};
