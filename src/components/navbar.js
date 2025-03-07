import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const isActive = ({ isCurrent }) => ({
  className: `nav-link ${isCurrent ? "active position-relative" : ""}`,
  style: isCurrent ? { borderBottom: "3px solid white", paddingBottom: "2px" } : {},
});

const ExactNavLink = ({ to, children }) => (
  <Link to={to} getProps={isActive}>
    {children}
  </Link>
);

ExactNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/publications", label: "Publications" },
  { to: "/news", label: "News" },
  { to: "/about", label: "About" },
];

const Navbar = ({ siteTitle = "" }) => (
  <nav className="navbar navbar-expand-md navbar-dark bg-primary container">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">
        {siteTitle}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#main-navbar"
        aria-controls="main-navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="main-navbar">
        <ul className="navbar-nav ms-auto mb-2 mb-md-0">
          {NAV_ITEMS.map(({ to, label }) => (
            <li className="nav-item" key={to}>
              <ExactNavLink to={to}>{label}</ExactNavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

export default Navbar;
