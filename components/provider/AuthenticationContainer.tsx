"use client";

import { supabase } from "@/lib/common/supabase-client";
import { isLoginState, userState } from "@/recoil/user";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import LayoutContainer from "../layout/LayoutContainer";

interface Props {
  children: React.ReactNode;
}

export default function AuthenticationContainer({ children }: Props) {
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const setUser = useSetRecoilState(userState);

  const checkAuthInitialized = async () => {
    // testcode : 빌드 이후 다시 확인 (측정중에서 멈추는 현상이 불규칙하게 발생)
    supabase.auth.onAuthStateChange((event, session) => {
      try {
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
      } catch (error) {
        alert(error);
        setUser(null);
        setIsLogin(false);
      } finally {
        setIsAuthInitialized(true);
      }
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
