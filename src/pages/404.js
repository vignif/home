import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

import { useSiteMetadata } from "../hooks/use-site-metadata"
import SocialLinks from "../components/socials";


const Page404 = () => {
  const { social } = useSiteMetadata()

  return (

    <Layout>
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">You got lost my friend!</h1>
            <p className="lead text-muted">404: Page not Found</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="" />
          </div>
        </div>

        <div className="container my-2 own_sub_container">

          <div className="container">
            <div className="row justify-content-center ">
              <div className="col-md-6 text-center">
                <p>I guess you didn't find what you were looking for!</p>
                <div>
                <iframe src="https://giphy.com/embed/26n6WywJyh39n1pBu" allowFullScreen></iframe>

                <p className="">Maybe the <Link to="/">home page</Link> might help you!</p>

                </div>

              </div>
            </div>
          </div>
        </div>
    </Layout >
  )
}

export default Page404

export const Head = () => (
  <Seo title="You got lost" />
)