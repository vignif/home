import * as React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import { HiOutlineArrowCircleRight, HiOutlineArrowCircleLeft, HiOutlineDownload, HiOutlineDocumentSearch, HiPlay, HiDocumentText } from "react-icons/hi"
import { Seo } from "../components/seo"


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
  // console.log("prev", prev)
  // console.log("next", next)
  const { title, slug, venue, date, url, abstract } = pub
  const authors = pub.authors
  const img = getImage(pub.img)
  const attach = pub.attach.get
  const video_link = pub.attach.video
  const tags = pub.tags
  const co = pub.coFirstAuthors
  console.log(tags)
  return (
    <Layout>
      <section className="py-5 text-center container own_container">
        <div className="row py-lg-5">
          <div className="col-md-8 mx-auto">
            <h1 className="fw-light">{title}</h1>
            {
              authors.map((author, index) => (
                <div key={author.slug} className="authors_list">
                  {index > 0 && index <= 2 && co && "*"}
                  {index > 0 && index < pub.authors.length - 1 && ", "}
                  {index > 0 && index === pub.authors.length - 1 && " and "}
                  <p className="authors_list">{author.name} {author.surname}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="Info" />
          </div>
        </div>


        <main className="spotlight">

          <div className="row justify-content-around">
            <div className="col-lg-4">
              <GatsbyImage
                image={img}
                alt={slug}
                className="pub_pic"
              />

            </div>
            <div className="col-lg-6">
              <div className="p-15 text-start">
                <p>Venue: {venue}</p>
                <p>Date: {date}</p>
                <p>
                  <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary m-1">Paper <HiDocumentText /></a>
                  {
                    attach &&
                    <a href={attach.publicURL} target="_blank" rel="noreferrer" className="btn btn-primary m-1">Annex <HiOutlineDownload /></a>
                  }

                  {
                    pub.alternate_link &&
                    <a href={pub.alternate_link} target="_blank" rel="noreferrer" className="btn btn-primary m-1">More <HiOutlineDocumentSearch /></a>
                  }

                  {
                    video_link &&
                    <a href={video_link} target="_blank" rel="noreferrer" className="btn btn-warning m-1">Video <HiPlay /></a>
                  }
                </p>
                <p>Tags:{" "}
                  {pub.tags.map((tag, index) => (
                    <div key={tag} className="authors_list fw-light fst-italic">
                      <Link to={`/tags/${tag}`}>{tag}</Link>
                      {index < pub.tags.length - 1 && ", "}
                    </div>
                  ))}
                </p>
                <p>{co && "Notes: * co-first authorship"}</p>
              </div>
            </div>
            <div className="p-15 mt-4 col-lg-11">
              <p className="lead text-muted">Abstract</p>
              <div className="justify" dangerouslySetInnerHTML={{ __html: abstract }} />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col text-lg-start">
              {prev && <Link to={`/publications/${prev}`} className="btn btn-outline-primary"><HiOutlineArrowCircleLeft />&nbsp;Previous</Link>}
            </div>
            <div className="col text-lg-end">
              {next && <Link to={`/publications/${next}`} className="btn btn-outline-primary"><HiOutlineArrowCircleRight />&nbsp;Next</Link>}
            </div>
          </div>

        </main>

      </section>
    </Layout>
  )
}

// Step 3: Export your component
export default PublicationDetail

export const Head = ({ data }) => (
  <Seo title={data.publication.title} description={data.publication.abstract} />
)


export const query = graphql`
query CreatePublicationPage($slug: String) {
  publication: publicationsJson(slug: {eq: $slug}) {
    title
    slug
    venue
    tags
    url
    alternate_link @include(if: true) 
    coFirstAuthors
    abstract
    authors {
      slug
      name
      surname
    }
    attach {
      get 
      video
    }
    date(formatString: "MMMM DD, YYYY")
    img {
      childImageSharp {
        gatsbyImageData(width: 400, placeholder: BLURRED, quality: 90, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
}`
