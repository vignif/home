import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import { Seo } from "../../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Projects = ({ data }) => {
  const projects = data.allFile.edges

  return (
    <Layout>
      <section className="text-center py-5">
        <h1 className="fw-semibold">Projects</h1>
        <hr className="custom-hr" />
      </section>

      <section className="container">
        <div className="masonry">
          {projects.map(({ node }) => {
            const { id, childMarkdownRemark } = node
            const { title, date, subtitle, img, tags, skills } =
              childMarkdownRemark.frontmatter
            const slug = childMarkdownRemark.fields.slug
            const image = getImage(img)

            return (
              <div key={id} className="blog-card">
                <div className="blog-content text-center">
                  <h5 className="card-title">
                    <Link to={`/projects${slug}`} aria-label={`Read: ${title}`}>
                      {title}
                    </Link>
                  </h5>
                  <p className="blog-subtitle">{subtitle}</p>
                  <p className="blog-date">{date}</p>
                  <div className="skills-list mb-2">
                    {(skills || []).map(s => (
                      <span key={s} className="skill-badge">{s}</span>
                    ))}
                  </div>
                  {/* Tags removed per request */}
                  <Link to={`/projects${slug}`} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <div className="text-center my-4">
        <Link to="/" className="btn btn-sm btn-outline-secondary" aria-label="Go to home">← Home</Link>
      </div>
    </Layout>
  )
}

export default Projects

export const Head = () => <Seo title="Projects" />

export const query = graphql`
  query PROJECTS {
    allFile(
      filter: { sourceInstanceName: { eq: "projects" } }
      sort: { childrenMarkdownRemark: { frontmatter: { date: DESC } } }
    ) {
      edges {
        node {
          id
          childMarkdownRemark {
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "DD MMM, YYYY")
              subtitle
              tags
              skills
            }
          }
        }
      }
    }
  }
`
