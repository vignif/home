import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Seo } from "../components/seo"

const Blog = ({ data }) => {
  console.log(data)
  const blog = data.allFile.edges
  console.log(blog)
  return (
    <Layout>

      <section className="py-5 text-center container own_container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Blog</h1>
            <p className="lead text-muted"> Welcome to my page</p>
          </div>
        </div>
        <div className="container own_sub_container">
          <div className="container">
            {blog.map(pub => (
              <div key={pub.id}>
                <>
                  <div className="">
                    <div className="col-8" style={{ padding: 0 + 'em' }}>
                      <h3>{pub.node.childMarkdownRemark.frontmatter.title}</h3>
                      <p>{pub.node.childMarkdownRemark.frontmatter.date}</p>
                    </div>
                    <div className="col-4 text-end">
                      <Link to={`/blog/${pub.node.childMarkdownRemark.frontmatter.slug}`} className="">More Info
                      </Link>
                    </div>
                  </div>
                </>
              </div>
            ))}
          </div>
          <Link to="/">Go back to the homepage</Link>
        </div>
      </section>
    </Layout>
  )
}

export default Blog

export const Head = () => (
  <Seo title="Blog" />
)

// export page query
export const query = graphql`
query MyQuery {
  allFile(filter: {sourceInstanceName: {eq: "blog"}},
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
}`