"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "../theme/theme";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "@/lib/auth/config";

export function Providers({ children }: { children: React.ReactNode }) {
  const pca = new PublicClientApplication(msalConfig);
  return (
    <MsalProvider instance={pca}>
      <CacheProvider>
        <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
      </CacheProvider>
    </MsalProvider>
  );
}
