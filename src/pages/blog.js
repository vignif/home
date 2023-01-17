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
            {/* <p className="lead text-muted">Random sht</p> */}
          </div>
        </div>
        <div className="row">
          <div class="col-md-12">
            <hr class="hr-text" data-content="" />
          </div>
        </div>
        <div className="container own_sub_container">
          <div className="container">
            {blog.map(pub => {
              const date = pub.node.childMarkdownRemark.frontmatter.date;
              const title = pub.node.childMarkdownRemark.frontmatter.title;
              return (
                <div key={pub.id}>
                  <>

                    <div className="card m-3">
                      <div className="row card-body p-2 blog_cards">
                        <div className="col-sm-2 own_sub_container">
                          <p className="own_date">{date}</p>
                        </div>

                        <div className="col-md-8">
                          <h5 className="justify">{title}</h5>
                        </div>

                        <div className="col-md-2 text-center">                          
                          <Link to={`/blog/${pub.node.childMarkdownRemark.frontmatter.slug}`} className="btn btn-link">Read
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              )
            }
            )}
          </div>
          <center>

          <Link to="/">Go back to the homepage</Link>
          </center>
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
  sort: {childrenMarkdownRemark: {frontmatter: {date: DESC}}}
  ) {
    edges {
      node {
        sourceInstanceName
        childMarkdownRemark {
          frontmatter {
            slug
            title
            date(formatString: "DD MMM, YYYY")
            tags
            url
          }
        }
      }
    }
  }
}`