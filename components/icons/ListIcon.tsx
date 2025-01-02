"use client";

import { useState } from "react";

export default function ListIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const listIconOnClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8"
        onClick={listIconOnClickHandler}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>

      {/* 드롭 다운 */}
      <div
        className={`absolute left-0 mt-2 w-32 bg-white [&_*]:bg-white border border-gray-200 rounded-md shadow-lg z-10 transform transition-all duration-300 overflow-hidden ${
          isOpen
            ? "opacity-100 scale-100 max-h-40 visible"
            : "opacity-0 scale-95 max-h-0 invisible"
        }`}
      >
        <ul className={`m-1 rounded-md `}>
          <li className="p-1 text-black rounded-md hover:bg-red-600 transition-all">
            공지사항
          </li>
          <li className="p-1 text-black rounded-md hover:bg-red-600 transition-all">
            문의
          </li>
        </ul>
      </div>
    </div>
  );
}
