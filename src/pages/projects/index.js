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
        <h1 className="fw-bold">Projects</h1>
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
                {image && (
                  <Link
                    to={`/projects${slug}`}
                    aria-label={`Read more: ${title}`}
                  >
                    <GatsbyImage
                      image={image}
                      alt={title}
                      className="blog-image"
                      imgClassName="blog-image"
                      loading="lazy"
                    />
                  </Link>
                )}
                <div className="blog-content">
                  <h3 className="blog-title">
                    <Link to={`/projects${slug}`} aria-label={`Read: ${title}`}>
                      {title}
                    </Link>
                  </h3>
                  <p className="blog-subtitle">{subtitle}</p>
                  <p className="blog-date">{date}</p>
                  <div className="skills-list mb-2">
                    {(skills || []).map(s => (
                      <span key={s} className="skill-badge">{s}</span>
                    ))}
                  </div>
                  {/* Tags removed per request */}
                  <Link to={`/projects${slug}`} className="read-more">
                    Read More →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <div className="text-center my-5">
        <hr className="custom-hr" />
        <Link to="/" className="btn btn-primary btn-lg">
          🏡 Back to Home
        </Link>
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
              img {
                childImageSharp {
                  gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    quality: 90
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`
