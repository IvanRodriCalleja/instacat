import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { App } from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";

import { theme } from "./styles/theme";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
