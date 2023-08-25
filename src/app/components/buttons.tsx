"use client";
import { Button } from "@chakra-ui/react";
import { signIn, signOut } from "next-auth/react";

// ログインボタン
export const LoginButton = () => {
  return (
    <Button style={{ marginRight: 10 }} onClick={() => signIn()}>
      Sign in
    </Button>
  );
};

// ログアウトボタン
export const LogoutButton = () => {
  return (
    <Button style={{ marginRight: 10 }} onClick={() => signOut()}>
      Sign Out
    </Button>
  );
};
