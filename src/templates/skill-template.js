import * as React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { Seo } from "../components/seo"

const SkillPage = ({ data, pageContext }) => {
  const { skill } = pageContext
  const projSkills = data.projectsSkills.edges
  const insSkills = data.insightsSkills.edges
  const publications = data.publications.nodes
  const misc = data.miscPublications.nodes

  // Merge projects (skills only) unique by slug
  const projectMap = new Map()
  ;[...projSkills].forEach(({ node }) => {
    const cmr = node.childMarkdownRemark
    if (!cmr) return
    const slug = cmr.fields.slug
    if (!projectMap.has(slug)) {
      projectMap.set(slug, cmr)
    }
  })
  const projects = Array.from(projectMap.values())

  // Merge insights (skills only) unique by slug
  const insightMap = new Map()
  ;[...insSkills].forEach(({ node }) => {
    const cmr = node.childMarkdownRemark
    if (!cmr) return
    const slug = cmr.fields.slug
    if (!insightMap.has(slug)) {
      insightMap.set(slug, cmr)
    }
  })
  const insights = Array.from(insightMap.values())

  const hasAny = projects.length + insights.length + publications.length + misc.length > 0

  return (
    <Layout>
      <section className="text-center py-5">
        <h1 className="fw-bold">Skill: {skill}</h1>
        <hr className="custom-hr" />
      </section>

      {!hasAny && (
        <div className="container text-center">
          <p className="text-muted">No items found for this skill yet.</p>
        </div>
      )}

      {hasAny && (
        <section className="container mb-5">
          <h2 className="fw-semibold mb-3">Items</h2>
          <div className="blog-grid">
            {[
              ...projects.map(cmr => ({
                type: "Work",
                title: cmr.frontmatter.title,
                subtitle: cmr.frontmatter.subtitle,
                date: cmr.frontmatter.date,
                dateRaw: cmr.frontmatter.dateRaw,
                href: `/projects${cmr.fields.slug}`,
              })),
              ...insights.map(cmr => ({
                type: "Insight",
                title: cmr.frontmatter.title,
                subtitle: cmr.frontmatter.subtitle,
                date: cmr.frontmatter.date,
                dateRaw: cmr.frontmatter.dateRaw,
                href: `/insights${cmr.fields.slug}`,
              })),
              ...publications.map(pub => ({
                type: "Publication",
                title: pub.title,
                subtitle: pub.venue,
                date: pub.date,
                dateRaw: pub.dateRaw,
                href: `/publications/${pub.slug}`,
              })),
              ...misc.map(m => ({
                type: "Miscellaneous",
                title: m.title,
                subtitle: m.venue || m.type,
                date: m.date,
                dateRaw: m.dateRaw,
                href: m.attach?.publicURL ? m.attach.publicURL : `/publications/${m.slug}`,
              })),
            ]
              .sort((a, b) => new Date(b.dateRaw || b.date) - new Date(a.dateRaw || a.date))
              .map(item => (
                <div key={`${item.type}-${item.href}`} className="blog-card">
                  <div className="blog-content">
                    <div className="skills-list mb-2">
                      <span className="skill-badge" aria-label={`Type: ${item.type}`}>{item.type}</span>
                    </div>
                    <h3 className="blog-title">
                      <Link to={item.href}>{item.title}</Link>
                    </h3>
                    {item.subtitle && <p className="blog-subtitle">{item.subtitle}</p>}
                    <p className="blog-date">{item.date}</p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}

      <div className="text-center my-5">
        <hr className="custom-hr" />
        <Link to="/" className="btn btn-primary btn-lg">🏡 Back to Home</Link>
      </div>
    </Layout>
  )
}

export default SkillPage

export const Head = ({ pageContext }) => <Seo title={`Skill: ${pageContext.skill}`} />

export const query = graphql`
  query SkillPage($skill: String!) {
    projectsSkills: allFile(
      filter: { sourceInstanceName: { eq: "projects" }, childrenMarkdownRemark: { elemMatch: { frontmatter: { skills: { in: [$skill] } } } } }
      sort: { childrenMarkdownRemark: { frontmatter: { date: DESC } } }
    ) {
      edges { node { childMarkdownRemark { fields { slug } frontmatter { title subtitle date(formatString: "DD MMM, YYYY") dateRaw: date(formatString: "YYYY-MM-DD") skills } } } }
    }
    insightsSkills: allFile(
      filter: { sourceInstanceName: { eq: "insights" }, childrenMarkdownRemark: { elemMatch: { frontmatter: { skills: { in: [$skill] } } } } }
      sort: { childrenMarkdownRemark: { frontmatter: { date: DESC } } }
    ) {
      edges { node { childMarkdownRemark { fields { slug } frontmatter { title subtitle date(formatString: "DD MMM, YYYY") dateRaw: date(formatString: "YYYY-MM-DD") skills } } } }
    }
    publications: allPublicationsJson(filter: { skills: { in: [$skill] } }, sort: { date: DESC }) {
      nodes { slug title venue date(formatString: "MMM YYYY") dateRaw: date(formatString: "YYYY-MM-DD") }
    }
    miscPublications: allMiscpubsJson(filter: { skills: { in: [$skill] } }, sort: { date: DESC }) {
      nodes { slug title venue type date(formatString: "MMM YYYY") dateRaw: date(formatString: "YYYY-MM-DD") attach { publicURL } }
    }
  }
`
