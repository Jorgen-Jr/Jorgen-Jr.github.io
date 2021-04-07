import React from "react";
import { wrapPageElement as wrap } from "./src/woot-wrapper";

import theme from "./src/theme";

import { ColorModeScript } from "@chakra-ui/react";

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <ColorModeScript
      initialColorMode={theme.config.initialColorMode}
      key="chakra-ui-no-flash"
    />,
  ]);
};

export const wrapPageElement = wrap;
