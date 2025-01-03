"use client";

import { useEffect, useRef, useState } from "react";
import DropdownList from "./DropdownList";
import ListIcon from "../icons/ListIcon";

export default function ListAndDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null); // 드롭다운 DOM을 참조

  const listIconOnClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const outsideOnClickHandler = (event: MouseEvent) => {
    if (
      listRef.current && // 드롭다운 DOM이 존재하며
      !listRef.current.contains(event.target as Node) // 클릭한 대상이 드롭다운 내부가 아니면
    ) {
      setIsOpen(false); // 드롭다운 닫기
    }
  };

  useEffect(() => {
    // 외부 클릭 이벤트 리스너 등록
    window.addEventListener("click", outsideOnClickHandler);

    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 해제
      window.removeEventListener("click", outsideOnClickHandler);
    };
  }, []);

  return (
    <div className="absolute left-0 flex items-center h-[8dvh] aspect-square pl-5">
      <div className="relative" ref={listRef}>
        <button onClick={listIconOnClickHandler}>
          <ListIcon />
        </button>

        {/* 드롭 다운 */}
        <div
          className={`absolute left-0 mt-2 w-32 bg-maintextc border-2 border-pointc rounded-md shadow-lg z-10 transform transition-all duration-300 overflow-hidden ${
            isOpen
              ? "opacity-100 scale-100 max-h-40 visible"
              : "opacity-0 scale-95 max-h-0 invisible"
          }`}
        >
          <ul className="flex flex-col m-1 rounded-md bg-maintextc">
            <DropdownList
              text="공지사항"
              linkText="notices"
              setIsOpen={setIsOpen}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
