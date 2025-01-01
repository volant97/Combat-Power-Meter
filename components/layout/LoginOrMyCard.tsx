"use client";

import Link from "next/link";
import UserIcon from "../icons/UserIcon";
import LoginIcon from "../icons/LoginIcon";
import { Fragment, useState } from "react";
import { userState } from "@/recoil/user";
import { useRecoilValue } from "recoil";

export default function LoginOrMyCard() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const user = useRecoilValue(userState);

  console.log("이제되냐", !!user);

  // const fetchUser = async () => {
  //   const user = await getUser();
  //   setIsLogin(!!user);
  // };

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  return (
    <Fragment>
      {!!isLogin ? (
        <Link
          href={"/my/1"}
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
    </Fragment>
  );
}
