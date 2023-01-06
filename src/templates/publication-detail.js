import * as React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import { Link } from "gatsby"

// export function Product({ pageContext }) {
//   const { product } = pageContext
//   console.log(product)
//   return (
//     <div>
//       Name: {product.name}
//       Price: {product.p
// import * as styles from '../styles/pub.module.css'
//       Description: {product.description}
//     </div>
//   )
// }

const PublicationDetail = ({ data, pageContext }) => {
  console.log(data)
  console.log(pageContext)
  var next = ""
  var prev = ""
  if (pageContext.prev) {
    prev = pageContext.prev.frontmatter.slug
    console.log(prev)
  }
  if (pageContext.next) {
    next = pageContext.next.frontmatter.slug
    console.log(next)
  }

  const { html } = data.image
  const { title, slug } = data.image.frontmatter
  const authors = data.image.frontmatter.authors
  const img = getImage(data.image.frontmatter.img)
  console.log(authors)

  return (
    <Layout>


      <section className="py-5 text-center container own_container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{title}</h1>
            <p className="lead text-muted"> {authors}</p>
          </div>
        </div>

        <div className="container own_sub_container">
        </div>
      </section>
      <main className="spotlight">
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 profilepic">
              <GatsbyImage
                image={img}
                alt={slug}
              />

            </div>
            <div className="col-lg-8">
              <div className="p-15 mt-4">
                <h1 className="display-4">{title}</h1>

                <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Link to={`/publications/${prev}`}>Previous</Link>
            </div>
            <div className="col">
              <Link to={`/publications/${next}`}>Next</Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>

  )
}

// Step 3: Export your component
export default PublicationDetail


export const query = graphql`
    query MyQuery($slug: String) {
      image: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
          slug
          title
          authors
          img {
            childImageSharp {
              gatsbyImageData(
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        }
    }`
