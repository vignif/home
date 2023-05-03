import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import { Seo } from "../../components/seo"
import { HiDocumentText, HiOutlineSearch } from 'react-icons/hi';

const Publications = ({ data }) => {
  // console.log(data)
  const publications = data.publications.nodes
  const tags = data.tags.group
  const misc = data.misc.nodes
  // console.log(data.misc)
  return (
    <Layout>

      <section className="py-5 text-center container own_container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Publications</h1>
            <p className="lead text-muted">Climbing the shoulders of giants</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="Conferences" />
          </div>
        </div>
        <div className="container own_sub_container">
          {publications.map(pub => {
            // const date = pub.node.childMarkdownRemark.frontmatter.date;
            // const title = pub.node.childMarkdownRemark.frontmatter.title;
            return (
              <div key={pub.id}>
                <>

                  <div className="card m-3">
                    <div className="row card-body p-2 blog_cards">
                      {/* <div className="col-sm-2 own_sub_container">
                          <p className="own_date">{pub.date}</p>
                        </div> */}

                      <div className="col-md-10">
                        <p className="m-auto">{pub.title}</p>
                        {
                          pub.authors.map((author, index) => (
                            <div key={author.id} className="authors_list fw-light">

                              {/* // put a comma between authors_list */}
                              {index > 0 && index < pub.authors.length - 1 && ", "}
                              {index > 0 && index === pub.authors.length - 1 && " and "}
                              <p className="authors_list">{author.name} <a href={author.web} target="_blank" rel="noreferrer">{author.surname}</a></p>
                            </div>
                          ))}
                        <p className="m-auto fw-lighter">{pub.venue} - {pub.date}</p>
                      </div>

                      <div className="col-md-2">
                        <div className="row">
                          <div className="col text-center">
                            <a href={pub.url} target="_blank" rel="noreferrer" className="btn btn-outline-primary"><HiDocumentText />&nbsp;Paper</a>
                          </div>
                          <div className="col text-center">
                            <Link to={`/publications/${pub.slug}`} className="btn btn-outline-primary me-2"><HiOutlineSearch />&nbsp;Info
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
        </div>

        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="Miscellaneous" />
          </div>
        </div>

        <div className="container own_sub_container">
          {misc.map(pub => {
            // const date = pub.node.childMarkdownRemark.frontmatter.date;
            // const title = pub.node.childMarkdownRemark.frontmatter.title;
            return (
              <div key={pub.id}>
                <>

                  <div className="card m-3">
                    <div className="row card-body p-2 blog_cards">
                      <div className="col-md-10">
                        <p className="m-auto">{pub.title}</p>
                        {
                          pub.authors.map((author, index) => (
                            <div key={author.id} className="authors_list fw-light">
                              {index > 0 && index < pub.authors.length - 1 && ", "}
                              {index > 0 && index === pub.authors.length - 1 && " and "}
                              <p className="authors_list">{author.name} <a href={author.web} target="_blank" rel="noreferrer">{author.surname}</a></p>
                            </div>
                          ))}
                        <p className="m-auto fw-lighter">{pub.venue}</p>
                        <p className="m-auto fw-lighter">{pub.type} - {pub.date}</p>
                      </div>

                      <div className="col-md-2">
                        <div className="row">
                          <div className="col text-center">
                            {console.log(pub)}
                            <a href={pub.attach.publicURL} target="_blank" rel="noreferrer" className="btn btn-outline-primary"><HiDocumentText /><br/>Get</a>
                          </div>
                          <div className="col text-center">
                            <Link to={`/publications/${pub.slug}`} className="btn btn-outline-primary me-2"><HiOutlineSearch />&nbsp;Info
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
        </div>


        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="Tags" />
          </div>
        </div>

        <div className="row pb-5">
          <div className="col-md-12">
            {
              tags.map(tag => (
                <div key={tag.fieldValue} className="authors_list fw-light">
                  <Link to={`/tags/${tag.fieldValue}`} className="btn btn-warning m-2">{tag.fieldValue}</Link>
                </div>
              ))}
          </div>
          <div className="col-md-12 p-2">
            <Link to={`/tags/`} className="btn btn-primary m-2">All Tags</Link>

          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="" />
          </div>
        </div>

        <center>
          <Link to="/">Go back to the homepage</Link>
        </center>

      </section>
    </Layout>
  )
}

export default Publications

export const Head = () => (
  <Seo title="Publications" />
)


// export page query
export const query = graphql`
query GetPublications {
  publications: allPublicationsJson (sort: {date: DESC}) {
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
        date(formatString: "MMM YYYY")
      }
    }
  tags: allPublicationsJson {
    group(field: {tags: SELECT}) {
      fieldValue
    }
    totalCount
  }
  misc: allMiscpubsJson {
    nodes {
      id
      title
      date(formatString: "MMM YYYY")
      slug
      attach{
        name
        publicURL
      }
      type
      authors{
          id
          name
          surname
          web
        }
    }
  }
}`