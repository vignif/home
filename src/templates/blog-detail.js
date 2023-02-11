import * as React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import { Link } from "gatsby"

import { HiOutlineArrowCircleRight, HiOutlineArrowCircleLeft } from "react-icons/hi"

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
  // const { title, slug, venue, date, url, abstract } = pub
  // const authors = pub.authors

  const blog = data.file.childMarkdownRemark
  console.log(data.file.childMarkdownRemark)
  // const {frontmatter} = data.file.childMarkdownRemark
  const title = blog.frontmatter.title
  const date = blog.frontmatter.date
  const content = blog.html
  // const authors = ["asd", "asdf"]

  // const title = "titkl"
  // const date = "date"
  // const img = getImage(pub.img)
  
  return (
    <Layout>
      <section className="py-5 text-center container own_container">
        <div className="row py-lg-5">
          <div className="col-md-8 mx-auto">
            <h1 className="fw-light">{title}</h1>
            {/* {
              authors.map((author, index) => (
                <p key={author.id} className="authors_list">
                  {index > 0 && index < pub.authors.length - 1 && ", "}
                  {index > 0 && index === pub.authors.length - 1 && " and "}
                  <p className="authors_list">{author.name} {author.surname}</p>
                </p>
              ))} */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content={date} />
          </div>
        </div>
        <div className="container own_sub_container">

          <main className="spotlight">
            <div className="container my-5">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="p-15 mt-4">
                    <div className="justify" dangerouslySetInnerHTML={{ __html: content }} />
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col text-start">
                  {prev && <Link to={`/blog${prev}`} className="btn btn-outline-primary"><HiOutlineArrowCircleLeft />&nbsp;Newer</Link>}
                </div>
                <div className="col text-end">
                    {next && <Link to={`/blog${next}`} className="btn btn-outline-primary"><HiOutlineArrowCircleRight />&nbsp;Older</Link>}
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </Layout>

  )
}

// Step 3: Export your component
export default BlogDetail


export const query = graphql`
query GetBlog($slug: String) {
  file(
    sourceInstanceName: {eq: "blog"}
    childMarkdownRemark: {fields: {slug: {eq: $slug}}}
  ) {
    childMarkdownRemark {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
      }
      html
    }
  }
}`
