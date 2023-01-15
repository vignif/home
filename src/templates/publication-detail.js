import * as React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import { Link } from "gatsby"

const PublicationDetail = ({ data, pageContext }) => {
  // console.log(data)
  const pub = data.publication
  // console.log(pageContext)
  var next = ""
  var prev = ""
  if (pageContext.previous) {
    prev = pageContext.previous.slug
  }
  if (pageContext.next) {
    next = pageContext.next.slug
  }
  console.log("prev", prev)
  console.log("next", next)
  const { title, slug, venue, date, url, abstract } = pub
  const authors = pub.authors
  const img = getImage(pub.img)
  
  return (
    <Layout>


      <section className="py-5 text-center container own_container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{title}</h1>
            {
              authors.map((author, index) => (
                <p key={author.id} className="authors_list">

                  {/* // put a comma between authors_list */}
                  {index > 0 && index < pub.authors.length - 1 && ", "}
                  {index > 0 && index === pub.authors.length - 1 && " and "}
                  <p className="authors_list">{author.name} {author.surname}</p>
                </p>
              ))}
          </div>
        </div>
        <div className="row">
          <div class="col-md-12">
            <hr class="hr-text" data-content="Info" />
          </div>
        </div>
        <div className="container own_sub_container">

          <main className="spotlight">
            <div className="container my-5">
              <div className="row">
                <div className="col-lg-3">
                  <GatsbyImage
                    image={img}
                    alt={slug}
                    className="pub_pic"
                  />

                </div>
                <div className="col-lg-8">
                  <div className="p-15">
                    <p>Venue: {venue}</p>
                    <p>Date: {date}</p>
                    <p>Link: {url}</p>

                  </div>
                  <div className="p-15 mt-4">
                    <p className="lead text-muted">Abstract</p>

                    <div dangerouslySetInnerHTML={{ __html: abstract }} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col text-lg-start">
                  {prev && <Link to={`/publications/${prev}`}>Previous</Link>}
                </div>
                <div className="col text-lg-end">
                  {next && <Link to={`/publications/${next}`}>next</Link>}
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
export default PublicationDetail


export const query = graphql`
query CreatePublicationPage($slug: String) {
  publication: publicationsJson(slug: {eq: $slug}) {
    title
    slug
    venue
    abstract
    authors {
      slug
      name
      surname
    }
    date(formatString: "MMMM DD, YYYY")
    img {
      childImageSharp {
        gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
}`
