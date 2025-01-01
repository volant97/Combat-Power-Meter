"use client";

import { testData } from "@/lib/api/supabaseApi";
import { testState } from "@/recoil/testtest";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function TestPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [testDatas, setTestDatas] = useState<any[]>([]);

  const aaa = useRecoilValue(testState);

  const getData = async () => {
    try {
      const data = await testData();
      setTestDatas(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(testDatas);

  return (
    <div>
      <p className="text-pointc text-3xl">유저 닉네임</p>
      {testDatas.map((v, i) => (
        <div key={i}>
          <p>{v.nickname}</p>
        </div>
      ))}
    </div>
  );
}
