import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-1ndex: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#222" : "transparent")};
  margin-top: -80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  line-height: 80px;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 50%;
  color: #fff;
  animation: rotate 10s linear infinite;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
      box-shadow: 0 0 100px #00ccff;
    }
  }
  transition: all 1s ease-in-out;
  &:hover {
    color: orangered;

    box-shadow: 0 0 10px ${({ primary }) => (primary ? "#ff22bb" : "#00ccff")},
      0 0 30px ${({ primary }) => (primary ? "#ff22bb" : "#fff")},
      0 0 60px ${({ primary }) => (primary ? "#ff22bb" : "#fff")},
      0 0 100px ${({ primary }) => (primary ? "#ff22bb" : "#fff")};
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    transform: translate(-100%, 60%);
    position: fixed;
    z-index: 1000;
    right: 0rem;
    top: 0rem;
    height: 50px;
    width: 50px;

    cursor: pointer;
  }
`;
export const Burger = styled.div`
  position: absolute;
  right: 0;
  top: 0.5rem;
  width: 34px;
  height: 6px;
  border-radius: 10px;
  background: #fff;

  transition: all 0.5s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    width: 34px;
    height: 6px;
    border-radius: 10px;
    background: #fff;
  }

  &::after {
    content: "";
    position: absolute;

    top: 10px;
    width: 25px;

    height: 6px;
    border-radius: 10px;
    background: #fff;
  }

  &.open {
    transform: rotate(-720deg);
    background: transparent;

    &::before {
      transform: rotate(45deg) translate(8px, 8px);
    }

    &::after {
      width: 34px;
      transform: rotate(-45deg) translate(6px, -7px);
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-item: center;
  list-style: none;
  margin-right: -22px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
  color: #fff;
  transition: all 1s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px ${({ primary }) => (primary ? "#ff22bb" : "#00ccff")},
      0 0 30px ${({ primary }) => (primary ? "#ff22bb" : "#00ccff")},
      0 0 60px ${({ primary }) => (primary ? "#ff22bb" : "#00ccff")},
      0 0 100px ${({ primary }) => (primary ? "#ff22bb" : "#00ccff")};
    border-radius: 15px;
  }
`;
export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-weight: 400;
  cursor: pointer;
  font-size: 1.4rem;
  text-decoration: none;
  text-transform: uppercase;
  height: 100%;
  transition: 0.5s ease-in-out;

  &.active {
    border-bottom: 3px solid #fff;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background: #fff;
    text-decoration: none;
    color: #010606;
  }
`;
export const ServiceLink = styled(LinkR)`
  font-weight: bold;
  padding: 10px 22px;
  line-height: 80px;
  height: 80px;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  transition: all 1s ease-in-out;

  &:hover {
    color: yellow;
    text-decoration: none;
  }
`;
