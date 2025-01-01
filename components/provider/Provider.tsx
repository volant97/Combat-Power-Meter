"use client";

import { RecoilRoot } from "recoil";
import LayoutContainer from "../layout/LayoutContainer";
import AuthenticationContainer from "./AuthenticationContainer";

interface Props {
  children: React.ReactNode;
}

export default function Provider({ children }: Props) {
  return (
    <div>
      <RecoilRoot>
        <AuthenticationContainer>{children}</AuthenticationContainer>
      </RecoilRoot>
    </div>
  );
}
