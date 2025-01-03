import { atom } from "recoil";
import { UserStateType } from "@/types/user-type";

export interface UserState {
  id: string;
  profile: UserStateType | null;
}

/** 로그인 여부 */
export const userState = atom<UserState | null>({
  key: "userState",
  default: null,
});
