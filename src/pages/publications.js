import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Seo } from "../components/seo"

const Publications = ({ data }) => {
  const publications = data.allPublicationsJson.nodes
  return (
    <Layout>


      <section className="py-5 text-center container own_container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Publications</h1>
            <p className="lead text-muted">Stand on the shoulders of giants</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="Conferences" />
          </div>
        </div>
        <div className="container own_sub_container">
          {publications.map(pub => (
            console.log(pub.authors),
            <div key={pub.id}>
              <>
                <div className="row">
                  <div className="col-8" style={{ padding: 0 + 'em' }}>
                    <h5>{pub.title}</h5>
                    <p>{pub.date}</p>

                    {
                      pub.authors.map((author, index) => (
                        console.log(author),
                        console.log(index),
                        console.log(pub.authors.length),
                        <div key={author.id} className="authors_list">

                          {/* // put a comma between authors_list */}
                          {index > 0 && index < pub.authors.length - 1 && ", "}
                          {index > 0 && index === pub.authors.length - 1 && " and "}
                          <p className="authors_list">{author.name} <a href={author.web}>{author.surname}</a></p>
                        </div>
                      ))}
                  </div>
                  <div className="col-4 text-end">
                    <Link to={`/publications/${pub.slug}`} className="btn btn-link">More Info
                    </Link>
                    <a href={pub.url} className="btn btn-link" target="_blank" rel="noreferrer">Paper</a>
                  </div>
                </div>
                <hr />
              </>
            </div>
          ))}
        </div>
        <Link to="/">Go back to the homepage</Link>
      </section>
    </Layout>
  )
}

export default Publications

export const Head = () => (
  <Seo title="Scientific publications of Francesco Vigni" />
)


// export page query
export const query = graphql`
query GetPublications {
  allPublicationsJson (sort: {date: DESC}) {
      nodes {
        id
        authors{
          id
          name
          surname
          web
          slug
        }
        abstract
        slug
        tags
        title
        url
        venue
      }
    }
}`