import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/global";
import AppRouter from "./routes";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <GlobalStyle />
      <AppRouter />
    </ChakraProvider>
  </React.StrictMode>
);
