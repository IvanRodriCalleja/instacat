import React, { Suspense, useState } from "react";
import { unstable_createResource as createResource } from "../packages/react-cache";

import { CatsSkeleton } from "./shared/CatsSkeleton";
import { CatsList } from "./shared/CatsList";
import { ErrorBoundary } from "./shared/ErrorBoundary";
import { RadioGroup } from "./shared/RadioGroup";

import { searchCats } from "../service/catsApi";

const options = [
  "sukiicat",
  "albertbabycat",
  "smoothiethecat",
  "realgrumpycat"
];

export const SuspenseFetchRaceCondition = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <RadioGroup
        selectedValue={search}
        onChange={setSearch}
        options={options}
        name="search"
      />
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
