"use client";

import { RecoilRoot } from "recoil";
import AuthenticationContainer from "./AuthenticationContainer";

interface Props {
  children: React.ReactNode;
}

export default function Provider({ children }: Props) {
  return (
    <RecoilRoot>
      <AuthenticationContainer>{children}</AuthenticationContainer>
    </RecoilRoot>
  );
}
