import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import { Seo } from "../../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const skillSlug = s => String(s).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

const Insights = ({ data }) => {
  const posts = data.allFile.edges

  return (
    <Layout>
      <section className="text-center py-5">
        <h1 className="fw-semibold">Insights</h1>
        <hr className="custom-hr" />
      </section>

      <section className="container">
        <div className="blog-grid">
          {posts.map(({ node }, idx) => {
            const { id, childMarkdownRemark } = node
            const { title, date, subtitle, img } = childMarkdownRemark.frontmatter
            const slug = childMarkdownRemark.fields.slug
            const image = getImage(img?.childImageSharp?.gatsbyImageData || img)

            return (
              <div key={id} className="blog-card">
                {image && (
                  <Link to={`/insights${slug}`} aria-label={`Read more: ${title}`}>
                    <GatsbyImage
                      image={image}
                      alt={title}
                      className="blog-image"
                      imgClassName="blog-image"
                      loading={idx < 4 ? "eager" : "lazy"}
                    />
                  </Link>
                )}
                <div className="blog-content">
                  <h3 className="blog-title">
                    <Link to={`/insights${slug}`} aria-label={`Read: ${title}`}>
                      {title}
                    </Link>
                  </h3>
                  <p className="blog-subtitle">{subtitle}</p>
                  <p className="blog-date">{date}</p>
                  {childMarkdownRemark.frontmatter.skills && childMarkdownRemark.frontmatter.skills.length > 0 && (
                    <div className="skills-list mt-1">
                      {childMarkdownRemark.frontmatter.skills.map(s => (
                        <Link key={s} to={`/skills/${skillSlug(s)}`} className="skill-badge" aria-label={`Skill: ${s}`}>{s}</Link>
                      ))}
                    </div>
                  )}
                  <Link to={`/insights${slug}`} className="read-more">Read More →</Link>
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

export default Insights

export const Head = () => <Seo title="Insights" />

export const query = graphql`
  query INSIGHTS {
    allFile(
      filter: { sourceInstanceName: { eq: "insights" } }
      sort: { childrenMarkdownRemark: { frontmatter: { date: DESC } } }
    ) {
      edges {
        node {
          id
          childMarkdownRemark {
            fields { slug }
            frontmatter {
              title
              date(formatString: "DD MMM, YYYY")
              subtitle
              img {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    width: 960
                    placeholder: BLURRED
                    quality: 95
                    transformOptions: { cropFocus: ATTENTION }
                    formats: [AUTO, WEBP]
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