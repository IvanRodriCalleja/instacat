import React from "react";
import styled from "styled-components";

import { Nav } from "./shared/Nav";
import { Header } from "./shared/Header";
import { Main } from "./shared/Main";
import { Routes } from "./Routes";

const AppContainer = styled.div`
  display: flex;
`;

export const App = () => (
  <AppContainer>
    <Nav />
    <Header />
    <Main>
      <Routes />
    </Main>
  </AppContainer>
);
