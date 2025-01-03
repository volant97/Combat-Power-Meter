import { supabase } from "../supabase-client";

// user_cards의 모든 데이터 get
export async function getUsercardData() {
  const { data, error } = await supabase.from("user_cards")
    .select(`*, custom_users (
        uid,
        nickname,
        user_img
      )`);

  if (error) {
    throw new Error("데이터를 가져오는 중 에러가 발생하였습니다.");
  }

  return data;
}

// user_cards 중 현재 유저의 데이터 get
export async function getUsercardDataForCurrentUser(uid: string) {
  const { data, error } = await supabase
    .from("user_cards")
    .select(
      `*, custom_users (
        uid,
        nickname,
        user_img
      )`
    )
    .eq("user_id", uid);

  if (error) {
    throw new Error("데이터를 가져오는 중 에러가 발생하였습니다.");
  }

  return data;
}

// 타입 예시
// custom_users 테이블의 데이터 타입
interface CustomUser {
  uid: string; // 사용자 고유 ID
  nickname: string; // 사용자 닉네임
  user_img: string; // 사용자 프로필 이미지 URL
}

// user_cards 테이블의 데이터 타입
interface UserCard {
  user_id: string; // 사용자 ID (외래키)
  level: number; // 사용자 레벨
  total_cp: number; // 총 Combat Power
  group1_cp: number; // 그룹 1 Combat Power
  updated_at: string; // 마지막 업데이트 시간
  custom_users: CustomUser; // custom_users 테이블과 조인된 데이터
}
