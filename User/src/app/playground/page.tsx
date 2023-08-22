"use client";
import { Button, VStack } from "@chakra-ui/react";
import React from "react";

const page = () => {
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
    </VStack>
  );
};

export default page;
