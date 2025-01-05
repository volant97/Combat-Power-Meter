"use client";

import { logout } from "@/lib/auth/auth";
import { isLoginState } from "@/recoil/user";
import { useRecoilState } from "recoil";

// testcode
export default function TestLogout() {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const logoutBtnOnClickHandler = () => {
    setIsLogin(false);
    alert("로그아웃 되었습니다.");
    logout();
  };

  return (
    <>
      {isLogin && (
        <div className="absolute right-8">
          <button onClick={logoutBtnOnClickHandler}>로그아웃</button>
        </div>
      )}
    </>
  );
}
