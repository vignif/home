// React-related imports
import React, { useMemo } from "react"

// Gatsby-related imports
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// React Icons
import { HiLink } from "react-icons/hi"

// Components
import Layout from "../components/layout"
import { Seo } from "../components/seo"
// AudioButton import removed (unused)

// Custom Hooks
// useSiteMetadata import removed (unused)

// Video imports
// Demo video imports removed (unused)

// Legacy static stacks removed; dynamic grouping is used below

// Legacy static stacks removed; dynamic grouping is used below

const IndexPage = ({ data }) => {
  const skillSlug = s => String(s).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
  // Removed unused site metadata
  const news = useMemo(() => data.news.nodes, [data.news.nodes])
  const cvs = useMemo(() => data.cv.nodes, [data.cv.nodes])
  const projectNodes = useMemo(() => data.projects?.nodes || [], [data.projects])
  const blogNodes = useMemo(() => data.blogs?.nodes || [], [data.blogs])
  const pubSkills = useMemo(() => data.publications?.nodes || [], [data.publications])
  const miscSkills = useMemo(() => data.miscpubs?.nodes || [], [data.miscpubs])

  // Skills are used as-is (no normalization)

  const skillCounts = useMemo(() => {
    const counts = {}
    // Projects: count skills only
    projectNodes.forEach(n => {
      const fm = n.childMarkdownRemark?.frontmatter || {}
      ;(fm.skills || []).forEach(s => {
        const key = s
        if (!key) return
        counts[key] = (counts[key] || 0) + 1
      })
    })
    // Blogs: count skills only
    blogNodes.forEach(n => {
      const fm = n.childMarkdownRemark?.frontmatter || {}
      ;(fm.skills || []).forEach(s => {
        const key = s
        if (!key) return
        counts[key] = (counts[key] || 0) + 1
      })
    })
    // Publications & miscpubs: already mapped to canonical skills
    pubSkills.forEach(node => {
      (node.skills || []).forEach(s => {
        const key = s
        if (!key) return
        counts[key] = (counts[key] || 0) + 1
      })
    })
    miscSkills.forEach(node => {
      (node.skills || []).forEach(s => {
        const key = s
        if (!key) return
        counts[key] = (counts[key] || 0) + 1
      })
    })
    return counts
  }, [projectNodes, blogNodes, pubSkills, miscSkills])
  // Clean, dynamic grouping based on used skills only
 const groupFor = k => {
  const t = String(k).toLowerCase()

  if ([
    "python", "c++", "git", "unix",
    "docker", "ci/cd",
    "fastapi", "flask",
    "nodejs", "gatsby", "next.js",
    "typescript", "sqlite",
    "mqtt", "webrtc", "websocket",
    "caddy", "qr code"
  ].includes(t)) return "Engineering Stack"

  if ([
    "turtlebot",
    "nvidia jetson",
    "pisa/iit hand",
    "protom classmate",
    "pal robotics ari",
    "pal robotics tiago",
    "aldebaran pepper",
    "lidar", 
    "imu",
    "arduino"
  ].includes(t)) return "Robotics Systems"

  if ([
    "ros", "ros2",
    "moveit", "nav2",
    "gazebo", "rviz",
    "carla simulator",
    "slam",
    "motion planning",
    "localization",
    "simulation",
    "coppeliasim"
  ].includes(t)) return "Robot Software & Autonomy"

  if ([
    "pytorch", "torchvision",
    "tensorflow",
    "yolo", "groundingdino",
    "opencv", "computer vision",
    "dataset reliability",
    "numpy / scipy",
    "pandas",
    "scikit-learn",
    "matplotlib / seaborn",
    "data engineering",
    "ntp sync"
  ].includes(t)) return "Applied Machine Learning"

  if ([
    "academic writing & editing",
    "experimental design",
    "statistical analysis",
    "metrics",
    "hri",
    "affective computing",
    "handshake",
    "ieee roman",
    "icsr",
    "ieee icra",
    "acm/ieee hri"
  ].includes(t)) return "Research & Experimentation"

  if ([
    "finance",
    "garch",
    "autonomous driving",
    "social robot",
    "humanoid",
    "non-humanoid"
  ].includes(t)) return "Additional Domains & Technologies"

  return "Additional Domains & Technologies"
}

  const usedSkills = useMemo(() => Object.keys(skillCounts).filter(k => (skillCounts[k] || 0) > 0), [skillCounts])
  const grouped = usedSkills.reduce((acc, key) => {
    const g = groupFor(key)
    if (!acc[g]) acc[g] = []
    acc[g].push(key)
    return acc
  }, {})
  const groupOrder = {
    "Engineering Stack": 0,
    "Robotics Systems": 1,
    "Robot Software & Autonomy": 2,
    "Applied Machine Learning": 3,
    "Research & Experimentation": 4,
    "Additional Domains & Technologies": 5,
  }
  const skillsGroups = Object.entries(grouped)
    .map(([title, items]) => ({ title, items: items.sort((a, b) => (skillCounts[b] - skillCounts[a]) || a.localeCompare(b)) }))
    .sort((a, b) => (groupOrder[a.title] ?? 999) - (groupOrder[b.title] ?? 999) || a.title.localeCompare(b.title))

  // Dynamic groups cover all used skills; no remaining list needed

  return (
    <Layout>
      <div className="row py-lg-3 pb-0">
        <div className="col-sm-8 mx-auto" style={{ textAlign: "start" }}>
          <h2>Francesco Vigni, Ph.D.</h2>
          <p className="text-muted mb-0" style={{ fontSize: "small" }}>
            <a href="https://ipa-reader.com/?text=fran%CB%88t%CD%A1%CA%83e.sko%20%CB%88vi.%C9%B2i&voice=Bianca" target="_blank" rel="noreferrer" className="text-muted">
            /franˈt͡ʃe.sko ˈvi.ɲi/
            </a>
          </p>
          <p className="text-muted">
            he/him{" "}
            <a
              href="https://englishexplorations.check.uni-hamburg.de/academic-writing-how-do-we-use-gender-inclusive-language-in-academic-writing/"
              target="_blank"
              rel="noreferrer"
              className="text-muted"
              style={{ fontSize: "small" }}
            >
              why?
            </a>
          </p>
          <p className="justify">
            Freelance Machine Learning Engineer (Ing.)
            with a Ph.D. and research background in Human-Robot Interaction and Robotics.
            I design and deploy production-ready ML systems using real-world data.
            <br />
            Based in Italy · Available worldwide for remote work · UTC+1
          </p>
        </div>
        <div className="col-sm-4 ms-auto mb-3">
          <StaticImage
            src="../../data/images/EC9_8572.jpg"
            width={200}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="Francesco Vigni"
            className="img-fluid profilepic"
          />
          
        </div>
        
      </div>

      <hr className="hr-text" data-content="Skills" />
      <div className="skills-masonry">
        {skillsGroups.map(group => (
          <div className="card" key={group.title}>
            <div className="card-content">
              <h5 className="card-title">{group.title}</h5>
              <div className="skills-list">
                {group.items.map(item => (
                  <Link key={item} to={`/skills/${skillSlug(item)}`} className="skill-badge" aria-label={`Skill: ${item}`}>
                    {item}
                    <span className="skill-count">{skillCounts[item] || 0}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic grouping lists all skills with count > 0 */}

      <hr className="hr-text" data-content="News" />
      {news.map(node => (
        <div key={node.id} className="row">
          <div className="col-sm-2 own_sub_container">
            <p className="own_date">
              {node.childMarkdownRemark.frontmatter.date}
            </p>
          </div>
          <div className="col-md-10">
            <div
              className="justify"
              dangerouslySetInnerHTML={{
                __html: node.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      ))}

      <hr className="hr-text" data-content="Step by step" />
      <div className="py-5 main-timeline">
        {cvs.map((cv, index) => (
          <div
            key={cv.id}
            className={`timeline ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="card">
              <div className="card-body p-2">
                <h5>{cv.title}</h5>
                <p className="mb-0">
                  <a
                    href={cv.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Link to ${cv.title}`}
                  >
                    <HiLink />
                  </a>
                  {cv.employer} - {cv.where}
                </p>
                <p className="mb-0 fw-light">
                  {cv.date_end && cv.date_end !== "Invalid date"
                    ? `${cv.date_start} - ${cv.date_end}`
                    : cv.date_start}
                </p>
                <p className="mb-0 fw-light">{cv.extra}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
export const Head = () => <Seo />

export const query = graphql`
  query NewsCV {
    news: allFile(
      filter: { sourceInstanceName: { eq: "news" } }
      sort: { childrenMarkdownRemark: { frontmatter: { date: DESC } } }
      limit: 4
    ) {
      nodes {
        id
        childMarkdownRemark {
          frontmatter {
            date(formatString: "DD MMM, YYYY")
          }
          html
        }
      }
    }
    cv: allCvJson {
      nodes {
        id
        employer
        date_start(formatString: "MMM, YYYY")
        date_end(formatString: "MMM, YYYY")
        title
        url
        where
        extra
      }
    }
    projects: allFile(
      filter: { sourceInstanceName: { eq: "projects" } }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter { skills }
        }
      }
    }
    blogs: allFile(
      filter: { sourceInstanceName: { eq: "insights" } }
      sort: { childrenMarkdownRemark: { frontmatter: { date: DESC } } }
      limit: 100
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter { skills }
        }
      }
    }
    publications: allPublicationsJson {
      nodes { skills }
    }
    miscpubs: allMiscpubsJson {
      nodes { skills }
    }
  }
`
