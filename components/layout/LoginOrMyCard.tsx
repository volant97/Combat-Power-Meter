import Link from "next/link";
import UserIcon from "../icons/UserIcon";
import LoginIcon from "../icons/LoginIcon";
import { userState } from "@/recoil/user";
import { useRecoilValue } from "recoil";

export default function LoginOrMyProfile() {
  const isLogin = useRecoilValue(userState);

  return (
    <>
      {!!isLogin ? (
        <Link
          href={"/my"}
          className="absolute right-0 flex justify-end items-center h-[8dvh] aspect-square pr-5"
        >
          <UserIcon />
        </Link>
      ) : (
        <Link
          href={"/login"}
          className="absolute right-0 flex justify-end items-center h-[8dvh] aspect-square pr-5"
        >
          <LoginIcon />
        </Link>
      )}
    </>
  );
}
