import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import SocialLinks from "../components/socials"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Page404 = () => {
  const { social } = useSiteMetadata()

  return (
    <Layout>
      <div className="row py-lg-5 text-center">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="error-code" style={{ 
            fontSize: "8rem", 
            fontWeight: "bold", 
            color: "var(--accent)",
            lineHeight: 1,
            marginBottom: "1rem"
          }}>
            404
          </div>
          <h1 className="fw-bold mb-3">Page Not Found</h1>
          <p className="lead text-muted mb-4">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
        </div>
      </div>

      <div className="container my-4 own_sub_container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="mb-4">
              <iframe
                src="https://giphy.com/embed/26n6WywJyh39n1pBu"
                width="480"
                height="270"
                frameBorder="0"
                className="giphy-embed rounded shadow"
                allowFullScreen
                title="Lost in space animation"
              ></iframe>
            </div>
            
            <div className="d-flex flex-column gap-3 align-items-center mb-4">
              <p className="mb-3">Here are some helpful links instead:</p>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                <Link to="/" className="btn btn-primary">
                  <span>🏠</span> Home
                </Link>
                <Link to="/about" className="btn btn-outline-primary">
                  <span>👤</span> About
                </Link>
                <Link to="/insights" className="btn btn-outline-primary">
                  <span>📝</span> Insights
                </Link>
                <Link to="/publications" className="btn btn-outline-primary">
                  <span>📚</span> Publications
                </Link>
                <Link to="/search" className="btn btn-outline-primary">
                  <span>🔍</span> Search
                </Link>
              </div>
            </div>

              <p className="text-muted mb-3">Or connect with me on social media:</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page404

export const Head = () => (
  <Seo 
    title="404: Page Not Found" 
    description="The page you're looking for doesn't exist."
  />
)

