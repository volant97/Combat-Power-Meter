import { supabase } from "../supabase-client";

export async function testData() {
  const { data, error } = await supabase.from("custom_users").select("*");

  if (error) {
    throw new Error("데이터를 가져오는 중 에러가 발생하였습니다.");
  }

  return data;
}
