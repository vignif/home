import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SocialLinks from "../components/socials"
import Navbar from "./navbar"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  var year = new Date().getFullYear()
  return (
    <div className="container-fluid p-0">
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>
        <section className="text-center container own_container">
          {children}
        </section>
      </main>
      <footer className="footer mt-auto py-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-muted">
              {" "}
              &#169; Francesco Vigni 2018 - {year}{" "}
            </span>
            <SocialLinks />
          </div>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
