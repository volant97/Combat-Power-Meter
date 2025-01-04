"use client";

import { supabase } from "@/lib/supabase-client";
import { userState } from "@/recoil/user";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import LayoutContainer from "../layout/LayoutContainer";
import { UserStateType } from "@/types/user-type";

interface Props {
  children: React.ReactNode;
}

export default function AuthenticationContainer({ children }: Props) {
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);
  const setUser = useSetRecoilState(userState);

  const checkAuthInitialized = () => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        supabase
          .from("custom_users")
          .select()
          .eq("uid", session.user.id)
          .returns<UserStateType>()
          .single()
          .then((response) => {
            const profile = response.data;
            // 로그인 시
            setUser({ id: session.user.id, profile });
          });
      } else {
        // 로그아웃 시
        setUser(null);
      }
    });
  };

  useEffect(() => {
    checkAuthInitialized();
    setIsAuthInitialized(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isAuthInitialized ? (
        <LayoutContainer>{children}</LayoutContainer>
      ) : (
        <div className="flex justify-center items-center h-[100dvh] text-3xl text-pointc">
          측정중
        </div>
      )}
    </>
  );
}
