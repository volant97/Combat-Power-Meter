"use client";

import SortBtnContainer from "@/components/home/SortBtnContainer";
import { getUsercardData } from "@/lib/api/usercard-api";
import { GetUserCardDataType } from "@/types/usercard-type";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/user";
import Link from "next/link";
import Image from "next/image";
import { BASE_USER_IMG } from "@/constants/user";

export default function HomePage() {
  const [userCards, setUserCards] = useState<GetUserCardDataType[]>([]);
  const currentUserId = useRecoilValue(userState)?.id;

  const fetchUsercardData = async () => {
    try {
      const data = await getUsercardData();
      setUserCards(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchUsercardData();
  }, [currentUserId]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex items-end gap-2">
          <h1 className="text-pointc text-2xl font-bold">[LOVe]</h1>
          <h2 className="text-pointc text-xl font-bold">LOVE IS WAR</h2>
        </div>
        <SortBtnContainer />
        <ul className="flex flex-wrap -mx-2">
          {userCards.map((v, i) => (
            <li key={i} className="w-1/2 h-full p-2">
              <Link href={`/user/${v.card_id}`}>
                <div className=" flex flex-col gap-2 size-full p-3 bg-bgc2 rounded-md border-2 border-pointc hover:cursor-pointer shadow-md shadow-orange-500/40">
                  <div className="relative w-full aspect-square rounded-md">
                    <Image
                      src={v.custom_users.user_img || BASE_USER_IMG}
                      alt="유저 카드 이미지"
                      layout="fill"
                      objectFit="corver"
                      className="rounded-md"
                    />
                  </div>
                  <div className="flex items-center gap-2 h-7 px-2 [&_*]:bg-pointc bg-pointc rounded-md [&_*]:text-bgc1">
                    <div className="flex">
                      <p>LV</p>
                      <p>{v.level}</p>
                    </div>
                    <div className="flex w-full">{v.custom_users.nickname}</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-between gap-2 px-2 [&_*]:bg-bgc2 bg-bgc2">
                      <p className="">T</p>
                      <p className="">{v.total_cp.toLocaleString()}</p>
                    </div>
                    <div className="flex justify-between gap-2 px-2 [&_*]:bg-bgc2 bg-bgc2">
                      <p className="">G1</p>
                      <div className="flex gap-1">
                        <p>{v.group1_cp}</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
