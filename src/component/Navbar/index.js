import React, { useState, useEffect } from "react";
import { FaMoon, FaBell } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll/modules";

import { getCurrentUser } from "../../services/authService";

import {
  Nav,
  NavLogo,
  ServiceLink,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  Burger,
  NavBtnLink,
} from "./NavbarElements";
const Navbar = ({ toggle, isOpen, liveUser }) => {
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <MobileIcon onClick={toggle}>
        {isOpen ? <Burger className="open" /> : <Burger />}
      </MobileIcon>
      {!getCurrentUser() && (
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <FaMoon />
            </NavLogo>

            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Sign Up
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn onClick={toggle}>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      )}
      {getCurrentUser() && (
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <FaMoon />
            </NavLogo>

            <NavMenu>
              <NavItem>
                <NavLinks
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Discover
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>

              <NavItem>
                <ServiceLink to="/profile">
                  <FaBell></FaBell>
                  {liveUser.isAccept ? (
                    <span className="badge badge-pill badge-danger">1</span>
                  ) : null}
                </ServiceLink>
              </NavItem>
              {liveUser.isAdmin && (
                <NavItem>
                  <ServiceLink to="/users">Manage Users</ServiceLink>
                </NavItem>
              )}
            </NavMenu>
            <NavBtn onClick={toggle}>
              <NavBtnLink to="/signout">Sign out</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      )}
    </>
  );
};

export default Navbar;
