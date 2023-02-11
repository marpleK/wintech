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
    const toggle = () => setIsOpen(!collapseOpen);

    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Brand</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={collapseOpen} navbar>
                <Nav className="ml-auto" navbar>
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
        </Navbar>
    );
};


export default WhiteNavbar;
