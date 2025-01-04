"use client";

import { BASE_USER_IMG } from "@/constants/user";
import { getUsercardDataForPageUser } from "@/lib/api/usercard-api";
import { formatDateStyle1 } from "@/lib/common/format-date";
import { GetUserCardDataType } from "@/types/usercard-type";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UsercardPage() {
  const params = useParams();
  const { id: cardId } = params;

  const [userCard, setUserCard] = useState<GetUserCardDataType | null>(null);

  const fetchPageUsercardData = async () => {
    try {
      const data = await getUsercardDataForPageUser(cardId as string);
      setUserCard(data[0]);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchPageUsercardData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!userCard) return;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <div>메인 카드 정보</div>

        <div className="relative flex flex-col gap-2 w-3/4 p-3 bg-bgc2 rounded-md border-2 border-pointc hover:cursor-pointer shadow-md shadow-orange-500/40">
          <div className="absolute -top-7 right-1 flex justify-end gap-3">
            <p>최근 업데이트</p>
            <p>{formatDateStyle1(userCard.updated_at)}</p>
          </div>
          <div className="relative w-full aspect-square rounded-md">
            <Image
              src={userCard.custom_users.user_img || BASE_USER_IMG}
              alt="유저 카드 이미지"
              layout="fill"
              objectFit="corver"
              className="rounded-md"
            />
          </div>
          <div className="flex items-center gap-2 h-7 px-2 [&_*]:bg-pointc bg-pointc rounded-md [&_*]:text-bgc1">
            <div className="flex items-center gap-[2px]">
              <p className="text-sm">LV</p>
              <p>{userCard.level}</p>
            </div>
            <div className="flex w-full">{userCard.custom_users.nickname}</div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between gap-2 px-2 [&_*]:bg-bgc2 bg-bgc2">
              <p className="">T</p>
              <p className="">{userCard.total_cp.toLocaleString()}</p>
            </div>
            <div className="flex justify-between gap-2 px-2 [&_*]:bg-bgc2 bg-bgc2">
              <p className="">G1</p>
              <div className="flex gap-1">
                <p>{userCard.group1_cp}</p>
                <p>M</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>서브 카드 정보</div>
      <div>피드백</div>
    </div>
  );
}
