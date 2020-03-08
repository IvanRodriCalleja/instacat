import React, { useState, useEffect } from "react";

import { CatsSkeleton } from "./shared/CatsSkeleton";
import { CatsError } from "./shared/CatsError";
import { CatsList } from "./shared/CatsList";

import { fetchCatsError } from "../service/catsApi";

export const NormalFetchError = () => {
  const [{ data, error, isLoading }, dispatch] = useState({
    data: null,
    error: null,
    isLoading: true
  });

  useEffect(() => {
    fetchCatsError()
      .then(data => dispatch({ data, error: null, isLoading: false }))
      .catch(error => dispatch({ data: null, error, isLoading: false }));
  }, []);

  if (isLoading) return <CatsSkeleton />;
  if (error) return <CatsError error={error} />;
  return <CatsList cats={data} />;
};
