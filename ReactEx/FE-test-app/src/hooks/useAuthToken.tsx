import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export function useAuthToken(): string {
  const token = useSelector((s: RootState) => s.auth.authToken);
  if (!token) {
    throw new Error("useAuthToken must be used inside protected route");
  }
  return token;
}