import { supabase } from "../common/supabase-client";

// user_cards : 모든 데이터 + custom_users의 일부 데이터 get
export async function getUsercardData() {
  const { data, error } = await supabase.from("user_cards")
    .select(`*, custom_users (
        nickname,
        user_img
      )`);

  if (error) {
    throw new Error("데이터를 가져오는 중 에러가 발생하였습니다. 여기");
  }

  return data;
}

// user_cards : 현재 유저의 데이터 + custom_users의 일부 데이터 get
export async function getUsercardDataForCurrentUser(uid: string) {
  const { data, error } = await supabase
    .from("user_cards")
    .select(
      `*, custom_users (
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

// user_cards : 해당 페이지 유저의 데이터 + custom_users의 일부 데이터 get
export async function getUsercardDataForPageUser(cardId: string) {
  const { data, error } = await supabase
    .from("user_cards")
    .select(
      `*, custom_users (
        nickname,
        user_img
      )`
    )
    .eq("card_id", cardId);

  if (error) {
    throw new Error("데이터를 가져오는 중 에러가 발생하였습니다.");
  }

  return data;
}
