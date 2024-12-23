import { supabase } from "@/lib/supabase-client";

// 유저 정보 확인
export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

// 회원가입
// metadata에 정보 추가
export async function signup(
  email: string,
  password: string,
  nickname: string
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { nickname }, // user_metadata에 닉네임 추가
    },
  });

  if (error) {
    throw new Error("데이터를 가져오는 중 에러가 발생하였습니다.");
  }

  return data;
}

// 로그인

// 로그아웃
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) console.error("로그아웃 중 에러가 발생하였습니다.", error);
}
