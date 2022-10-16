import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "./theme";
import { memo } from "react";
import { Main } from "./mainp";

export const App = memo(() => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Main />
    </ChakraProvider>
  );
});
