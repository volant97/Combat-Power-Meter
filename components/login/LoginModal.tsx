"use client";

import { isLoginState } from "@/recoil/user";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";

interface Props {
  select: string;
  nickname: string;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginModal({ select, nickname, setIsModal }: Props) {
  const router = useRouter();

  const setIsLogin = useSetRecoilState(isLoginState);

  const modalBtnOnClickHandler = () => {
    setIsModal(false);
    setIsLogin(true);
    router.push("/");
  };

  return (
    <div className="fixed top-24 flex flex-col gap-2 bg-green-500 [&_*]:bg-green-500 text-white p-4 rounded-md shadow-lg flex justify-between items-center">
      <div className="flex flex-col items-center gap-2">
        {/* 로그인 모달 */}
        {select === "login" && (
          <>
            <h1>로그인 성공!</h1>
            <p>{`${nickname}님 반갑습니다!`}</p>
          </>
        )}
        {/* 회원가입 모달 */}
        {select === "signup" && (
          <>
            <h1>회원가입 성공!</h1>
            <p>{`${nickname}님 가입을 축하합니다!`}</p>
          </>
        )}
      </div>
      <button
        type="button"
        onClick={modalBtnOnClickHandler}
        autoFocus
        className="p-2 border-2"
      >
        닫기
      </button>
    </div>
  );
}
