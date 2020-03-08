import React from "react";
import styled from "styled-components";

const SkeletonContainer = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 3px;
  margin-bottom: 56px;
`;

const SkeletonHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
`;

const SkeletonNameContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
  height: 32px;
`;

const SkeletonName = styled.div`
  width: 80px;
  height: 12px;
  ${({ theme }) => theme.skeleton};
`;

const SkeletonProfile = styled.div`
  width: 120px;
  height: 12px;
  ${({ theme }) => theme.skeleton};
`;

const SkeletonProfileImage = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 100%;
  ${({ theme }) => theme.skeleton};
`;

const SkeletonBody = styled.div`
  height: 300px;
  ${({ theme }) => theme.skeleton};
`;

export const SkeletonCard = () => {
  return (
    <SkeletonContainer>
      <SkeletonHeader>
        <SkeletonProfileImage />
        <SkeletonNameContainer>
          <SkeletonProfile />
          <SkeletonName />
        </SkeletonNameContainer>
      </SkeletonHeader>
      <SkeletonBody />
    </SkeletonContainer>
  );
};
