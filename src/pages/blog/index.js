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
        <section className="wrapper">
          <div className="container-fostrap">
            <div className="content">
              <div className="container">
                <div className="row justify-content-around m-auto">
                  {blog.map(pub => {
                    console.log(pub.node)
                    const date = pub.node.childMarkdownRemark.frontmatter.date;
                    const title = pub.node.childMarkdownRemark.frontmatter.title;
                    const subtitle = pub.node.childMarkdownRemark.frontmatter.subtitle;
                    const url = `/blog${pub.node.childMarkdownRemark.fields.slug}`
                    const image = getImage(pub.node.childMarkdownRemark.frontmatter.img)
                    console.log(image)
                    return (
                      <div key={pub.node.id} className="d-contents">
                        <>
                          <div className="col-xs-12 col-sm-5">
                            <div className="card">
                              <div className="img-card">
                                <GatsbyImage image={image} alt="" style={{
                                  display: 'block',
                                  verticalAlign: 'middle',
                                }} />
                              </div>
                              <div className="card-content">
                                <h4 className="card-title">
                                  <a href={url}> {title}
                                  </a>
                                </h4>
                                <div className="content">
                                  <a href={url}>
                                    <p className="title is-4">{subtitle}</p>
                                  </a>
                                  <p className="subtitle is-6">{date}</p>
                                </div>

                                <div className="card-read-more">
                                  <a href={url} className="btn btn-link btn-block">
                                    Read More
                                  </a>
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
            </div>
          </div>
        </section>
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