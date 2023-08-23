import type { ChakraTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./buttonTheme";

export const chakraTheme = extendTheme({
  components: { Button: buttonTheme },
});
