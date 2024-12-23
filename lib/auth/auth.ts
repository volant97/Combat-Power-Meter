import { supabase } from "@/lib/supabase-client";

// 유저 정보 확인
export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

// 회원가입
// supabase.auth.signUp({
//   email,
//   password,
// });

// 로그아웃
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) console.error("로그아웃 중 에러가 발생하였습니다.", error);
}
