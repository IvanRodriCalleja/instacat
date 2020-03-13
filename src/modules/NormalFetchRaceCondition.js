import React, { useState, useEffect } from "react";

import { CatsSkeleton } from "./shared/CatsSkeleton";
import { CatsError } from "./shared/CatsError";
import { CatsList } from "./shared/CatsList";
import { RadioGroup } from "./shared/RadioGroup";

import { searchCats } from "../service/catsApi";

const options = [
  "sukiicat",
  "albertbabycat",
  "smoothiethecat",
  "realgrumpycat"
];

export const NormalFetchRaceCondition = () => {
  const [search, setSearch] = useState("");

  const [{ data, error, isLoading }, dispatch] = useState({
    data: null,
    error: null,
    isLoading: true
  });

  useEffect(() => {
    dispatch(state => ({ ...state, isLoading: true }));
    searchCats(search)
      .then(data => dispatch({ data, error: null, isLoading: false }))
      .catch(error => dispatch({ data: null, error, isLoading: false }));
  }, [search]);
  console.log({ data, error, isLoading });

  return (
    <>
      <RadioGroup selectedValue={search} onChange={setSearch} options={options} name="search" />
      {isLoading && <CatsSkeleton />}
      {error && <CatsError error={error} />}
      {!isLoading && !error && <CatsList cats={data} />}
    </>
  );
};
