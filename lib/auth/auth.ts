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
      data: { nickname }, // raw_user_meta_data(user_metadata)에 닉네임 추가
    },
  });

  if (error) {
    throw new Error(`회원가입 중 에러가 발생했습니다. (${error.message})`);
  }

  return data;
}

// 로그인
export async function login(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(`로그인 중 에러가 발생했습니다. (${error.message})`);
  }
}

// 로그아웃
export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(`로그아웃 중 에러가 발생했습니다. (${error.message})`);
  }
}
