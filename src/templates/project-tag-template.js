import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Seo } from "../components/seo"

const ProjectTagTemplate = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allFile

  return (
    <Layout>
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">
            <pre>find /projects -tag "{tag}"</pre>
          </h1>
        </div>
      </div>

      <div className="row pb-5">
        <div className="col-md-12">
          {edges.map(({ node }) => {
            const fm = node.childMarkdownRemark.frontmatter
            const slug = node.childMarkdownRemark.fields.slug
            return (
              <div key={node.id} className="card m-3">
                <div className="row card-body p-2 blog_cards">
                  <div className="col-md-8 text-start">
                    <b className="m-auto">{fm.title}</b>
                    <p className="mb-1 text-muted">{fm.subtitle}</p>
                    <div className="skills-list mb-2">
                      {(fm.skills || []).map(s => (
                        <span key={s} className="skill-badge">{s}</span>
                      ))}
                    </div>
                    <div className="skills-list">
                      {(fm.tags || []).map(t => (
                        <span key={t} className="skill-badge">#{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-4 text-end">
                    <Link to={`/projects${slug}`} className="btn btn-outline-primary me-2">Read</Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="col-md-12 p-2">
        <Link to={`/projects`} className="btn btn-primary m-2">All Work</Link>
      </div>
    </Layout>
  )
}

ProjectTagTemplate.propTypes = {
  data: PropTypes.shape({
    allFile: PropTypes.shape({
      edges: PropTypes.array,
      totalCount: PropTypes.number,
    }),
  }),
  pageContext: PropTypes.shape({ tag: PropTypes.string.isRequired }),
}

export default ProjectTagTemplate

export const Head = ({ pageContext }) => (
  <Seo title={`FV - Work - tag - ${pageContext.tag}`} />
)

export const pageQuery = graphql`
  query ($tag: String) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "projects" },
        childMarkdownRemark: { frontmatter: { tags: { in: [$tag] } } }
      }
    ) {
      edges {
        node {
          id
          childMarkdownRemark {
            fields { slug }
            frontmatter { title subtitle tags skills }
          }
        }
      }
      totalCount
    }
  }
`
