import React from "react";
import styled from "styled-components";

const AppMain = styled.main`
  margin-top: 56px;
  overflow: auto;
  width: 100%;
  margin-left: ${({ theme }) => theme.menuWidth};
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  padding: 0 16px;
  max-width: ${({ theme }) => theme.maxContentWidth};
`;

export const Main = ({ children }) => {
  return (
    <AppMain>
      <Content>{children}</Content>
    </AppMain>
  );
};
