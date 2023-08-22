"use client";
import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const Page = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>ログイン</Heading>
        <Input
          placeholder="makito.mori@sun-asterisk.com"
          variant="filled"
          mb={3}
          type="email"
        />
        <Input placeholder="*******" variant="filled" mb={6} type="password" />
        <Button mb={6}>ログイン</Button>
        <Button onClick={toggleColorMode} colorScheme="gray">
          Toggle Color Mode
        </Button>
      </Flex>
    </Flex>
  );
};

export default Page;
