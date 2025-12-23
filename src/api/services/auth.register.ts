import { api } from "../config/axios";

export type RegisterPayload = {
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  confirm_password: string;
  avatar?: File | null;
};

export type RegisterResponse = {
  token: string;
};

export const registerService = async (
  data: RegisterPayload
): Promise<RegisterResponse> => {
  const formData = new FormData();
  formData.append("first_name", data.first_name);
  formData.append("last_name", data.last_name);
  formData.append("username", data.username);
  formData.append("password", data.password);
  formData.append("confirm_password", data.confirm_password);
  if (data.avatar) formData.append("avatar", data.avatar);

  const response = await api.post("/staff/register/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};
