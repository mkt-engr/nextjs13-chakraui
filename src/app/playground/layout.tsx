"use client";

import { Box } from "@chakra-ui/react";

export default function ReadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box m={10}>{children}</Box>;
}
