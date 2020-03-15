import React, { Suspense } from "react";
import { unstable_createResource as createResource } from "../packages/react-cache";

import { CatsSkeleton } from "./shared/CatsSkeleton";
import { CatsList } from "./shared/CatsList";
import { ErrorBoundary } from "./shared/ErrorBoundary";

import { fetchCats } from "../service/catsApi";

export const SuspenseFetchData = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<CatsSkeleton />}>
        <Pets />
      </Suspense>
    </ErrorBoundary>
  );
};

const petsResource = createResource(fetchCats);

const Pets = () => {
  const pets = petsResource.read();
  return <CatsList cats={pets} />;
};
