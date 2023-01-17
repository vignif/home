import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

import { useSiteMetadata } from "../hooks/use-site-metadata"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

const AboutPage = () => {
  const { social } = useSiteMetadata()
  
  return (

  <Layout>
    <section className="py-5 text-center container own_container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">About Me</h1>
          <p className="lead text-muted"> Welcome to my page</p>
        </div>

        <div className="container my-5 own_sub_container">

          <div className="container">
            <h1 className="fw-light">What you need to know</h1>
            <p>
              <ul>
                <li>Bootstrap 5 support with SASS</li>
                <li>Customize theme via <span className="font-monospace ">layout.scss</span></li>
                <li>If any issue report to <a href="https://github.com/r-ichard/gatsby-starter-bootstrap-5" target="_blank" rel="noopener noreferrer">Github Repo</a></li>
              </ul>
            </p>
            <p>Created by <a href="https://github.com/r-ichard" target="_blank" rel="noopener noreferrer">Richard Raduly</a></p>
          </div>
          <Link to="/">Go back to the homepage</Link>
        </div>
      </div>
      <div className="row justify-content-center">
          <div className="col-md-1">
            <a href={social.github} target="_blank" rel="noreferrer" className="col-sm-2 mx-auto">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
          <div className="col-md-1">
            <a href={social.twitter} target="_blank" rel="noreferrer" className="col-sm-2 mx-auto">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
          <div className="col-md-1">
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="col-sm-2 mx-auto">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
    </section>

  </Layout>
)
}

export default AboutPage

export const Head = () => (
  <Seo title="About Gatsby Bootsrap 5 starter" />
)