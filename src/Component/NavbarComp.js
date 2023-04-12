import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./css/Sidebar.css";
function NavbarComp(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="navigasi navbar-dark sticky-top">
      <NavbarBrand href="/" className="mb-3">
        Fadhly Ramadhan
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem className="side mb-3">
            <NavLink href="/">
              <i class="bi bi-house"></i> Dashboard
            </NavLink>
          </NavItem>
          <NavItem className="side mb-3">
            <NavLink href="/projects">
              <i class="bi bi-laptop"></i> Project
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavbarComp;
