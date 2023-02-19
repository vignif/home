import * as React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import { HiOutlineArrowCircleRight, HiOutlineArrowCircleLeft, HiOutlineDownload} from "react-icons/hi"
import { Seo } from "../components/seo"


const MiscDetail = ({ data, pageContext }) => {
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
  const { title, slug, venue, date, url, abstract } = pub
  const authors = pub.authors
  const img = getImage(pub.img)
  const attach = pub.attach
  const tags = pub.tags
  const details = pub.details
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
        <div className="container own_sub_container">
          <main className="spotlight">
            <div className="container my-5">
              <div className="row">
                
                <div className="col-lg-9 m-auto">
                  <div className="p-15">

                    <p>Institution: {venue}</p>
                    <p>Major: {details}</p>
                    <p>Graduated: {date}</p>
                    
                    {attach.name === "nofile" ? null : <p>Additional Info: <a href={attach.publicURL} target="_blank" rel="noreferrer" className="btn btn-primary">Get <HiOutlineDownload/></a></p>}
                  </div>
                  <div className="p-15 mt-4">
                    <p className="lead text-muted">Abstract</p>

                    <div className="justify" dangerouslySetInnerHTML={{ __html: abstract }} />
                  </div>
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
            </div>
          </main>
        </div>
      </section>
    </Layout>
  )
}

// Step 3: Export your component
export default MiscDetail

export const Head = ({ data }) => (
  <Seo title={data.publication.title} description={data.publication.abstract} />
)


export const query = graphql`
query CreatePublicationPage($slug: String) {
  publication: miscpubsJson(slug: {eq: $slug}) {
    title
    slug
    venue
    details
    abstract
    authors {
      slug
      name
      surname
    }
    attach {
      base
      name
      publicURL
    }
    date(formatString: "MMM, YYYY")
  }
}`
