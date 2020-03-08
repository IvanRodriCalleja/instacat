import React, { Suspense, useState } from "react";
import { unstable_createResource as createResource } from "react-cache";

import { CatsSkeleton } from "./shared/CatsSkeleton";
import { CatsList } from "./shared/CatsList";
import { ErrorBoundary } from "./shared/ErrorBoundary";
import { Search } from "./shared/Search";

import { searchCats } from "../service/catsApi";

export const SuspenseFetchRaceCondition = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Search search={search} onSearch={setSearch} />
      <ErrorBoundary>
        <Suspense fallback={<CatsSkeleton />}>
          <Pets search={search} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

const petsResource = createResource(searchCats);

const Pets = ({ search }) => {
  const pets = petsResource.read(search);
  return <CatsList cats={pets} />;
};
