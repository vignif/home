import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import { Seo } from "../../components/seo"
import SocialLinks from "../../components/socials"
import { HiDocumentText, HiOutlineSearch } from "react-icons/hi"
import _ from "lodash"
const skillSlug = s => String(s).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

// #TODO: handshake is a JOURNAL, is RAL! CHANGE IT!

const Publications = ({ data }) => {
  const tagCounts = _.countBy(
    data.tags.edges.map(edge => edge.node.skills).flat()
  )
  // console.log(data)
  const publications = data.publications.nodes
  // const tags = data.tags.group
  const misc = data.misc.nodes
  const tags = Object.keys(tagCounts).sort()

  const tagObjects = Object.keys(tagCounts).map(tag => ({
    name: tag,
    count: tagCounts[tag],
  }))

  const sortedTags = tagObjects.sort((a, b) => b.count - a.count)

  return (
    <Layout>
      <section className="text-center py-5">
        <h1 className="fw-bold">Publications</h1>
        <hr className="custom-hr" />
      </section>
      <div className="row">
        <div className="col-md-12">
          <hr className="hr-text" data-content="Conferences" />
        </div>
      </div>
      <div className="container own_sub_container">
        {publications.map(pub => {
          return (
            <div key={pub.id}>
              <>
                <div className="card m-3">
                  <div className="row card-body p-2 blog_cards">
                    <div className="col-md-10">
                      <p className="m-auto">{pub.title}</p>
                      {pub.authors.map((author, index) => (
                        <div key={author.id} className="authors_list fw-light">
                          {/* // put a comma between authors_list */}
                          {index > 0 && index <= 2 && pub.coFirstAuthors && "*"}
                          {index > 0 && index < pub.authors.length - 1 && ", "}
                          {index > 0 &&
                            index === pub.authors.length - 1 &&
                            " and "}
                          <p className="authors_list">
                            {author.name}{" "}
                            <a
                              href={author.web}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {author.surname}
                            </a>
                          </p>
                        </div>
                      ))}
                      <p className="m-auto fw-lighter">
                        {pub.venue} - {pub.date}
                      </p>
                      <div className="skills-list mt-2">
                        {(pub.tags || []).map(tag => (
                          <Link key={tag} to={`/skills/${skillSlug(tag)}`} className="skill-badge" aria-label={`Skill: ${tag}`}>{tag}</Link>
                        ))}
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div className="row">
                        {/* \\ if pub is "TBD" then don't show the button */}
                        {pub.abstract == "TBD" && (
                          <>
                            <div className="col text-center">
                              <a
                                href={pub.url}
                                target="_blank"
                                rel="noreferrer"
                                className="btn disabled me-2"
                              >
                                Not Yet Presented
                              </a>
                            </div>
                          </>
                        )}
                        {pub.abstract != "TBD" && (
                          <>
                            <div className="col text-center">
                              {/* <a href={pub.url} rel="noreferrer" className="btn btn-outline-primary"><HiDocumentText />&nbsp;Paper</a> */}

                              <div>
                                {pub.url !== "" ? (
                                  <a
                                    href={pub.url}
                                    rel="noreferrer"
                                    target="_blank"
                                    className="btn btn-outline-primary"
                                  >
                                    <HiDocumentText />
                                    &nbsp;Paper
                                  </a>
                                ) : (
                                  <span className="btn btn-outline-primary disabled">
                                    <HiDocumentText />
                                    &nbsp;Paper
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="col text-center">
                              <Link
                                to={`/publications/${pub.slug}`}
                                className="btn btn-outline-primary me-2"
                              >
                                <HiOutlineSearch />
                                &nbsp;Info
                              </Link>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="skills-list mt-2">
                        {(pub.tags || []).map(tag => (
                          <Link key={tag} to={`/skills/${skillSlug(tag)}`} className="skill-badge" aria-label={`Skill: ${tag}`}>{tag}</Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
          )
        })}
      </div>

      <div className="row">
        <div className="col-md-12">
          <hr className="hr-text" data-content="Miscellaneous" />
        </div>
      </div>

      <div className="container own_sub_container">
        {misc.map(pub => {
          return (
            <div key={pub.id}>
              <>
                <div className="card m-3">
                  <div className="row card-body p-2 blog_cards">
                    <div className="col-md-10">
                      <p className="m-auto">{pub.title}</p>
                      {pub.authors.map((author, index) => (
                        <div key={author.id} className="authors_list fw-light">
                          {/* // put a comma between authors_list */}
                          {index > 0 && index < pub.authors.length - 1 && ", "}
                          {index > 0 &&
                            index === pub.authors.length - 1 &&
                            " and "}
                          <p className="authors_list">
                            {author.name}{" "}
                            <a
                              href={author.web}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {author.surname}
                            </a>
                          </p>
                        </div>
                      ))}
                      <p className="m-auto fw-lighter">
                        {pub.type} - {pub.date}
                      </p>
                    </div>

                    <div className="col-md-2">
                      <div className="row">
                        <>
                          <div className="col text-center">
                            <div>
                              {pub.attach && (
                                <a
                                  href={pub.attach.publicURL}
                                  rel="noreferrer"
                                  target="_blank"
                                  className="btn btn-outline-primary"
                                >
                                  <HiDocumentText />
                                  &nbsp;Paper
                                </a>
                              )}
                            </div>
                          </div>
                          <div className="col text-center">
                            <Link
                              to={`/publications/${pub.slug}`}
                              className="btn btn-outline-primary me-2"
                            >
                              <HiOutlineSearch />
                              &nbsp;Info
                            </Link>
                          </div>
                        </>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
          )
        })}
      </div>

      <div className="row">
        <div className="col-md-12">
          <hr className="hr-text" data-content="Tags" />
        </div>
      </div>

      <div className="row pb-5">
        <div className="col">
          {sortedTags.map(tagObj => (
            <div key={tagObj.name} className="authors_list fw-light col-2">
              <Link className="btn btn-warning m-2" to={`/skills/${skillSlug(tagObj.name)}`}>
                {tagObj.name} ({tagObj.count})
              </Link>
            </div>
          ))}
        </div>

        <div className="col-md-12 p-2">
          <Link to={`/projects/tags/`} className="btn btn-primary m-2">
            Project Tags
          </Link>
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
    </Layout>
  )
}

export default Publications

export const Head = () => <Seo title="Publications" />

// export page query
export const query = graphql`
  query GetPublications {
    publications: allPublicationsJson(sort: { date: DESC }) {
      nodes {
        id
        authors {
          id
          name
          surname
          web
          slug
        }
        coFirstAuthors
        abstract
        slug
        location
        title
        url
        venue
        date(formatString: "MMM YYYY")
      }
    }
    tags: allPublicationsJson {
      edges {
        node {
          skills
        }
      }
    }
    misc: allMiscpubsJson {
      nodes {
        id
        title
        date(formatString: "MMM YYYY")
        slug
        attach {
          name
          publicURL
        }
        type
        authors {
          id
          name
          surname
          web
        }
      }
    }
  }
`
