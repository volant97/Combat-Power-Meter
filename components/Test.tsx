"use client";

import { logout } from "@/lib/auth/auth";

export default function Test() {
  return (
    <div>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
}
