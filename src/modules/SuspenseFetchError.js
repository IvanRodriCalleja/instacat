import React, { Suspense } from "react";
import { unstable_createResource as createResource } from "../packages/react-cache";

import { CatsSkeleton } from "./shared/CatsSkeleton";
import { CatsList } from "./shared/CatsList";
import { ErrorBoundary } from "./shared/ErrorBoundary";

import { fetchCatsError } from "../service/catsApi";

export const SuspenseFetchError = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<CatsSkeleton />}>
        <Pets />
      </Suspense>
    </ErrorBoundary>
  );
};

const petsResource = createResource(fetchCatsError);

const Pets = () => {
  const pets = petsResource.read();
  return <CatsList cats={pets} />;
};
