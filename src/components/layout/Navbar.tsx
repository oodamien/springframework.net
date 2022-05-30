import { Link } from "gatsby";
import * as React from "react";
import logo from "../../images/logo.svg";

const Navbar = (): JSX.Element => {
  const [navbarActive, setNavbarActive] = React.useState(false);
  const toggleHamburger = () => {
    setNavbarActive(!navbarActive);
  };
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img
              src={logo}
              alt="Spring"
              style={{ width: "180px", maxHeight: "48px" }}
            />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${
              navbarActive ? "is-active" : ""
            }`}
            data-target="navMenu"
            role="menuitem"
            tabIndex={0}
            onKeyPress={() => toggleHamburger()}
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${navbarActive ? "is-active" : ""}`}
        >
          <div className="navbar-end has-text-centered">
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link" to="/learn">
                Learn
              </Link>
              <div className="navbar-dropdown is-boxed">
                <Link className="navbar-item" to="/learn">
                  Overview
                </Link>
                <Link className="navbar-item" to="/quickstart">
                  Modules
                </Link>
                <Link className="navbar-item" to="/guides">
                  Roadmap
                </Link>
                <Link className="navbar-item" to="/blog">
                  Documentation
                </Link>
                <Link className="navbar-item" to="/blog">
                  Examples/Tutorials
                </Link>
              </div>
            </div>

            <Link className="navbar-item" to="/training">
              Download
            </Link>
            <Link className="navbar-item" to="/training">
              News
            </Link>

            {/* <Link className="navbar-item" to="/training">
              Training
            </Link>
            <Link className="navbar-item" to="/support">
              Support
            </Link> */}
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link" to="/community">
                Community
              </Link>
              <div className="navbar-dropdown is-boxed is-right">
                <Link className="navbar-item" to="/community">
                  Forum
                </Link>
                <Link className="navbar-item" to="/events">
                  JIRA Issue Tracking
                </Link>
                <Link className="navbar-item" to="/team">
                  FishEye Repository Browser
                </Link>
                <Link className="navbar-item" to="/team">
                  Continuous Integration
                </Link>
                <Link className="navbar-item" to="/team">
                  Source Repository (GitHub)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
