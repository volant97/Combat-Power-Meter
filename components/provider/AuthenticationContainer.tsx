"use client";

import { supabase } from "@/lib/common/supabase-client";
import { userState } from "@/recoil/user";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import LayoutContainer from "../layout/LayoutContainer";

interface Props {
  children: React.ReactNode;
}

export default function AuthenticationContainer({ children }: Props) {
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);
  const setUser = useSetRecoilState(userState);

  const checkAuthInitialized = async () => {
    try {
      // 초기 세션 가져오기
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      // 세션 에러 처리
      if (sessionError) {
        console.error("세션 에러 발생", sessionError.message);
        setUser(null);
        return;
      }

      // 세션이 존재하는 경우
      if (session) {
        // 사용자 데이터 가져오기
        const { data, error: userDataError } = await supabase
          .from("custom_users")
          .select("*")
          .eq("uid", session.user.id)
          .single();

        // 사용자 데이터 가져오기 실패 에러 처리
        if (userDataError) {
          console.error("사용자 데이터 에러 발생", userDataError.message);
          setUser(null);
          return;
        } else {
          // 사용자 데이터 가져오기 설공 및 상태 설정
          setUser({ id: session.user.id, profile: data });
        }
      } else {
        // 세션이 없을 경우
        setUser(null);
      }
    } catch (unexpectedError) {
      // 세션 초기화 에러 처리
      console.error("인증 초기화 중 에러 발생", unexpectedError);
      alert("인증 초기화 중 에러 발생");
      setUser(null);
    } finally {
      // 인증 초기화 완료
      setIsAuthInitialized(true);
    }
  };

  useEffect(() => {
    checkAuthInitialized();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LayoutContainer>
      {isAuthInitialized ? (
        children
      ) : (
        <div className="flex justify-center items-center h-full text-3xl text-pointc1">
          측정중
        </div>
      )}
    </LayoutContainer>
  );
}

// const checkAuthInitialized = async () => {
//   try {
//     // 초기 세션 가져오기
//     const {
//       data: { session },
//       error: sessionError,
//     } = await supabase.auth.getSession();

//     // 세션 초기화 에러 처리1
//     if (sessionError) {
//       alert("세션 초기화 에러");
//       setUser(null);
//       return;
//     }

//     // 세션이 존재하는 경우
//     if (session) {
//       try {
//         // 사용자 데이터 가져오기
//         const { data, error } = await supabase
//           .from("custom_users")
//           .select("*")
//           .eq("uid", session.user.id)
//           .single();

//         // 사용자 데이터 가져오기 실패 에러 처리1
//         if (error) {
//           alert("사용자 데이터 에러");
//           setUser(null);
//           return;
//         } else {
//           // 사용자 데이터 가져오기 설공 및 상태 설정
//           setUser({ id: session.user.id, profile: data });
//         }
//         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       } catch (fetchError) {
//         // 사용자 데이터 가져오기 실패 에러 처리2
//         alert("사용자 데이터 가져오는 중 에러 발생");
//         setUser(null);
//       }
//     } else {
//       // 세션이 없을 경우
//       setUser(null);
//     }
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   } catch (unexpectedError) {
//     // 세션 초기화 에러 처리2
//     alert("세션 초기화 중 에러 발생");
//     setUser(null);
//   } finally {
//     // 인증 초기화 완료
//     setIsAuthInitialized(true);
//   }
// };
