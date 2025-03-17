"use client";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Mobile Menu */}
      <div className={`th-menu-wrapper ${isMenuOpen ? "open" : "hidden"}`}>
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle" onClick={() => setIsMenuOpen(false)}>
            <i className="fal fa-times"></i>
          </button>
          <div className="mobile-logo">
            <a className="icon-masking" href="index.html">
              <span data-mask-src="assets/img/logo.svg" className="mask-icon"></span>
              <img src="assets/img/logo.svg" alt="Webteck" />
            </a>
          </div>
          <div className="th-mobile-menu">
            <ul>
              {menuLinks.map((menu, index) => (
                <li key={index}>
                  <a href={menu.href}>{menu.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="th-header header-layout2">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fas fa-map-location"></i>54 NJ-12, Flemington, United States
                    </li>
                    <li>
                      <i className="fas fa-phone"></i>
                      <a href="tel:+1539873657">+153-987-3657</a>
                    </li>
                    <li>
                      <i className="fas fa-envelope"></i>
                      <a href="mailto:info@webteck.com">info@webteck.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-social">
                  <span className="social-title">Follow Us On : </span>
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>{" "}
                  <a href="https://www.twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>{" "}
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>{" "}
                  <a href="https://www.youtube.com/">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a className="icon-masking" href="index.html">
                      <span data-mask-src="assets/img/logo.svg" className="mask-icon"></span>
                      <img src="assets/img/logo.svg" alt="Webteck" />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      {menuLinks.map((menu, index) => (
                        <li key={index}>
                          <a href={menu.href}>{menu.name}</a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="header-button">
                    <button type="button" className="th-menu-toggle d-inline-block d-lg-none" onClick={() => setIsMenuOpen(true)}>
                      <i className="far fa-bars"></i>
                    </button>
                  </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <div className="header-button">
                    <a href="contact.html" className="th-btn shadow-none">
                      Make Appointment<i className="fas fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
