import React from "react";

// reactstrap components

// core components
import WhiteNavbar from "components/Navbars/WhiteNavbar.js";
import Footer from "components/Footers/Footer.js";

// sections for this page
import Headers from "./sections-sections/Headers.js";
import Features from "./sections-sections/Features.js";
import Blogs from "./sections-sections/Blogs.js";
import Teams from "./sections-sections/Teams.js";
import Projects from "../components/Projects1.js/index.js.js";
import Pricing from "./sections-sections/Pricing.js";
import Testimonials from "./sections-sections/Testimonials.js";
import ContactUs from "./sections-sections/ContactUs.js";

function Sections() {
  React.useEffect(() => {
    document.body.classList.add("section-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#/") + 2
    );
    var hrefId = href.substring(href.lastIndexOf("#") + 1);
    if (href.lastIndexOf("#") > 0) {
      document.getElementById(hrefId).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    // this function is used to make the right bullets list
    // (the bellow <nav id="cd-vertical-nav">)
    // active when changeing the section on scroll
    const updateView = () => {
      var contentSections = document.getElementsByClassName("cd-section");
      var navigationItems = document
        .getElementById("cd-vertical-nav")
        .getElementsByTagName("a");

      for (let i = 0; i < contentSections.length; i++) {
        var activeSection =
          parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
        if (
          contentSections[i].offsetTop - window.innerHeight / 2 <
          window.pageYOffset &&
          contentSections[i].offsetTop +
          contentSections[i].scrollHeight -
          window.innerHeight / 2 >
          window.pageYOffset
        ) {
          navigationItems[activeSection].classList.add("is-selected");
        } else {
          navigationItems[activeSection].classList.remove("is-selected");
        }
      }
    };

    window.addEventListener("scroll", updateView);
    return function cleanup() {
      document.body.classList.remove("section-page");
      window.removeEventListener("scroll", updateView);
    };
  });
  return (
    <>
      <WhiteNavbar />
      <div className="wrapper">
        <div className="section-space"></div>
        <Headers />
        <Features />
        <Blogs />
        <Teams />
        <Projects />
        <Pricing />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default Sections;


<nav id="cd-vertical-nav">
  <ul>
    <li>
      <a
        data-number="1"
        href="#headers"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("headers").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }}
      >
        <span className="cd-dot" />
        <span className="cd-label">Headers</span>
      </a>
    </li>
    <li>
      <a
        data-number="2"
        href="#features"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("features").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }}
      >
        <span className="cd-dot" />
        <span className="cd-label">Features</span>
      </a>
    </li>
    <li>
      <a
        data-number="3"
        href="#blogs"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("blogs").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }}
      >
        <span className="cd-dot" />
        <span className="cd-label">Blogs</span>
      </a>
    </li>
    <li>
      <a
        data-number="4"
        href="#teams"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("teams").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }}
      >
        <span className="cd-dot" />
        <span className="cd-label">Teams</span>
      </a>
    </li>
    <li>
      <a
        data-number="5"
        href="#projects"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("projects").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }}
      >
        <span className="cd-dot" />
        <span className="cd-label">Projects</span>
      </a>
    </li>
    <li>
      <a
        data-number="6"
        href="#pricing"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("pricing").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }}
      >
        <span className="cd-dot" />
        <span className="cd-label">Pricing</span>
      </a>
    </li>
    <li>
      <a
        data-number="7"
        href="#testimonials"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("testimonials").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }}
      >
        <span className="cd-dot" />
        <span className="cd-label">Testimonials</span>
      </a>
    </li>
    <li>
      <a
        data-number="8"
        href="#contact-us"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("contact-us").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }}
      >
        <span className="cd-dot" />
        <span className="cd-label">Contact Us</span>
      </a>
    </li>
  </ul>
</nav>