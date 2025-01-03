"use client";

import { testData } from "@/lib/api/supabase-test-api";
import {
  getUsercardData,
  getUsercardDataForCurrentUser,
} from "@/lib/api/usercard-api";
import { userState } from "@/recoil/user";
import { GetUserCardDataType } from "@/types/usercard-type";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// testcode
export default function TestPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [testDatas, setTestDatas] = useState<any[]>([]);
  const [userCards, setUserCards] = useState<GetUserCardDataType[]>([]);
  const [currentUserCards, setCurrentUserCards] = useState<
    GetUserCardDataType[]
  >([]);
  const userData = useRecoilValue(userState);

  const userId = userData?.id;

  const fetchData = async () => {
    try {
      const data = await testData();
      setTestDatas(data);
    } catch (error) {
      alert(error);
    }
  };

  const fetchUsercardData = async () => {
    try {
      const data = await getUsercardData();
      setUserCards(data);
    } catch (error) {
      alert(error);
    }
  };

  const fetchUsercardDataForCurrentUser = async () => {
    if (!userId) return;

    try {
      const data = await getUsercardDataForCurrentUser(userId);
      setCurrentUserCards(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchUsercardData();
    fetchUsercardDataForCurrentUser();
  }, [userData]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-pointc text-3xl">유저 닉네임</h1>
      <div>
        {testDatas.map((v, i) => (
          <div key={i}>
            <p>{v.nickname}</p>
          </div>
        ))}
      </div>
      <h1 className="text-pointc text-3xl">유저 카드 리스트</h1>
      <div>
        {userCards.map((v, i) => (
          <div key={i}>
            <div>{v.custom_users.nickname}</div>
            <div>{v.level} LV</div>
            <div>{v.group1_cp} M</div>
          </div>
        ))}
      </div>
      <h1 className="text-pointc text-3xl">현재 유저 카드</h1>
      <div>
        {userId === currentUserCards[0]?.user_id ? (
          <div>{currentUserCards[0]?.custom_users.nickname}</div>
        ) : (
          <div>유저 카드가 없어요.</div>
        )}
      </div>
    </div>
  );
}
