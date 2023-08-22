import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
  border: "12px dashed", // change the appearance of the border
  borderRadius: "10px", // remove the border radius
  fontWeight: "700", // change the font weight
  color: "red",
});

const xl = defineStyle({
  fontSize: "xl",
  px: "6",
  h: "32",
  borderRadius: "md",
});

const withShadow = defineStyle({
  bg: "red.400",
  boxShadow: "0 0 2px 2px #efdfde",
});
export const buttonTheme = defineStyleConfig({
  variants: {
    outline,
    withShadow,
  },
  sizes: { xl },
  defaultProps: {
    colorScheme: "teal",
  },
});
