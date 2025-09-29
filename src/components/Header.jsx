import React, { useState, useEffect } from "react";
import "../assets/Styles/Style.css";
import {
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/Images/logo1.png";

const SocialIcon = ({ href, icon: Icon }) => (
  <a
    href={href}
    className="d-inline-flex align-items-center justify-content-center bg-secondary text-white rounded-circle custom-social-icon me-2"
  >
    <Icon />
  </a>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showStickyNavbar, setShowStickyNavbar] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      setShowStickyNavbar(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showOffcanvas) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.dataset.scrollY = scrollY;
    } else {
      const scrollY = document.body.dataset.scrollY || "0";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, parseInt(scrollY));
    }
  }, [showOffcanvas]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setShowOffcanvas(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="container-fluid d-md-flex flex-column p-0 position-fixed transparent-navbar z-3 top-0 w-100">
      <header>
        {/* Top header */}
        <div
          className={`container bg-danger d-none d-lg-flex py-3 text-white justify-content-between top-header-transition ${
            scrolled ? "hide" : ""
          }`}
        >
          <div className="d-flex align-items-center justify-content-start">
            <i className="bi bi-telephone ms-5"></i>
            <a
              className="text-decoration-none text-white ms-3"
              href="tel:+(03) 9886 0005"
            >
              (03) 9886 0005
            </a>
            <span className="border-start ms-3">
              <i className="bi bi-geo-alt ms-3 "></i>
              <a
                href="https://www.google.com/maps/search/?api=1&query=158+Toongabbie+Road,+Toongabbie+NSW+2146"
                target="_blank"
                rel="noopener noreferrer"
                className="ms-3 text-decoration-none text-white"
              >
                158 Toongabbie Road, Toongabbie NSW 2146
              </a>
            </span>
          </div>
          <div className="d-flex justify-content-end gap-1 ps-5 me-5 align-items-center ">
            <SocialIcon href="https://www.facebook.com/" icon={FaFacebookF} />
            <SocialIcon href="https://www.instagram.com/" icon={FaInstagram} />
            <SocialIcon href="https://www.youtube.com/" icon={FaYoutube} />
            <SocialIcon href="https://wa.me/1234567890" icon={FaWhatsapp} />
          </div>
        </div>

        {/* Mobile fixed navbar */}
        <nav className="navbar bg-white border-bottom py-3 px-3 px-md-5  fixed-top d-lg-none z-3">
          <a
            className="navbar-brand fw-bold d-flex align-items-center mt-1"
            href=""
          >
            <img
              src={logo}
              alt="logo"
              className="img-fluid"
              style={{ maxHeight: "70px" }}
            />
          </a>
          <button
            className="navbar-toggler border-0 me-3 fs-1"
            type="button"
            onClick={() => setShowOffcanvas(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>

        {/* Desktop normal navbar */}
        <nav
          className={`navbar navbar-expand-lg bg-white border-bottom py-3 px-2 px-md-5 container main-navbar-transition d-none d-lg-flex z-3 ${
            scrolled ? "hide" : ""
          }`}
        >
          <a className="navbar-brand fw-bold d-flex align-items-center" href="">
            <img
              src={logo}
              alt="logo"
              className="img-fluid"
              style={{ maxHeight: "70px" }}
            />
          </a>
          <div
            className="collapse navbar-collapse justify-content-end text-uppercase fw-semibold"
            id="navbarMenu"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 gap-4 me-3">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href=""
                  onClick={(e) => handleNavClick(e, "home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href=""
                  onClick={(e) => handleNavClick(e, "about")}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href=""
                  onClick={(e) => handleNavClick(e, "service")}
                >
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href=""
                  onClick={(e) => handleNavClick(e, "team")}
                >
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href=""
                  onClick={(e) => handleNavClick(e, "news")}
                >
                  News
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href=""
                  onClick={(e) => handleNavClick(e, "contact")}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Desktop sticky navbar */}
        <nav
          className={`navbar navbar-expand-lg bg-white border-bottom py-1 px-2 px-md-5 container-fluid top-0 start-0 end-0 position-fixed sticky-navbar-transition d-none d-lg-flex z-3 ${
            showStickyNavbar ? "show" : ""
          }`}
        >
          <div className="container">
            <a
              className="navbar-brand fw-bold d-flex align-items-center"
              href=""
            >
              <img
                src={logo}
                alt="logo"
                className="img-fluid"
                style={{ maxHeight: "70px" }}
              />
            </a>
            <button
              className="navbar-toggler me-3"
              type="button"
              onClick={() => setShowOffcanvas(true)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end text-uppercase fw-semibold">
              <ul className="navbar-nav mb-2 mb-lg-0 gap-4 me-3">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#home"
                    onClick={(e) => handleNavClick(e, "home")}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href=""
                    onClick={(e) => handleNavClick(e, "about")}
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#service"
                    onClick={(e) => handleNavClick(e, "service")}
                  >
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#team"
                    onClick={(e) => handleNavClick(e, "team")}
                  >
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#news"
                    onClick={(e) => handleNavClick(e, "news")}
                  >
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "contact")}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Offcanvas */}
        {showOffcanvas && (
          <div
            className="offcanvas offcanvas-end show py-1 w-100 z-3"
            style={{
              visibility: "visible",
              transform: "translateX(0%)",
              overflow: "hidden",
            }}
          >
            <div className="offcanvas-header justify-content-between">
              <a
                className="navbar-brand fw-bold d-flex align-items-center"
                href=""
              >
                <img
                  src={logo}
                  alt="logo"
                  className="img-fluid"
                  style={{ maxHeight: "70px" }}
                />
              </a>
              <div className="border border-dark p-1 rounded me-2">
                <button
                  type="button"
                  className="btn-close m-1"
                  onClick={() => setShowOffcanvas(false)}
                ></button>
              </div>
            </div>

            <div className="offcanvas-body ">
              <ul className="navbar-nav gap-4 align-items-center text-uppercase fw-semibold mt-5">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#home"
                    onClick={(e) => handleNavClick(e, "home")}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href=""
                    onClick={(e) => handleNavClick(e, "about")}
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#service"
                    onClick={(e) => handleNavClick(e, "service")}
                  >
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#team"
                    onClick={(e) => handleNavClick(e, "team")}
                  >
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#news"
                    onClick={(e) => handleNavClick(e, "news")}
                  >
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "contact")}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <SocialIcon
                  href="https://www.facebook.com/"
                  icon={FaFacebookF}
                />
                <SocialIcon
                  href="https://www.instagram.com/"
                  icon={FaInstagram}
                />
                <SocialIcon href="https://www.youtube.com/" icon={FaYoutube} />
                <SocialIcon href="https://wa.me/1234567890" icon={FaWhatsapp} />
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
