"use client";

import { supabase } from "@/lib/common/supabase-client";
import { isLoginState, userState } from "@/recoil/user";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import LayoutContainer from "../layout/LayoutContainer";

interface Props {
  children: React.ReactNode;
}

export default function AuthenticationContainerCopy({ children }: Props) {
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const setUser = useSetRecoilState(userState);

  // 리로드
  // const windowReload = () => {
  //   const navigationEntry = performance.getEntriesByType(
  //     "navigation"
  //   )[0] as PerformanceNavigationTiming;

  //   if (navigationEntry?.type === "reload") {
  //     return;
  //   }

  //   window.location.reload();
  // };

  const checkAuthInitialized = async () => {
    // getSession
    // try {
    //   // 초기 세션 가져오기
    //   const {
    //     data: { session },
    //     error: sessionError,
    //   } = await supabase.auth.getSession();

    //   // 세션 에러 처리
    //   if (sessionError) {
    //     console.error("세션 에러 발생", sessionError.message);
    //     setUser(null);
    //     setIsLogin(false);
    //     return;
    //   }

    //   // 세션이 존재하는 경우
    //   if (session) {
    //     // 사용자 데이터 가져오기
    //     const { data, error: userDataError } = await supabase
    //       .from("custom_users")
    //       .select("*")
    //       .eq("uid", session.user.id)
    //       .single();

    //     // 사용자 데이터 가져오기 실패 에러 처리
    //     if (userDataError) {
    //       console.error("사용자 데이터 에러 발생", userDataError.message);
    //       setUser(null);
    //       setIsLogin(false);
    //       return;
    //     } else {
    //       // 사용자 데이터 가져오기 설공 및 상태 설정
    //       setUser({ id: session.user.id, profile: data });
    //       setIsLogin(true);
    //     }
    //   } else {
    //     // 세션이 없을 경우
    //     setUser(null);
    //     setIsLogin(false);
    //   }
    // } catch (unexpectedError) {
    //   // 세션 초기화 에러 처리
    //   console.error("인증 초기화 중 에러 발생", unexpectedError);
    //   alert("인증 초기화 중 에러 발생");
    //   setUser(null);
    //   setIsLogin(false);
    // } finally {
    //   // 인증 초기화 완료
    //   setIsAuthInitialized(true);
    // }

    // getUser
    // try {
    //   const isUser = await getUser();
    //   if (isUser) {
    //     supabase
    //       .from("custom_users")
    //       .select("*")
    //       .eq("uid", isUser.id)
    //       .single()
    //       .then((response) => {
    //         const profile = response.data;
    //         setUser({ id: isUser.id, profile });
    //         setIsLogin(true);
    //       });
    //   } else {
    //     setUser(null);
    //     setIsLogin(false);
    //   }
    // } catch (error) {
    //   console.error("인증 초기화 중 에러 발생", error);
    //   alert("인증 초기화 중 에러 발생");
    //   setUser(null);
    //   setIsLogin(false);
    // } finally {
    //   setIsAuthInitialized(true);
    //   console.log("진행됨");
    // }

    // onAuthStateChange
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        supabase
          .from("custom_users")
          .select()
          .eq("uid", session.user.id)
          .single()
          .then((response) => {
            const profile = response.data;
            setUser({ id: session.user.id, profile });
            setIsLogin(true);
          });
      } else {
        setUser(null);
        setIsLogin(false);
      }
      setIsAuthInitialized(true);
      console.log("진행됨");
    });
  };

  useEffect(() => {
    checkAuthInitialized();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

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
