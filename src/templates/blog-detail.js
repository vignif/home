import * as React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import { Seo } from "../components/seo"
import {
  HiOutlineArrowCircleRight,
  HiOutlineArrowCircleLeft,
} from "react-icons/hi"

const BlogDetail = ({ props, data, pageContext }) => {
  // console.log(data)
  console.log(pageContext)
  // console.log(props)
  var next = ""
  var prev = ""
  if (pageContext.previous) {
    prev = pageContext.previous.childMarkdownRemark.fields.slug
  }
  if (pageContext.next) {
    next = pageContext.next.childMarkdownRemark.fields.slug
  }
  console.log("prev", prev)
  console.log("next", next)

  const blog = data.file.childMarkdownRemark
  console.log(data.file.childMarkdownRemark)
  const title = blog.frontmatter.title
  const subtitle = blog.frontmatter.subtitle
  const date = blog.frontmatter.date
  const content = blog.html

  const image = getImage(blog.frontmatter.img)

  return (
    <Layout>
      <div className="row blog_header ">
        <GatsbyImage image={image} alt="" className="imgBlogTitle" />
        <div className="overlay blog_title animate-charcter">{title}</div>
        <div className="overlay blog_subtitle">{subtitle}</div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <hr className="hr-text" data-content={date} />
        </div>
      </div>
      <div className="container own_sub_container">
        <main className="spotlight">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="p-15 mt-4">
                  <div
                    className="justify"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col text-start">
                {prev && (
                  <Link to={`/blog${prev}`} className="btn btn-outline-primary">
                    <HiOutlineArrowCircleLeft />
                    &nbsp;Newer
                  </Link>
                )}
              </div>
              <div className="col text-end">
                {next && (
                  <Link to={`/blog${next}`} className="btn btn-outline-primary">
                    <HiOutlineArrowCircleRight />
                    &nbsp;Older
                  </Link>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default BlogDetail

export const Head = ({ data }) => (
  console.log("here"),
  console.log(data),
  (<Seo title={"FV - " + data.file.childMarkdownRemark.frontmatter.title} />)
)

export const query = graphql`
  query GetBlog($slug: String) {
    file(
      sourceInstanceName: { eq: "blog" }
      childMarkdownRemark: { fields: { slug: { eq: $slug } } }
    ) {
      childMarkdownRemark {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          subtitle
          slug
          img {
            childImageSharp {
              gatsbyImageData(
                width: 1000
                placeholder: BLURRED
                quality: 100
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        html
      }
    }
  }
`
