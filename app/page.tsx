"use client";

import SortBtnContainer from "@/components/home/sort_btn/SortBtnContainer";
import { getUsercardData } from "@/lib/api/usercard-api";
import { GetUserCardDataType } from "@/types/usercard-type";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/user";
import Link from "next/link";
import UserCard from "@/components/common/UserCard";

export default function HomePage() {
  const [userCards, setUserCards] = useState<GetUserCardDataType[]>([]);
  const currentUserId = useRecoilValue(userState)?.id;

  const fetchUserCardData = async () => {
    try {
      const data = await getUsercardData();
      setUserCards(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchUserCardData();
  }, [currentUserId]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex items-end gap-2">
          <h1 className="text-pointc1 text-2xl font-bold">[LOVe]</h1>
          <h2 className="text-pointc1 text-xl font-bold">LOVE IS WAR</h2>
        </div>
        <SortBtnContainer />
        <ul className="flex flex-wrap -mx-2">
          {userCards.map((v, i) => (
            <li key={i} className="w-1/2 h-full p-2">
              <Link href={`/usercard/${v.card_id}`}>
                <UserCard userCard={v} style={v.card_id.toString()} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
