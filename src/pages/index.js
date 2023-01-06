import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section className="py-5 text-center container own_container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Francesco Vigni ! </h1>
          <p className="lead text-muted"> Welcome to my page</p>
          {/* <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          /> */}

        </div>
      </div>
      <div className="row">
        <div class="col-md-12">
          <Link to="/about/" className="btn btn-danger pull-right">About</Link>
        </div>

        <div class="col-md-12 pull-left">
          <Link to="/page-2/" className="btn btn-secondary my-2">Go to page 2</Link>
        </div>

      </div>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => (
  <Seo />
)