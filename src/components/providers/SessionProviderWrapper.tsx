"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

interface SessionProviderWrapperProps {
  children: React.ReactNode;
  // session prop is optional, NextAuth handles it automatically
  // session?: any;
}

// This wrapper component allows using SessionProvider in Server Components layout
export default function SessionProviderWrapper({ children }: SessionProviderWrapperProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
