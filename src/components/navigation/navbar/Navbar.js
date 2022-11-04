import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLink,
  MobileIcon,
  NavMenu
} from "./Navbar_elements";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {

  return (
    <div>
      <Nav>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars className="sidebarIcon" />
          </MobileIcon>
          <NavMenu>
            <NavLink to="about" spy={true} smooth={true} offset={0} duration={100}>About</NavLink>
            <NavLink to="projects" spy={true} smooth={true} offset={0} duration={100}>Projects</NavLink>
            <NavLink to="contact" spy={true} smooth={true} offset={0} duration={100}>Contact</NavLink>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
