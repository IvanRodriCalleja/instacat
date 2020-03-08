import React from "react";
import styled from "styled-components";

import { CatCard } from "./catsList/CatCard";

const CatsListContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 56px;
`;

const List = styled.section`
  width: 100%;
`;

export const CatsList = ({ cats }) => (
  <CatsListContainer>
    <List>
      {cats.map(cat => (
        <CatCard key={cat.name} cat={cat} />
      ))}
    </List>
  </CatsListContainer>
);
