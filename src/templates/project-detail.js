import * as React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import { Seo } from "../components/seo"
import { HiOutlineArrowCircleRight, HiOutlineArrowCircleLeft } from "react-icons/hi"

const ProjectDetail = ({ data, pageContext }) => {
  const { previous, next } = pageContext
  const project = data.file.childMarkdownRemark
  const { title, subtitle, date, img, tags, skills } = project.frontmatter
  const content = project.html
  const image = getImage(img)

  const prevSlug = previous?.childMarkdownRemark?.fields?.slug || ""
  const nextSlug = next?.childMarkdownRemark?.fields?.slug || ""

  return (
    <Layout>
      <div className="row blog_header ">
        {image && <GatsbyImage image={image} alt="" className="imgBlogTitle" />}
        <div className="overlay blog_title animate-charcter">{title}</div>
        {subtitle && <div className="overlay blog_subtitle">{subtitle}</div>}
      </div>
      <div className="row">
        <div className="col-md-12">
          <hr className="hr-text" data-content={date} />
        </div>
      </div>
      <div className="container own_sub_container">
        <main className="spotlight">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="p-15 mt-4">
                  <div className="skills-list mb-3">
                    {(skills || []).map(s => (
                      <span key={s} className="skill-badge">{s}</span>
                    ))}
                  </div>
                  {/* Tags removed per request */}
                  <div className="justify" dangerouslySetInnerHTML={{ __html: content }} />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col text-start">
                {prevSlug && (
                  <Link to={`/projects${prevSlug}`} className="btn btn-outline-primary">
                    <HiOutlineArrowCircleLeft />
                    &nbsp;Newer
                  </Link>
                )}
              </div>
              <div className="col text-end">
                {nextSlug && (
                  <Link to={`/projects${nextSlug}`} className="btn btn-outline-primary">
                    <HiOutlineArrowCircleRight />
                    &nbsp;Older
                  </Link>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default ProjectDetail

export const Head = ({ data }) => (
  <Seo title={"FV - Work - " + data.file.childMarkdownRemark.frontmatter.title} />
)

export const query = graphql`
  query GetProject($slug: String) {
    file(
      sourceInstanceName: { eq: "projects" }
      childMarkdownRemark: { fields: { slug: { eq: $slug } } }
    ) {
      childMarkdownRemark {
        fields { slug }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          subtitle
          tags
          skills
          img {
            childImageSharp {
              gatsbyImageData(
                width: 1000
                placeholder: BLURRED
                quality: 100
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        html
      }
    }
  }
`
