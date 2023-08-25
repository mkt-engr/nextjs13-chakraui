"use client";
import { useMsal } from "@azure/msal-react";
import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { LoginButton, LogoutButton } from "../components/buttons";
const Page = () => {
  const { accounts } = useMsal();
  const userName = accounts[0]?.username;
  const name = accounts[0]?.name;
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

      <UnauthenticatedTemplate>
        ログインしてない時に出る
        <LoginButton />
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        ログインしとる時に出る
        <p>User Name:{userName}</p>
        <p>Name:{name}</p>
        <p>{JSON.stringify(accounts)}</p>
        <LogoutButton />
      </AuthenticatedTemplate>
    </VStack>
  );
};

export default Page;
