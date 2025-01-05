"use client";

import { getUsercardDataForCurrentUser } from "@/lib/api/usercard-api";
import { userState } from "@/recoil/user";
import { GetUserCardDataType } from "@/types/usercard-type";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function CardEditPage() {
  const [userCard, setUserCard] = useState<GetUserCardDataType | null>(null);
  const userData = useRecoilValue(userState);

  const fetchCurrentUsercardData = async () => {
    try {
      const data = await getUsercardDataForCurrentUser(userData?.id as string);

      if (data) {
        setUserCard(data);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchCurrentUsercardData();
  }, []);

  return (
    <>
      {/* userCard 있을 때 */}
      {userCard && (
        <div>
          <span className="text-pointc1">
            {userCard?.custom_users.nickname}
          </span>
          지휘관님 반갑습니다!
        </div>
      )}
      {/* userCard 없을 때 */}
      {!userCard && (
        <div className="relative flex flex-col items-center h-[65dvh] p-10 text-lg">
          <div className="flex flex-col gap-1">
            <div className="flex items-end gap-2">
              <h1 className="text-3xl text-pointc1 font-SDSamliphopangche">
                {userData?.profile?.nickname}
              </h1>
              <p className="pb-1">지휘관님</p>
            </div>
            <p>카드 제작소에 오신 것을 환영합니다!</p>
            <p>
              <span className="text-pointc1 font-SDSamliphopangche">
                첫 번째 카드
              </span>
              를 제작해 보세요.
            </p>
          </div>
          <button className="absolute bottom-0 w-4/5 px-3 py-2 text-2xl font-SDSamliphopangche text-maintextc bg-pointc1 border-2 border-bgc2 rounded-lg shadow-pointc1/40 shadow-allDirectionsShadow transform transition-all hover:scale-110 hover:shadow-pointc1/80 active:scale-95 active:shadow-pointc1/10">
            카드 제작
          </button>
        </div>
      )}
    </>
  );
}
