import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import { Seo } from "../../components/seo"

const AboutPage = ({ data }) => {

  const publications = data.allMarkdownRemark.nodes

  return (
  <Layout>
    <div className="container  my-5">

      <div className="container">
        <h1 >What you need to know</h1>
      </div>
      <div className="">
        {publications.map(pub => (
          <div key={pub.id}>
            <>
              <div className="">
                <div className="col-8" style={{ padding: 0 + 'em' }}>
                  <h3>{pub.frontmatter.title}</h3>
                  <p>{pub.frontmatter.date}</p>
                </div>
                <div className="col-4 text-end">
                  <Link to={`/publications/${pub.frontmatter.slug}`} className="">More Info
                  </Link>
                  <a href={pub.frontmatter.url} className="" target="_blank" rel="noreferrer">Paper</a>
                </div>
              </div>
            </>
          </div>
        ))}
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)}

export default AboutPage

export const Head = () => (
  <Seo title="Scientific publications of Francesco Vigni" />
)


// export page query
export const query = graphql`
query MyPublications {
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      id
      frontmatter {
        title
        slug
        date(formatString: "DD/MM/yyyy")
        url
      }
    }
  }
}`