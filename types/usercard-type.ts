// user_cards의 모든 데이터 + custom_users의 일부 데이터를 get 했을 때 Type
export interface GetUserCardDataType {
  card_id: string;
  user_id: string;
  level: number;
  total_cp: number;
  group1_cp: number;
  updated_at: string;
  custom_users: {
    nickname: string;
    user_img: string;
  };
}
