import React from "react";

// reactstrap components

// core components
import WhiteNavbar from "components/Navbars/WhiteNavbar.js";
import Footer from "components/Footers/Footer.js";
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

// sections for this page
import Header from "./sections-sections/AboutUsHeader.js";
import Projects from "./sections-sections/Projects.js";
import Performances from "./sections-sections/Performances.js";
import ContactUs from "./sections-sections/ContactUs.js";
import ScrollUpButton from "react-scroll-up-button";

function Sections() {

  return (
    <I18nextProvider i18n={i18n}>
      <WhiteNavbar />
      <div className="wrapper">
        <div className="section-space"></div>
        <Header />
        <Projects />
        <Performances />
        <ContactUs />
        <ScrollUpButton />

      </div>
    </I18nextProvider>
  );
}

export default Sections;
