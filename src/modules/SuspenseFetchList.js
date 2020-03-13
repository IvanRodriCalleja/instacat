import React, { Suspense, SuspenseList } from "react";
import { unstable_createResource as createResource } from "react-cache";
import styled from "styled-components";

import { SkeletonCard } from "./shared/catsSkeleton/SkeletonCard";
import { CatCard } from "./shared/catsList/CatCard";

import { fetchCat } from "../service/catsApi";

const SuspenseFetchListContainer = styled.div`
  margin-top: 56px;
`;

export const SuspenseFetchList = () => {
  return (
    <SuspenseFetchListContainer>
      <SuspenseList>
        <Suspense fallback={<SkeletonCard />}>
          <Cat id={0} />
        </Suspense>
        <Suspense fallback={<SkeletonCard />}>
          <Cat id={1} />
        </Suspense>
        <Suspense fallback={<SkeletonCard />}>
          <Cat id={2} />
        </Suspense>
        <Suspense fallback={<SkeletonCard />}>
          <Cat id={3} />
        </Suspense>
      </SuspenseList>
    </SuspenseFetchListContainer>
  );
};

const catResource = createResource(fetchCat, ({ id }) => id);

const Cat = ({ id }) => {
  const cat = catResource.read({ id });
  return <CatCard cat={cat} />;
};
