import React, { Suspense } from "react";
import { unstable_createResource as createResource } from "react-cache";

import { CatsSkeleton } from "./shared/CatsSkeleton";
import { CatsList } from "./shared/CatsList";

import { fetchCats } from "../service/catsApi";

export const SuspenseFetchData = () => {
  return (
    <Suspense fallback={<CatsSkeleton />}>
      <Pets />
    </Suspense>
  );
};

const petsResource = createResource(fetchCats);

const Pets = () => {
  const pets = petsResource.read();
  return <CatsList cats={pets} />;
};
