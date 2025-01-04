"use client";

import { getUsercardDataForPageUser } from "@/lib/api/usercard-api";
import { GetUserCardDataType } from "@/types/usercard-type";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserPage() {
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

  return (
    <div>
      <div>{cardId}</div>
      <div>{userCard?.custom_users.nickname}</div>
    </div>
  );
}
