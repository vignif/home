import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import { Seo } from "../../components/seo"
import { HiOutlineNewspaper } from 'react-icons/hi';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


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
          <div class="row">
            {blog.map(pub => {
              console.log(pub.node)
              const date = pub.node.childMarkdownRemark.frontmatter.date;
              const title = pub.node.childMarkdownRemark.frontmatter.title;
              const subtitle = pub.node.childMarkdownRemark.frontmatter.subtitle;

              const image = getImage(pub.node.childMarkdownRemark.frontmatter.img)
              console.log(image)
              return (
                <div key={pub.node.id}>
                  <>
                    <div class="col-5">
                      <div className="card">
                        <div className="card-image">
                          <GatsbyImage image={image} alt="" />
                        </div>
                        <div className="card-content">
                          <div className="content">
                            <a href="/mere-blog-theme/2019/09/04/fifth-post/">
                              <p className="title is-4">{title}</p>
                            </a>
                            <p className="subtitle is-6">{subtitle} - {date}</p>
                          </div>
                          <div className="has-text-centered">

                            <Link to={`/blog${pub.node.childMarkdownRemark.fields.slug}`} className="button is-dark is-fullwidth"><HiOutlineNewspaper />&nbsp;Read
                            </Link>
                          </div>
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
  query BLOGS {
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
              img{
                childImageSharp {
                  gatsbyImageData(width: 400, placeholder: BLURRED, quality: 90, formats: [AUTO, WEBP, AVIF])
                }
              }
            }
          }
        }
      }
    }
  }`