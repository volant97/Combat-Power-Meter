"use client";

import Link from "next/link";
import { userState } from "@/recoil/user";
import { useRecoilValue } from "recoil";
import UserIcon from "@/components/icons/UserIcon";
import LoginIcon from "@/components/icons/LoginIcon";
import { useEffect, useState } from "react";
import { getUsercardDataForCurrentUser } from "@/lib/api/usercard-api";

export default function LoginOrMyCard() {
  const userData = useRecoilValue(userState);
  const [userCardId, setUserCardId] = useState<string | null>(null);

  const fetchCurrentUsercardData = async () => {
    try {
      const data = await getUsercardDataForCurrentUser(userData?.id as string);

      if (data) {
        setUserCardId(data.card_id as string);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchCurrentUsercardData();
  }, [userData]);

  return (
    <>
      {userData ? (
        <Link
          href={`${userCardId ? `usercard/${userCardId}` : "/cardedit"}`}
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
