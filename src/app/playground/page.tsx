"use client";
import { loginRequest } from "@/lib/auth/config";
import { useMsal } from "@azure/msal-react";
import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
const Page = () => {
  const { instance, accounts } = useMsal();

  return (
    <VStack>
      <Button variant={`outline`}>デフォルトのボタン</Button>
      <Button>デフォルトのボタン</Button>
      <Button size={`xs`}>xsのボタン</Button>
      <Button size={`sm`}>smのボタン</Button>
      <Button size={`md`}>mdのボタン</Button>
      <Button size={`lg`}>ldのボタン</Button>
      <Button colorScheme="green">green デフォルトのボタン</Button>
      <Button variant={`withShadow`}>
        variant={`withShadow`}デフォルトのボタン
      </Button>
      <Button colorScheme="teal">colorScheme=tealボタンのカスタマイズ</Button>
      <Button colorScheme="blue">colorScheme=blueボタンのカスタマイズ</Button>
      <Button colorScheme="red">colorScheme=redボタンのカスタマイズ</Button>
      {/* <Button onClick={() => instance.loginRedirect(loginRequest)}>
        Azure AD B2C ログイン
      </Button> */}
      {/* <Button onClick={() => instance.logout()}>Azure AD B2C ログアウト</Button> */}
      <UnauthenticatedTemplate>
        ログインしてない時に出る
        <Button onClick={() => instance.loginRedirect(loginRequest)}>
          Azure AD B2C ログイン
        </Button>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        ログインしとる時に出る
        <p>{JSON.stringify(accounts)}</p>
        <Button onClick={() => instance.logoutRedirect()}>
          Azure AD B2C ログアウト
        </Button>
      </AuthenticatedTemplate>
    </VStack>
  );
};

export default Page;
