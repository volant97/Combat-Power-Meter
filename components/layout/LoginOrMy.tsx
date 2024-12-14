"use client";

import Link from "next/link";
import UserIcon from "../icons/UserIcon";
import LoginIcon from "../icons/LoginIcon";
import { Fragment, useState } from "react";

export default function LoginOrMy() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <Fragment>
      {isLogin ? (
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
