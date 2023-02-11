/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavLink,
  NavItem,
  Nav,
  NavbarToggler,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
import { Trans } from 'react-i18next';




function WhiteNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="bg-white fixed-top" expand="lg">
        <Container className="navbar-translate">

          <NavbarBrand href="/" id="navbar-brand">
            <img
              src="./wintech_high_solution.png"
              alt="Wintech" />
          </NavbarBrand>
          <NavbarToggler aria-controls="responsive-navbar-nav" />


          <Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" id="ceva" navbar>

              <NavItem >
                <NavLink href="#headers"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("headers").scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    });
                  }}>
                  <Trans i18nKey="aboutus">
                    關於我們
                  </Trans>


                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects").scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    });
                  }}>
                  <Trans i18nKey="Projects">
                    服務項目
                  </Trans>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#performances"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("performances").scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    });
                  }}>
                  <Trans i18nKey="Performances">
                    實績
                  </Trans>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact-us"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact-us").scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    });
                  }}>
                  <Trans i18nKey="contactustitle">
                    聯絡我們
                  </Trans>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default WhiteNavbar;
