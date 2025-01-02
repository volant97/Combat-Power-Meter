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

#### 0.1.20

- supabase
  - auth
    - 로그인 로직 작성
    - auth.ts 에러 출력 수정
- signup page
  - login page → signup page
  - 버튼 css 수정

#### 0.1.21

- login page
  - 로그인 로직 적용
  - 모달 적용
  - 회원가입 버튼 제작
  - input 입력 후 Tab할 때 특정 버튼 선택되지 않도록 설정
    - tabIndex={-1}

#### 0.1.22

- login page
  - 로그인 시 home page로 이동
- signup page
  - 회원가입 시 home page로 이동

#### 0.1.23

- 모달 컴포넌트화
  - 중복 요소 제거
  - 확인 버튼에 autoFocus 설정

### 2025.01.01

#### 0.1.24

- header
  - 로그인 시 내 정보 아이콘으로 변경
  - 로그인 상태 확인을 서버측에서 실행 방법 모색
- supabase/auth-helpers-nextjs 설치
  - 서버측에서 로그인 여부 확인
  - cookies 활용
  - 해당 로직 삭제
  - supabase/auth-helpers-nextjs 제거
- ts파일 오류 해결
- 로그아웃 버튼 테스트

#### 0.1.25

- recoil 설치
  - 로그인 처리를 위해서
- provider 설정
  - layout 재설정
- recoil 오류
  - next, react, react-dom 버전 수정도 진행
- 오류 해결
  - 하루종일 걸렸음
  - 결론 : Next15에서는 recoil이 호환되지 않는다.
  - 해결 : Next14로 다운그레이드하니까 해결됨.
  - 추가 해결 : Next15에서는 자동으로 네트워크 연결 주소가 나와서 모바일로도 실시간 확인이 가능했음. 검색하고 테스트해 본 결과, 14버전도 네트워크로 dev mode 진입이 가능함.
  - next.config.ts → .js 변경 (더 호환이 잘 됨)
  - Next14와 React, React-dom 18버전 맞춤

#### 0.1.26

- 테스트 코드 제거
- recoil 로그인 정보 테스트
- 최상단 태그
  - `<></>` : 단순한 그룹화
  - `<Fragment></Fragment>` : 속성 부여 가능

#### 0.1.27

- recoil
  - 프로필 정보도 저장
- MyProfile과 Card 분리해서 접속하도록
  - LoginOrMyCard → LoginOrMyProfile 변경
- my page
  - 로그인 정보 출력

#### 0.1.28

- home page
  - 선택된 정렬 버튼 활성화 CSS 수정

#### 0.1.29

- home page
  - card
    - 총 전투력, 1군 명칭 수정
      - total_cp, group1_cp

#### 0.1.30

- 상수 데이터 파일 생성
- 버전 표시
