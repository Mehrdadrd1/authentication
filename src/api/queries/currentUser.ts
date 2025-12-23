import { useQuery } from "@tanstack/react-query";
import {
  getCurrentUser,
  type CurrentUserResponse,
} from "../services/users.current";
export const useCurrentUser = () =>
  useQuery<CurrentUserResponse, Error>({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    staleTime: 1000 * 60 * 5,
  });
