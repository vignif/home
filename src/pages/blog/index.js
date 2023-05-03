import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import { Seo } from "../../components/seo"
import { HiOutlineNewspaper } from 'react-icons/hi';

const Blog = ({ data }) => {
  // console.log(data)
  const blog = data.allFile.edges
  // console.log(blog)
  return (
    <Layout>

      <section className="py-5 text-center container own_container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Blog</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="" />
          </div>
        </div>
        <div className="container own_sub_container">
          {blog.map(pub => {
            console.log(pub.node)
            const date = pub.node.childMarkdownRemark.frontmatter.date;
            const title = pub.node.childMarkdownRemark.frontmatter.title;
            const subtitle = pub.node.childMarkdownRemark.frontmatter.subtitle;
            return (
              <div key={pub.node.id}>
                <>

                  <div className="card m-3">
                    <div className="row card-body p-2 blog_cards">
                      <div className="col-md-10">
                        <p className="m-auto">{title}</p>
                        <p className="m-auto fw-light">{subtitle}</p>
                        <p className="m-auto fw-lighter">{date}</p>
                      </div>

                      <div className="col-lg-2">
                        <div className="row">
                          <div className="col text-center">
                            <Link to={`/blog${pub.node.childMarkdownRemark.fields.slug}`} className="btn btn-outline-primary me-2"><HiOutlineNewspaper />&nbsp;Read
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            )
          }
          )}
          <center>
            <div className="row">
              <div className="col-md-12">
                <hr className="hr-text" data-content="" />
              </div>
            </div>
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
        id
        sourceInstanceName
        childMarkdownRemark {
          fields{
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMM, YYYY")
            subtitle
          }
        }
      }
    }
  }
}`