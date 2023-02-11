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
import { Trans, useTranslation } from 'react-i18next';
import Switch from 'react-bootstrap-switch';

function WhiteNavbar() {
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
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
            <Navbar className="bg-white fixed-top " expand="lg">
                <Container>
                    <div className="navbar-translate">
                        <NavbarBrand href="/" id="navbar-brand">
                            <img
                                src="./wintech_high_solution.png"
                                alt="Wintech" />
                        </NavbarBrand>

                        <button
                            onClick={() => {
                                document.documentElement.classList.toggle("nav-open");
                                setCollapseOpen(!collapseOpen);
                            }}
                            aria-expanded={collapseOpen}
                            className="navbar-toggler"
                        >
                            <span className="navbar-toggler-bar top-bar"></span>
                            <span className="navbar-toggler-bar middle-bar"></span>
                            <span className="navbar-toggler-bar bottom-bar"></span>
                        </button>
                    </div>
                    <Collapse isOpen={collapseOpen} navbar>
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
                            <NavItem>
                                <div style={{ paddingTop: '10px' }}>
                                    <Switch
                                        onChange={(el, state) => changeLanguage(state ? "zh-TW" : "en")}
                                        onText="中文"
                                        offText="En"
                                        defaultValue={i18n.language === "zh-TW"}
                                        bsSize="mini"
                                    />
                                </div>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default WhiteNavbar;
