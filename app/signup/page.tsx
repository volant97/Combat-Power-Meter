"use client";

import { signup } from "@/lib/auth/auth";
import { useState } from "react";

export default function SignupPage() {
  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [isModal, setIsModal] = useState<boolean>(false);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] =
    useState<boolean>(false);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nickname && email && password && confirmPassword) {
      if (password === confirmPassword) {
        setIsModal(true);
        try {
          const data = await signup(email, password, nickname);
          alert(`${data.user?.user_metadata.nickname}님 반갑습니다!`);
        } catch (error) {
          alert(error);
        }
      } else {
        alert("비밀번호를 다시 확인해주세요");
      }
    } else {
      alert("모든 내용을 입력해주세요.");
    }
  };

  const toggleShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  const toggleShowConfirmPassword = () => {
    setIsShowConfirmPassword((prev) => !prev);
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col justify-center items-center gap-3 w-full h-4/5"
    >
      <label className="input input-bordered flex items-center gap-2 w-4/5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input
          type="text"
          value={nickname}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNickname(e.target.value);
          }}
          className="grow h-20"
          placeholder="닉네임"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2 w-4/5">
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
          className="absolute right-4"
        >
          {isShowPassword ? "숨기기" : "보기"}
        </button>
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
          type={isShowConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setConfirmPassword(e.target.value);
          }}
          className="grow h-20"
          placeholder={
            isShowConfirmPassword ? confirmPassword : "비밀번호 확인 (6자 이상)"
          }
        />
        <button
          type="button"
          onClick={toggleShowConfirmPassword}
          className="absolute right-4"
        >
          {isShowConfirmPassword ? "숨기기" : "보기"}
        </button>
      </label>
      <button
        type="submit"
        className="w-20 h-12 mt-4 text-lg text-bgc1 font-SDSamliphopangche bg-pointc border-2 border-bgc1 rounded-md"
      >
        확인
      </button>
      {isModal && (
        <div className="fixed top-24 flex flex-col gap-2 bg-green-500 [&_*]:bg-green-500 text-white p-4 rounded-md shadow-lg flex justify-between items-center">
          <p>{nickname}</p>
          <p>{email}</p>
          <p>{password}</p>
          <button
            type="button"
            onClick={() => setIsModal(false)}
            className="p-2 border-2"
          >
            닫기
          </button>
        </div>
      )}
    </form>
  );
}
