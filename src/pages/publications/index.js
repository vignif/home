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
        <h1 className="fw-semibold">Publications</h1>
        <hr className="custom-hr" />
      </section>

      <hr className="hr-text" data-content="Conferences" />
      <div className="publications-list container">
        {publications.map(pub => (
          <div key={pub.id} className="pub-card card m-3">
            <div className="pub-row row card-body p-2">
              <div className="pub-main col-md-10">
                <p className="pub-title m-auto">{pub.title}</p>
                {pub.authors.map((author, index) => (
                  <span key={author.id} className="pub-author fw-light">
                    {index > 0 && index <= 2 && pub.coFirstAuthors && "*"}
                    {index > 0 && index < pub.authors.length - 1 && ", "}
                    {index > 0 && index === pub.authors.length - 1 && " and "}
                    <span className="pub-author-name">
                      {author.name}{" "}
                      <a href={author.web} target="_blank" rel="noreferrer">
                        {author.surname}
                      </a>
                    </span>
                  </span>
                ))}
                <p className="pub-meta m-auto fw-lighter">
                  {pub.venue} - {pub.date}
                </p>
                <div className="skills-list mt-2">
                  {(pub.tags || []).map(tag => (
                    <Link key={tag} to={`/skills/${skillSlug(tag)}`} className="skill-badge" aria-label={`Skill: ${tag}`}>{tag}</Link>
                  ))}
                </div>
              </div>
              <div className="pub-actions col-md-2">
                <div className="pub-actions-row row">
                  {pub.abstract == "TBD" ? (
                    <div className="col text-center">
                      <span className="btn disabled me-2">Not Yet Presented</span>
                    </div>
                  ) : (
                    <>
                      <div className="col text-center">
                        {pub.url !== "" ? (
                          <a href={pub.url} rel="noreferrer" target="_blank" className="btn">
                            <HiDocumentText />&nbsp;Paper
                          </a>
                        ) : (
                          <span className="btn disabled">
                            <HiDocumentText />&nbsp;Paper
                          </span>
                        )}
                      </div>
                      <div className="col text-center">
                        <Link to={`/publications/${pub.slug}`} className="btn me-2">
                          <HiOutlineSearch />&nbsp;Info
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
        ))}
      </div>

      <hr className="hr-text" data-content="Miscellaneous" />
      <div className="misc-list container">
        {misc.map(pub => (
          <div key={pub.id} className="pub-card card m-3">
            <div className="pub-row row card-body p-2">
              <div className="pub-main col-md-10">
                <p className="pub-title m-auto">{pub.title}</p>
                {pub.authors.map((author, index) => (
                  <span key={author.id} className="pub-author fw-light">
                    {index > 0 && index < pub.authors.length - 1 && ", "}
                    {index > 0 && index === pub.authors.length - 1 && " and "}
                    <span className="pub-author-name">
                      {author.name}{" "}
                      <a href={author.web} target="_blank" rel="noreferrer">
                        {author.surname}
                      </a>
                    </span>
                  </span>
                ))}
                <p className="pub-meta m-auto fw-lighter">
                  {pub.type} - {pub.date}
                </p>
              </div>
              <div className="pub-actions col-md-2">
                <div className="pub-actions-row row">
                  <div className="col text-center">
                    {pub.attach && (
                      <a href={pub.attach.publicURL} rel="noreferrer" target="_blank" className="btn">
                        <HiDocumentText />&nbsp;Paper
                      </a>
                    )}
                  </div>
                  <div className="col text-center">
                    <Link to={`/publications/${pub.slug}`} className="btn me-2">
                      <HiOutlineSearch />&nbsp;Info
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="hr-text" data-content="Tags" />
      <div className="tags-list row pb-5">
        <div className="col">
          {sortedTags.map(tagObj => (
            <span key={tagObj.name} className="pub-tag authors_list fw-light col-2">
              <Link className="btn btn-warning m-2" to={`/skills/${skillSlug(tagObj.name)}`}>
                {tagObj.name} ({tagObj.count})
              </Link>
            </span>
          ))}
        </div>
        <div className="col-md-12 p-2">
          <Link to={`/projects/tags/`} className="btn btn-primary m-2">
            Project Tags
          </Link>
        </div>
      </div>

      <hr className="hr-text" />
      <div className="text-center pb-4">
        <Link to="/">Go back to the homepage</Link>
      </div>
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
