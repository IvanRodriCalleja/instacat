import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  margin-top: 56px;
  display: flex;
`;

const InputContainer = styled.div`
  flex: 1;
  position: relative;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

const SearchLabel = styled.label`
  user-select: none;
  border: solid 1px ${({ theme }) => theme.colors.tertiary};
  padding: 8px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  width: 100%;
  display: block;

  &:hover {
    background: #f1f0f0;
  }
`;

const SearchInput = styled.input`
  display: none;

  &:checked + label {
    border: solid 1px black;
  }
`;

export const RadioGroup = ({ selectedValue, onChange, options, name }) => {
  return (
    <SearchContainer>
      {options.map(option => (
        <InputContainer key={option}>
          <SearchInput
            id={option}
            name={name}
            type="radio"
            value={option}
            checked={option === selectedValue}
            onChange={event => onChange(event.target.value)}
          />
          <SearchLabel htmlFor={option}>{option}</SearchLabel>
        </InputContainer>
      ))}
    </SearchContainer>
  );
};
