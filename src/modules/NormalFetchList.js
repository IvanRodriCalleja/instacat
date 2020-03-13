import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { SkeletonCard } from "./shared/catsSkeleton/SkeletonCard";
import { CatsError } from "./shared/CatsError";
import { CatCard } from "./shared/catsList/CatCard";

import { fetchCat } from "../service/catsApi";

const CatsListContainer = styled.section`
  margin-top: 56px;
`;

export const NormalFetchList = () => (
  <CatsListContainer>
    <NormalFetchListCat id={0} />
    <NormalFetchListCat id={1} />
    <NormalFetchListCat id={2} />
    <NormalFetchListCat id={3} />
  </CatsListContainer>
);

const NormalFetchListCat = ({ id }) => {
  const [{ data, error, isLoading }, dispatch] = useState({
    data: null,
    error: null,
    isLoading: true
  });

  useEffect(() => {
    fetchCat({ id })
      .then(data => dispatch({ data, error: null, isLoading: false }))
      .catch(error => dispatch({ data: null, error, isLoading: false }));
  }, []);

  if (isLoading) return <SkeletonCard />;
  if (error) return <CatsError error={error} />;
  return <CatCard cat={data} />;
};
