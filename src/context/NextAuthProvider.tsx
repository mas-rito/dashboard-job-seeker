"use client";
import { SessionProvider } from "next-auth/react";
import * as React from "react";
type Props = {
  children: React.ReactNode;
};
export default function NextAuthProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
