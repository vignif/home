import * as React from "react"
import PropTypes from "prop-types"
import { Link, navigate } from "gatsby"
import { FaSearch, FaTimes } from "react-icons/fa"

const isActive = ({ isCurrent }) => ({
  className: `nav-link ${isCurrent ? "active position-relative" : ""}`,
  style: isCurrent
    ? { borderBottom: "3px solid white", paddingBottom: "5px" }
    : {},
})

const ExactNavLink = ({ to, children }) => (
  <Link to={to} getProps={isActive}>
    {children}
  </Link>
)

ExactNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
]

const Navbar = ({ siteTitle = "" }) => {
  const [query, setQuery] = React.useState("")
  const [showSearch, setShowSearch] = React.useState(false)

  const handleSearchSubmit = e => {
    e.preventDefault()
    if (query.trim()) {
      setShowSearch(false)
      navigate(`/search?s=${encodeURIComponent(query.trim())}`)
    }
  }

  const toggleSearch = () => {
    setShowSearch(!showSearch)
    if (!showSearch) {
      setQuery("")
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary container">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            
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
            {/* Left-aligned nav items */}
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              {NAV_ITEMS.map(({ to, label }) => (
                <li className="nav-item" key={to}>
                  <ExactNavLink to={to}>{label}</ExactNavLink>
                </li>
              ))}
              {/* Explore dropdown grouping Insights, Publications, News */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="exploreDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Explore
                </a>
                <ul className="dropdown-menu" aria-labelledby="exploreDropdown">
                  <li>
                    <Link className="dropdown-item" to="/insights">Insights</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/publications">Publications</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/news">News</Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <a className="dropdown-item" href="FRANCESCO_VIGNI_PHD.pdf" target="_blank" rel="noopener noreferrer">CV</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://drive.google.com/file/d/1_kec847ygcR6kId2rmPujNkQSnkms1Dv/view?usp=sharing" target="_blank" rel="noreferrer">PhD Thesis</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://apps.francescovigni.com" target="_blank" rel="noreferrer">Portfolio</a>
                  </li>
                </ul>
              </li>
              {/* Contact after Explore */}
              <li className="nav-item">
                <ExactNavLink to="/about">Contact</ExactNavLink>
              </li>
            </ul>

            {/* Right-aligned search icon */}
            <ul className="navbar-nav ms-auto mb-2 mb-md-0 align-items-center">
              <li className="nav-item">
                <button
                  className="nav-link search-icon-button"
                  onClick={toggleSearch}
                  aria-label="Search"
                >
                  <FaSearch size={18} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Fullscreen Search Overlay */}
      {showSearch && (
        <div className="search-overlay">
          <div className="search-container">
            <button
              className="close-search"
              onClick={toggleSearch}
              aria-label="Close search"
            >
              <FaTimes size={24} />
            </button>
            <form onSubmit={handleSearchSubmit}>
              <div className="search-input-group">
                <input
                  autoFocus
                  className="search-input"
                  type="search"
                  placeholder="What are you looking for?"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
                <button
                  className="search-submit"
                  type="submit"
                  disabled={!query.trim()}
                >
                  <FaSearch size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .search-icon-button {
          background: none;
          border: none;
          color: var(--text);
          padding: 8px 12px;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .search-icon-button:hover {
          transform: scale(1.1);
        }

        .search-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 28, 77, 0.97); /* fallback to primary with opacity */
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: fadeIn 0.3s ease;
        }

        .search-container {
          width: 90%;
          max-width: 800px;
          position: relative;
        }

        .close-search {
          position: absolute;
          top: -60px;
          right: 0;
          background: none;
          border: none;
          color: var(--text);
          cursor: pointer;
        }

        .search-input-group {
          display: flex;
          width: 100%;
        }

        .search-input {
          flex: 1;
          padding: 20px;
          font-size: 1.5rem;
          border: none;
          border-bottom: 2px solid var(--accent);
          background: transparent;
          color: var(--text);
          outline: none;
        }

        .search-submit {
          background: none;
          border: none;
          color: var(--accent);
          padding: 0 20px;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .search-submit:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .search-submit:not(:disabled):hover {
          transform: scale(1.1);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .search-input {
            font-size: 1.2rem;
            padding: 15px;
          }
        }
      `}</style>
    </>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

export default Navbar
