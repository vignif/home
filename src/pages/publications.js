import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Seo } from "../components/seo"

const Publications = ({ data }) => {
  const publications = data.allFile.edges
  return (
  <Layout>
    <div className="container  my-5">
      <div className="container">
        <h1 >Publications</h1>
        {publications.map(pub => (
          console.log(pub),
          <div key={pub.id}>
            <>
              <div className="">
                <div className="col-8" style={{ padding: 0 + 'em' }}>
                  <h3>{pub.node.childMarkdownRemark.frontmatter.title}</h3>
                  <p>{pub.node.childMarkdownRemark.frontmatter.date}</p>
                </div>
                <div className="col-4 text-end">
                  <Link to={`/publications/${pub.node.childMarkdownRemark.frontmatter.slug}`} className="">More Info
                  </Link>
                  <a href={pub.node.childMarkdownRemark.frontmatter.url} className="" target="_blank" rel="noreferrer">Paper</a>
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

export default Publications

export const Head = () => (
  <Seo title="Scientific publications of Francesco Vigni" />
)


// export page query
export const query = graphql`
query MyQuery {
  allFile(
    filter: {sourceInstanceName: {eq: "publications"}, relativeDirectory: {in: ""}}
    sort: {childrenMarkdownRemark: {frontmatter: {date: ASC}}}
  ) {
    edges {
      node {
        sourceInstanceName
        childMarkdownRemark {
          frontmatter {
            slug
            title
            date(formatString: "DD/MM/yyyy")
            tags
            url
          }
        }
      }
    }
  }
}
`