"use client";

import { userState } from "@/recoil/user";
import { useRecoilValue } from "recoil";

export default function MyPage() {
  const userData = useRecoilValue(userState);

  return (
    <div>
      <span className="text-pointc">{userData?.profile?.nickname}</span>님
      반갑습니다!
    </div>
  );
}
