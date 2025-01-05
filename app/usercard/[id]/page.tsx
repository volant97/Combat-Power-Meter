"use client";

import UserCard from "@/components/common/UserCard";
import { getUsercardDataForPageUser } from "@/lib/api/usercard-api";
import { GetUserCardDataType } from "@/types/usercard-type";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UsercardPage() {
  const params = useParams();
  const { id: cardId } = params;

  const [userCard, setUserCard] = useState<GetUserCardDataType | null>(null);

  const fetchPageUsercardData = async () => {
    try {
      const data = await getUsercardDataForPageUser(cardId as string);
      setUserCard(data);
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
      <div className="flex flex-col">
        <div className="flex justify-center">
          <UserCard style="usercard" userCard={userCard} />
        </div>
      </div>
      <div>서브 카드 정보</div>
      <div>피드백</div>
    </div>
  );
}
