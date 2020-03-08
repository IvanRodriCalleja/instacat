import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavContainer = styled.nav`
  position: fixed;
  height: 100vh;
  width: ${({ theme }) => theme.menuWidth};
  border-right: 1px solid ${({ theme }) => theme.colors.tertiary};
  background: ${({ theme }) => theme.colors.white};
`;

const SubNavTitle = styled.h3`
  width: 100%;
  margin: 0;
  padding: 0;
  height: 48px;
  display: flex;
  align-items: center;
  color: #8a8a8a;
  font-size: 16px;
  padding-left: 16px;
  box-sizing: border-box;
`;

const SubNavList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const SubNavItem = styled.li`
  height: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};

  &:first-of-type {
    border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
  }
`;

const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 40px;
  color: black;
  position: relative;
  padding-left: 32px;
  font-size: 12px;
  font-weight: bold;

  &:hover::before,
  &.active::before {
    clip-path: polygon(0 1%, 100% 0, 100% 100%, 0% 100%) !important;
  }

  &:before {
    content: "";
    height: 2px;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(253, 244, 151, 1) 0%,
      rgba(244, 77, 89, 1) 20%,
      rgba(214, 36, 144, 1) 65%,
      rgba(40, 90, 235, 1) 100%
    );
    clip-path: polygon(0 1%, 0 0, 0 100%, 0 100%);
    position: absolute;
    display: block;
    bottom: -1px;
    left: 0;
    will-change: clip-path;
    transition: 0.4s ease;
  }
`;

export const Nav = () => {
  return (
    <NavContainer>
      <SubNavTitle>Normal fetch</SubNavTitle>
      <SubNavList>
        <SubNavItem>
          <Link activeClassName="active" to="/normal-fetch-data">
            Load data
          </Link>
        </SubNavItem>
        <SubNavItem>
          <Link activeClassName="active" to="/normal-fetch-error">
            Load error
          </Link>
        </SubNavItem>
        <SubNavItem>
          <Link activeClassName="active" to="/normal-fetch-race-condition">
            Load data race condition
          </Link>
        </SubNavItem>
      </SubNavList>

      <SubNavTitle>Suspense fetch</SubNavTitle>
      <SubNavList>
        <SubNavItem>
          <Link activeClassName="active" to="/suspense-fetch-data">
            Load data
          </Link>
        </SubNavItem>
        <SubNavItem>
          <Link activeClassName="active" to="/suspense-fetch-error">
            Load error
          </Link>
        </SubNavItem>
        <SubNavItem>
          <Link activeClassName="active" to="/suspense-fetch-race-condition">
            Load data race condition
          </Link>
        </SubNavItem>
      </SubNavList>
    </NavContainer>
  );
};
