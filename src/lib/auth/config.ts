// src/lib/auth/config.ts
import type { Configuration } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: "1fdcc933-48ce-4f0f-b773-e74c7f6c3b7e",
    // authority:
    //   "https://s4j9yamatogolf.b2clogin.com/s4j9yamatogolf.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_azure-ad-b2c-yamato-poc-user&client_id=1fdcc933-48ce-4f0f-b773-e74c7f6c3b7e&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fjwt.ms%2F&scope=openid&response_type=code&prompt=login",
    // authority: "https://login.microsoftonline.com/common",
    // authority: "",
    // knownAuthorities: ["s4j9yamatogolf.b2clogin.com"],
    redirectUri: "/",
    // redirectUri: "https://jwt.ms/",
    // postLogoutRedirectUri: "/", //ログアウトした時の遷移先（何も書かなければログアウトした画面に戻る）
    navigateToLoginRequestUrl: true,
  },
  cache: {
    cacheLocation: "localStorage",
  },
};

export const loginRequest = {
  scopes: ["openid", "offline_access"],
};
