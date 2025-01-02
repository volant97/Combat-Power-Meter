"use client";

import { logout } from "@/lib/auth/auth";
import { userState } from "@/recoil/user";
import { useRecoilValue } from "recoil";

export default function TestLogout() {
  const isLogin = useRecoilValue(userState);

  return (
    <>
      {isLogin && (
        <div className="absolute right-8">
          <button onClick={logout}>로그아웃</button>
        </div>
      )}
    </>
  );
}
