"use client";

import { testData } from "@/lib/api/supabase-test-api";
import { getUsercardData } from "@/lib/api/usercard-api";
import { userState } from "@/recoil/user";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function TestPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [testDatas, setTestDatas] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userCards, setUserCards] = useState<any[]>([]);
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

  useEffect(() => {
    fetchData();
    fetchUsercardData();
  }, []);

  console.log("!!", userCards);

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
      <h1 className="text-pointc text-3xl">유저 카드</h1>
      <div>
        {userCards.map((v, i) => (
          <div key={i}>{v.group1_cp}</div>
        ))}
      </div>
    </div>
  );
}
