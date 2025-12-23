import { useMutation } from "@tanstack/react-query";
import { loginService, type LoginPayload } from "../services/authLogin";

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginPayload) => loginService(data),
  });
};
