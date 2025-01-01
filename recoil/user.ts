// import { RegisterType } from '@/types/registerType';

// import { atom } from "recoil";

// export type UserState = { id: string; profile: RegisterType | null } | null;
// interface UserState {
//   id: string;
// }

import { atom } from "recoil";

export interface UserState {
  id: string;
}

/** 로그인 여부 */
export const userState = atom<UserState | null>({
  key: "userState",
  default: null,
});
