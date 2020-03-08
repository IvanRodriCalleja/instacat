import React from "react";
import styled from "styled-components";

const CatsErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 56px;
`;

const ErrorImg = styled.img`
  width: 100%;
`;

const ErrorMessage = styled.div`
  margin-top: 16px;
  text-align: center;
  font-weight: bold;
`;

export const CatsError = ({ error }) => {
  const { status, message } = error;

  return (
    <CatsErrorContainer>
      <ErrorImg src="./serverError.jpeg" alt="request error" />
      <ErrorMessage>
        <div>{status}</div>
        <div>{message}</div>
      </ErrorMessage>
    </CatsErrorContainer>
  );
};
