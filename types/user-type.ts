export interface UserStateProfileType {
  uid: string;
  nickname: string;
  email: string;
  user_img: string | null; // 이미지가 없을 수도 있기 때문에 null을 허용
  created_at: string; // 날짜는 ISO 형식의 문자열로 처리
}
