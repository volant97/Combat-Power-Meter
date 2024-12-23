import { supabase } from "../supabase-client";

// 일단 테스트
export async function testData() {
  const { data, error } = await supabase.from("custom_users").select("*");

  if (error) {
    throw new Error("데이터를 가져오는 중 에러가 발생하였습니다.");
  }

  return data;
}

// 일단 테스트
// 타입 지정
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function updateRegister(uid: any, registerData: any) {
  const { data, error } = await supabase
    .from("custom_users")
    .update(registerData)
    .eq("uid", uid)
    .select();

  if (error) {
    throw new Error("데이터를 가져오는 중 에러가 발생하였습니다.");
  }

  return data;
}
