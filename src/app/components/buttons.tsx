"use client";
import { Button } from "@chakra-ui/react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "@/lib/auth/config";

// ログインボタン
export const LoginButton = () => {
  const { instance, accounts } = useMsal();
  return (
    <Button onClick={() => instance.loginRedirect(loginRequest)}>
      Azure AD B2C ログイン
    </Button>
  );
};

// ログアウトボタン
export const LogoutButton = () => {
  const { instance, accounts } = useMsal();
  return (
    <Button onClick={() => instance.logoutRedirect()}>
      Azure AD B2C ログアウト
    </Button>
  );
};
