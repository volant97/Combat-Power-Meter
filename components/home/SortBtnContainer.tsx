"use client";

import { useState } from "react";
import SortBtn from "./SortBtn";

export default function SortBtnContainer() {
  const [selectedBtn, isSelectedBtn] = useState<number>(0);
  const sortBtnTextArr = [
    "최신 순",
    "전투력 순",
    "레벨 순",
    "성장률 순",
    "이름 순",
  ];

  const sortBtnOnClickHandler = (i: number) => {
    isSelectedBtn(i);
  };

  console.log(selectedBtn);

  return (
    <div className="flex gap-3">
      {sortBtnTextArr.map((v, i) => (
        <div key={i} onClick={() => sortBtnOnClickHandler(i)}>
          <SortBtn text={v} index={i} selectedBtn={selectedBtn} />
        </div>
      ))}
    </div>
  );
}
