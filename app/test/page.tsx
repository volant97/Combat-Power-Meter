"use client";

import { testData } from "@/lib/api/supabaseApi";
import { useEffect, useState } from "react";

export default function TestPage() {
  const [testDatas, setTestDatas] = useState<any[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
