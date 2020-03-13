import React from "react";
import styled from "styled-components";

import { SkeletonCard } from "./catsSkeleton/SkeletonCard";

const SkeletonListContainer = styled.section`
  margin-top: 56px;
`;

const SkeletonList = styled.section`
  width: 100%;
`;

export const CatsSkeleton = () => (
  <SkeletonListContainer>
    <SkeletonList>
      {[...Array(4)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </SkeletonList>
  </SkeletonListContainer>
);
