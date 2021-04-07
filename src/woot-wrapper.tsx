import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme";

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      {element}
    </ChakraProvider>
  );
};
