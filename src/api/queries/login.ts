import { useMutation } from "@tanstack/react-query";
import {
  loginService,
  type LoginPayload,
  type LoginResponse,
} from "../services/authLogin";

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: (data: LoginPayload) => loginService(data),
  });
};
