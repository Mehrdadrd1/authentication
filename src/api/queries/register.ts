import { useMutation } from "@tanstack/react-query";
import {
  registerService,
  type RegisterPayload,
  type RegisterResponse,
} from "../services/auth.register";

export const useRegister = () => {
  return useMutation<RegisterResponse, Error, RegisterPayload>({
    mutationFn: (payload: RegisterPayload) => registerService(payload),
  });
};
