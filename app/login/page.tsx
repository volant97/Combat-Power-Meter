"use client";

import LoginModal from "@/components/login/LoginModal";
import { login } from "@/lib/auth/auth";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isModal, setIsModal] = useState<boolean>(false);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email && password) {
      try {
        const data = await login(email, password);
        setNickname(data.user?.user_metadata.nickname);
        setIsModal(true);
      } catch (error) {
        alert(error);
      }
    } else {
      alert("모든 내용을 입력해주세요.");
    }
  };

  const toggleShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col justify-center items-center gap-3 w-full h-4/5"
    >
      <label className="relative input input-bordered flex items-center gap-2 w-4/5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input
          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
          className="grow h-20"
          placeholder="이메일"
        />
        <Link
          href={`/signup`}
          className="absolute -top-11 right-0 flex justify-end items-center w-20 h-10 pr-2 text-pointc font-SDSamliphopangche"
          tabIndex={-1}
        >
          회원가입
        </Link>
      </label>
      <label className="relative input input-bordered flex items-center gap-2 w-4/5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type={isShowPassword ? "text" : "password"}
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
          className="grow h-20"
          placeholder={isShowPassword ? password : "비밀번호 (6자 이상)"}
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          tabIndex={-1}
          className="absolute right-4"
        >
          {isShowPassword ? "숨기기" : "보기"}
        </button>
      </label>

      <button
        type="submit"
        className="w-20 h-12 mt-4 text-lg text-bgc1 font-SDSamliphopangche bg-pointc border-2 border-bgc1 rounded-md"
      >
        확인
      </button>
      {isModal && (
        <LoginModal
          select="login"
          nickname={nickname}
          setIsModal={setIsModal}
        />
      )}
    </form>
  );
}
