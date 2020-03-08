import React from "react";
import styled from "styled-components";

const CatContainer = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 3px;
  margin-bottom: 56px;
`;

const CatHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
`;

const CatNameContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
`;

const CatName = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

const CatProfileImageBorder = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background: #d6249f;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
`;

const CatProfileImage = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 100%;
  border: solid 2px white;
`;

const CatBody = styled.div`
  min-height: 300px;
`;

const CatImage = styled.img`
  width: 100%;
  display: flex;
`;

export const CatCard = ({ cat }) => {
  return (
    <CatContainer>
      <CatHeader>
        <CatProfileImageBorder>
          <CatProfileImage src={cat.profileImage} alt={cat.name} />
        </CatProfileImageBorder>
        <CatNameContainer>
          <CatName>{cat.name}</CatName>
        </CatNameContainer>
      </CatHeader>
      <CatBody>
        <CatImage src={cat.photo} />
      </CatBody>
    </CatContainer>
  );
};
