import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  z-index: 999;
  transition: 0.59s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SideBarMenuList = styled.h6`
  font-size: 2rem;
  list-style: none;
  padding: 2rem 0;
  cursor: pointer;
  color: #fff;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  transition: 1s ease-in-out;

  &:hover {
    color: #ff652f;
  }

  &.active {
    color: #ff652f;
  }
`;

export const SidebarLinkR = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s ease-in-out;
  transform: translateX(100vw);
  transition-delay: 0.45s;

  &.open {
    transform: translateX(0);
  }
`;
export const SidebarLink = styled(LinkS)`
  transition: 1s ease-in-out;
  transform: translateX(100vw);
  display: flex;
  align-items: center;
  justify-content: center;

  &.open {
    transform: translateX(0);
  }

  &:nth-child(1) {
    transition-delay: 0.25s;
  }

  &:nth-child(2) {
    transition-delay: 0.35s;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: none;
  padding: 16px 64px;
  font-size: 16px;
  outline: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 1s ease-in-out;
  color: #fff;

  &:hover {
    text-decoration: none;
    background: #fff;
  }
`;
