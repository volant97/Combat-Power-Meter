// import { RegisterType } from '@/types/registerType';

// import { atom } from "recoil";

// export type UserState = { id: string; profile: RegisterType | null } | null;
// interface UserState {
//   id: string;
// }

// <UserState | null>

// export type UserState = {
//   id: string;
// } | null;

/** 로그인 상태 */
// export const userState = atom<UserState>({
//   key: "userState",
//   default: null,
// });

import { atom } from "recoil";

export interface UserState {
  id: string;
}

export const userState = atom<UserState | null>({
  key: "userState", // 고유한 키 이름
  default: null, // 기본값
});
