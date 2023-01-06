import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Seo } from "../components/seo"

const Publications = ({ data }) => {
  const publications = data.allFile.edges
  return (
    <Layout>


      <section className="py-5 text-center container own_container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Publications</h1>
            <p className="lead text-muted"> Welcome to my page</p>
          </div>
        </div>

        <div className="container own_sub_container">
          {publications.map(pub => (
            console.log(pub),
            <div key={pub.id}>
              <>
                <div className="row">
                  <div className="col-8" style={{ padding: 0 + 'em' }}>
                    <h5>{pub.node.childMarkdownRemark.frontmatter.title}</h5>
                    <p>{pub.node.childMarkdownRemark.frontmatter.date}</p>
                    <p>{pub.node.childMarkdownRemark.frontmatter.authors}</p>
                  </div>
                  <div className="col-4 text-end">
                    <Link to={`/publications/${pub.node.childMarkdownRemark.frontmatter.slug}`} className="btn btn-link">More Info
                    </Link>


                    <a href={pub.node.childMarkdownRemark.frontmatter.url} className="btn btn-link" target="_blank" rel="noreferrer">Paper</a>
                  </div>
                </div>
              </>
            </div>
          ))}
        </div>
        <Link to="/">Go back to the homepage</Link>
      </section>
    </Layout>
  )
}

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