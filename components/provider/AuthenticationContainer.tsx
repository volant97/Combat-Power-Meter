"use client";

import { supabase } from "@/lib/supabase-client";
import { userState } from "@/recoil/user";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import LayoutContainer from "../layout/LayoutContainer";

interface Props {
  children: React.ReactNode;
}

export default function AuthenticationContainer({ children }: Props) {
  const [isAuthInitialized, setIsAuthInitialized] = useState(true);
  const setUser = useSetRecoilState(userState);

  // const checkAuthInitialized = () => {
  //   const { data: authListener } = supabase.auth.onAuthStateChange(
  //     (event, session) => {
  //       if (session) {
  //         // supabase
  //         //   .from("custom_users")
  //         //   .select()
  //         //   .eq("uid", session.user.id)
  //         //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //         //   .returns<any>()
  //         //   .single()
  //         //   .then((response) => {
  //         //     const profile = response.data; //custom_users
  //         //     setUser({ id: session.user.id });
  //         //   });
  //         console.log(session.user.user_metadata.nickname, !!session);
  //         setUser({ id: session.user.id });
  //       } else {
  //         console.log("로그아웃", !!session);
  //         setUser(null);
  //       }
  //       setIsAuthInitialized(true);
  //     }
  //   );
  // };

  // useEffect(() => {
  //   checkAuthInitialized();
  // }, []);
  // [isAuthInitialized, setUser]

  useEffect(() => {
    setUser("123456");
  }, []);

  return (
    <div>
      {isAuthInitialized ? (
        <LayoutContainer>{children}</LayoutContainer>
      ) : (
        <div>로딩중</div>
      )}
    </div>
  );
}
