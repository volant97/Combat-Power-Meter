import { BASE_USER_IMG } from "@/constants/user";
import { formatDateStyle1 } from "@/lib/common/format-date";
import { GetUserCardDataType } from "@/types/usercard-type";
import Image from "next/image";

interface Props {
  style?: string;
  userCard: GetUserCardDataType;
}

export default function UserCard({ style, userCard }: Props) {
  return (
    <div
      className={`flex flex-col gap-2 size-full  p-3 bg-bgc2 rounded-md border-2 ${
        // testcode : 스킨 적용 시 활성화 예정
        // style !== "2" &&
        // style !== "4" &&
        "border-pointc2 shadow-black/80 shadow-allDirectionsShadow"
      }  ${style === "usercard" && "relative w-3/4 mt-7"} `}
      // testcode
      // ${
      //   style === "2" &&
      //   "border-pointc1 shadow-pointc1/50 shadow-allDirectionsShadow"
      // } ${
      //   style === "4" &&
      //   "border-red-500 shadow-red-500/50 shadow-allDirectionsShadow"
      // }
    >
      {style === "usercard" && (
        <div className="absolute -top-7 right-1 flex justify-end">
          <p>{formatDateStyle1(userCard.updated_at)}</p>
        </div>
      )}
      <div className="relative w-full aspect-square rounded-md">
        <Image
          src={userCard.custom_users.user_img || BASE_USER_IMG}
          alt="유저 카드 이미지"
          layout="fill"
          objectFit="corver"
          className="rounded-md"
        />
      </div>
      <div className="flex items-center gap-2 h-7 px-2 bg-pointc1 bg-pointc1 rounded-md [&_*]:text-bgc1">
        <div className="flex items-center gap-[2px]">
          <p className="text-sm">LV</p>
          <p>{userCard.level}</p>
        </div>
        <div className="truncate">{userCard.custom_users.nickname}</div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between gap-2 px-2">
          <p className="">T</p>
          <p className="">{userCard.total_cp.toLocaleString()}</p>
        </div>
        <div className="flex justify-between gap-2 px-2">
          <p className="">G1</p>
          <div className="flex gap-1">
            <p>{userCard.group1_cp}</p>
            <p>M</p>
          </div>
        </div>
      </div>
    </div>
  );
}
