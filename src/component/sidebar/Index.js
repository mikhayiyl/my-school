import React from "react";
import { getCurrentUser as user } from "../../services/authService";
import { NavItem } from "../Navbar/NavbarElements";
import { FaBell } from "react-icons/fa";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SideBarMenuList,
  SidebarLinkR,
} from "./SidebarElements";
const Sidebar = ({ toggle, isOpen, liveUser }) => {
  return (
    <SidebarContainer onClick={toggle} isOpen={isOpen}>
      {!user() && (
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              className={isOpen && "open"}
              onClick={toggle}
              to="about"
            >
              <SideBarMenuList spy="true" exact="true">
                About
              </SideBarMenuList>
            </SidebarLink>
            <SidebarLink
              className={isOpen && "open"}
              onClick={toggle}
              to="signup"
            >
              <SideBarMenuList> Sign Up</SideBarMenuList>
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      )}
      {user() && (
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              className={isOpen && "open"}
              onClick={toggle}
              to="discover"
            >
              <SideBarMenuList>Discover</SideBarMenuList>
            </SidebarLink>
            <SidebarLink
              className={isOpen && "open"}
              onClick={toggle}
              to="services"
            >
              <SideBarMenuList>Services</SideBarMenuList>
            </SidebarLink>
            <NavItem>
              <SidebarLinkR className={isOpen && "open"} to="/profile">
                <SideBarMenuList>
                  <FaBell></FaBell>
                  {liveUser.isAccept ? (
                    <span className="badge badge-pill badge-danger">1</span>
                  ) : null}
                </SideBarMenuList>
              </SidebarLinkR>
            </NavItem>
            {liveUser.isAdmin && (
              <NavItem>
                <SidebarLinkR className={isOpen && "open"} to="/users">
                  <SideBarMenuList>Manage Users</SideBarMenuList>
                </SidebarLinkR>
              </NavItem>
            )}
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/signout">Sign Out</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
