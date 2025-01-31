import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import { HiDocumentText, HiOutlineSearch } from 'react-icons/hi';
import { Link } from "gatsby"

const TagTemplate = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allPublicationsJson

  return (

    <Layout>
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light"><pre>find / -tag "{tag}"</pre></h1>
            {/* find / -tag "{tag}" */}
            {/* <h1 className="fw-light">{totalCount} Publication{totalCount === 1 ? "" : "s"}  */}
            <p className="lead text-muted"></p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="" />
          </div>
        </div>


        <div className="row pb-5">
          <div className="col-md-12">
            {edges.map(({ node }) => {
              console.log(node)
              const { title, date, venue, location } = node
              return (
                <div key={node.slug}>
                  <>
                    <div className="card m-3">
                      <div className="row card-body p-2 blog_cards">

                        <div className="col-md-10 text-start">
                          <b className="m-auto">{title}</b>
                          <p>{venue} - {location}</p>
                        </div>

                        <div className="col-md-2">
                          <div className="row">
                            <div className="col text-center">
                              <a href={node.url} target="_blank" rel="noreferrer" className="btn btn-outline-primary"><HiDocumentText />&nbsp;Paper</a>
                            </div>
                            <div className="col text-center">
                              <Link to={`/publications/${node.slug}`} className="btn btn-outline-primary me-2"><HiOutlineSearch />&nbsp;Info
                              </Link>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </>
                </div>
              )
            })}

          </div>
        </div>
        <div className="col-md-12 p-2">
          <Link to={`/tags/`} className="btn btn-primary m-2">All Tags</Link>
        </div>
    </Layout>
  )
}

TagTemplate.propTypes = {
  data: PropTypes.shape({
    allPublicationsJson: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            title: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
          }),
        })
      ),
      totalCount: PropTypes.number.isRequired,
    }),
  }),
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
}

export default TagTemplate

export const Head = ({ data, pageContext }) => (
  console.log("here"),
  console.log(pageContext),
  <Seo title={"FV - tag - " + pageContext.tag} />
)

export const pageQuery = graphql`
  query($tag: String) {
    allPublicationsJson(filter: { tags: { in: [$tag] } }) {
      edges {
        node {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
          url
          venue
          location
          authors{
            id
            name
            surname
            web
            slug
          }
        }
      }
      totalCount
    }
  }
`
