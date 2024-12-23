# Combat Power Meter

## Project Version

### 2024.12.11

#### 0.0.1

- Next 설치 및 git 초기 세팅
  - npx create-next-app@latest

#### 0.0.2

- 파일 초기 세팅

  - env
  - gitignore에 env 추가
  - components 폴더 추가
  - lib 폴더 추가
  - types 폴더 추가
  - page 정리
  - layout 정리
    - 기존 폰트 코드 삭제
    - 모바일 크기 설정
    - scrollbar-hide 설정
  - tailwind-scrollbar-hide 설치
    - tailwind.config.js 설정
  - globals css 정리
  - globals.css 폰트 추가
    - 전역 폰트 설정
    - 테마에 폰트 추가
  - tailwind.config.js 설정
    - colors
    - fontFamily

#### 0.1.1

- layout 수정
- page test

#### 0.1.2

- layout
  - header, main, footer 설정중
- not-found page 제작

#### 0.1.3

- layout
  - header, main, footer 크기 설정
  - header, footer에 home Link 적용
- home page
  - 유저 카드 제작
  - 유저 페이지로 Link 적용
- user page

  - params 출력

#### 0.1.4

- layout
  - 리팩토링
- daisyui 설치
  - not-found page 적용 및 테스트트

#### 0.1.5

- home page
  - 카드 그림자 추가
- header, footer
  - 아이콘 설정
  - 그림자 설정

#### 0.1.6

- home page
  - 텍스트 작업
  - 정렬 버튼 추가

#### 0.1.7

- login page
  - input과 useState 연결 중...

#### 0.1.8

- login page
  - 모달 제작 및 테스트 적용
  - 비밀번호 확인 input 추가
  - 입력 테스트 완료

#### 0.1.9

- login page
  - type 부여

#### 0.1.10

- supabase 설치

#### 0.1.11

- supabase 연결중

#### 0.1.12

- supabase 연결
  - testData 연결 확인

#### 0.1.13

- home page
  - 정렬 버튼 css 수정
    - 선택됐을 때 테두리 색상 focus

#### 0.1.14

- login page
  - 모바일 버전 css 수정
    - 보기, 숨기기 버튼

#### 0.1.15

- supabase
  - 데이터 구조 설정
  - auth 트리거 설정
    - 테스트 성공

#### 0.1.16

- supabase
  - getUser 함수 테스트
  - ts파일 함수 선언형(function)으로 통일

#### 0.1.17

- supabase
  - signup 시 metadata에 nickname 추가

#### 0.1.18

- supabase
  - 트리거 수정
  - 회원가입 정상 작동 확인
  - storage
    - 기본 프로필 이미지 설정
    - 회원가입 시 기본 프로필 이미지 자동 적용

#### 0.1.19

- supabase
  - 트리거 수정
    - 회원가입 시 기본 프로필 Null로 설정
    - base img url을 여기서 넣을 필요 없음
- login page
  - 비밀번호 placeholder 수정

#### +a

- 추가 작업 필요
  - public 정리
  - favicon 설정
  - layout 설정
    - header, main, footer 설정 중...
  - 비밀번호 암호화
  - supabase
    - auth
      - 카카오
      - 구글
    - 테이블 연결
    - 폴리시 설정
    - 트리거 설정한 순서 정리
