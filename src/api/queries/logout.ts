import { useMutation } from "@tanstack/react-query";
import { logoutService, type LogoutResponse } from "../services/auth.logout";

export const useLogout = () =>
  useMutation<LogoutResponse, Error>({
    mutationFn: logoutService,
  });
