import { atom } from "recoil";
import { UserStateProfileType } from "@/types/user-type";

export interface UserStateType {
  id: string;
  profile: UserStateProfileType;
}

// 로그인 상태
export const isLoginState = atom<boolean>({
  key: "isLoginState",
  default: false,
});

// 유저 상태
export const userState = atom<UserStateType | null>({
  key: "userState",
  default: null,
});
