import React, { Suspense, SuspenseList, useState } from "react";
import styled from "styled-components";
import { unstable_createResource as createResource } from "../packages/react-cache";

import { SkeletonCard } from "./shared/catsSkeleton/SkeletonCard";
import { CatCard } from "./shared/catsList/CatCard";
import { RadioGroup } from "./shared/RadioGroup";
import {
  SuspenseListConfigProvider,
  useSuspenseListConfig
} from "./suspenseFetchList/SuspenseListConfigContext";

import { fetchCat } from "../service/catsApi";

const SuspenseFetchListContainer = styled.div`
  margin-top: 56px;
`;

const revealOrderOptions = ["forwards", "backwards", "together"];
const tailOptions = ["collapsed", "hidden"];

export const SuspenseFetchList = () => {
  const [revealOrder, setRevealOrder] = useState("forwards");
  const [tail, setTail] = useState("collapsed");

  return (
    <>
      <RadioGroup
        selectedValue={revealOrder}
        onChange={setRevealOrder}
        options={revealOrderOptions}
        name="revealOrder"
      />
      <RadioGroup
        selectedValue={tail}
        onChange={setTail}
        options={tailOptions}
        name="tail"
      />
      <SuspenseListConfigProvider revealOrder={revealOrder} tail={tail}>
        <SuspenseFetchListContainer>
          <SuspenseList revealOrder={revealOrder} tail={tail}>
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
      </SuspenseListConfigProvider>
    </>
  );
};

const catResource = createResource(
  fetchCat,
  ({ id, revealOrder, tail }) => `${id}${revealOrder}${tail}`
);

const Cat = ({ id }) => {
  const { revealOrder, tail } = useSuspenseListConfig();
  const cat = catResource.read({ id, revealOrder, tail });
  return <CatCard cat={cat} />;
};
