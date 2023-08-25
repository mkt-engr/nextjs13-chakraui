"use client";
import { Link as ChakraLink } from "@chakra-ui/next-js";
import { Box, Button, Flex } from "@chakra-ui/react";

type Route = { href: string; label: string };

export default function Home() {
  const routes: Route[] = [
    { href: "/read", label: "read" },
    { href: "/signin", label: "ログイン" },
    { href: "/playground", label: "Playground" },
  ];
  return (
    <Box as={`main`} m={12}>
      <Flex
        flexDirection={`column`}
        alignItems="center"
        justifyContent="center"
      >
        {routes.map((route, index, originArray) => {
          const { href, label } = route;
          const isLastElement = index === originArray.length - 1;
          return (
            <ChakraLink
              key={href}
              href={href}
              color="gray.100"
              _hover={{ color: "gray.300" }}
              px={20}
              py={10}
              rounded={6}
              background={`teal`}
              mb={isLastElement ? 0 : 10}
              minW={300}
              textAlign={`center`}
            >
              {label}
            </ChakraLink>
          );
        })}
      </Flex>
    </Box>
  );
}
