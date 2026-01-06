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
import AudioButton from "../components/play_audio"

// Custom Hooks
import { useSiteMetadata } from "../hooks/use-site-metadata"

// Video imports
import carlaVideo from "../../data/videos/carla.mp4"
import handVideo from "../../data/videos/hand_compressed.mp4"
import handShakeVideo from "../../data/videos/handshake_compressed.mp4"
import beerVideo from "../../data/videos/beer_compressed.mp4"

const researchStack = [
  // Core Research Areas
  "Human-Robot Interaction (HRI)",
  "Robotics",
  "Artificial Intelligence",
  "Computer Vision",

  // Methodologies & Tools
  "Experimental Design",
  "Statistical Analysis",
  "LaTeX Editing",

  // Communication & Education
  "Academic Writing & Editing",
  "Public Speaking",

  // Project & Collaboration Skills
  "Team Management",
]

const developmentStack = [
  // Programming Languages
  "Python",
  "C++",

  // Robotics & Perception
  "ROS / ROS2",
  "OpenCV",
  "PCL",
  "MoveIt",
  "Gazebo",
  "RViz",
  "Nav2",

  // Web & Frontend
  "Gatsby.js",

  // DevOps & Tools
  "Git",
  "Docker",
  "Unix",
  "CI/CD",

  // Data & ML Tools
  "NumPy / SciPy",
  "Pandas",
  "scikit-learn",
  "Matplotlib / Seaborn",
]

const IndexPage = ({ data }) => {
  const { social } = useSiteMetadata()
  const news = useMemo(() => data.news.nodes, [data.news.nodes])
  const cvs = useMemo(() => data.cv.nodes, [data.cv.nodes])
  const projectNodes = useMemo(() => data.projects?.nodes || [], [data.projects])
  const blogNodes = useMemo(() => data.blogs?.nodes || [], [data.blogs])
  const pubSkills = useMemo(() => data.publications?.nodes || [], [data.publications])
  const miscSkills = useMemo(() => data.miscpubs?.nodes || [], [data.miscpubs])

  const normalizeSkill = s => {
    if (!s) return null
    const t = String(s).toLowerCase().trim()
    const dictionary = {
      // Robotics & Platforms
      ros: "ROS",
      ros2: "ROS",
      turtlebot: "ROS",
      // HRI & Interaction
      hri: "HRI",
      roman: "HRI",
      icsr: "HRI",
      proxemic: "HRI",
      "social-cues": "HRI",
      "non-verbal cues": "HRI",
      "robot game": "HRI",
      "social robot": "HRI",
      handshake: "HRI",
      // Perception & CV
      "computer vision": "Computer Vision",
      // Data & Tools
      rosbags: "ROS",
      "tools for hri": "HRI",
      "dataset tools": "Data Engineering",
      // Affective
      emotions: "Affective Computing",
    }
    return dictionary[t] || s
  }

  const skillCounts = useMemo(() => {
    const counts = {}
    // Projects: count both skills and tags
    projectNodes.forEach(n => {
      const fm = n.childMarkdownRemark?.frontmatter || {}
      ;[...(fm.skills || []), ...(fm.tags || [])].forEach(s => {
        const key = normalizeSkill(s)
        if (!key) return
        counts[key] = (counts[key] || 0) + 1
      })
    })
    // Blogs: count both skills and tags
    blogNodes.forEach(n => {
      const fm = n.childMarkdownRemark?.frontmatter || {}
      ;[...(fm.skills || []), ...(fm.tags || [])].forEach(s => {
        const key = normalizeSkill(s)
        if (!key) return
        counts[key] = (counts[key] || 0) + 1
      })
    })
    // Publications & miscpubs: already mapped to canonical skills
    pubSkills.forEach(node => {
      (node.skills || []).forEach(s => {
        const key = normalizeSkill(s)
        if (!key) return
        counts[key] = (counts[key] || 0) + 1
      })
    })
    miscSkills.forEach(node => {
      (node.skills || []).forEach(s => {
        const key = normalizeSkill(s)
        if (!key) return
        counts[key] = (counts[key] || 0) + 1
      })
    })
    return counts
  }, [projectNodes, blogNodes, pubSkills, miscSkills])
  const skillsGroups = [
    { title: "Research & Domain", items: researchStack },
    {
      title: "Robotics & Perception",
      items: developmentStack.filter(i =>
        ["ROS / ROS2", "OpenCV", "PCL", "MoveIt", "Gazebo", "RViz", "Nav2"].includes(i)
      ),
    },
    {
      title: "Development & Tools",
      items: developmentStack.filter(i =>
        ["Python", "C++", "Git", "Docker", "Unix", "CI/CD", "Gatsby.js"].includes(i)
      ),
    },
    {
      title: "Data & ML Tools",
      items: developmentStack.filter(i =>
        ["NumPy / SciPy", "Pandas", "scikit-learn", "Matplotlib / Seaborn"].includes(i)
      ),
    },
  ]

  return (
    <Layout>
      <div className="row py-lg-3 pb-0">
        <div className="col-sm-8 mx-auto" style={{ textAlign: "start" }}>
          <h2 className="fw-bold">Francesco Vigni, Ph.D.</h2>
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
      <div className="row g-3">
        {skillsGroups.map(group => (
          <div className="col-md-6" key={group.title}>
            <div className="card">
              <div className="card-content">
                <h5 className="card-title">{group.title}</h5>
                <div className="skills-list">
                  {group.items.map(item => (
                    <Link key={item} to={`/skills/${encodeURIComponent(item)}`} className="skill-badge" aria-label={`Skill: ${item}`}>
                      {item}
                      <span className="skill-count">{skillCounts[item] || 0}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

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

      <div className="row justify-content-center">
        <div className="col-sm-auto">
          <Link className="btn btn-outline-primary mt-3" to="/publications">
            Go to publications
          </Link>
        </div>
        <div className="col-sm-auto">
          <Link className="btn btn-outline-primary mt-3" to="/news">
            Go to news
          </Link>
        </div>
        <div className="col-sm-auto">
          <Link className="btn btn-outline-primary mt-3" to="/blog">
            Go to blog
          </Link>
        </div>
      </div>

      <hr className="hr-text" data-content="Documents" />
      <div className="row mb-2">
        <div className="col-sm-12 text-start">
          <a
            href="FRANCESCO_VIGNI_PHD.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-tertiary me-2"
          >
            View CV
          </a>
          <a
            href="https://drive.google.com/file/d/1_kec847ygcR6kId2rmPujNkQSnkms1Dv/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn btn-tertiary me-2"
            title="Download or view Francesco Vigni's PhD Thesis"
          >
            PhD Thesis
          </a>
          <a
            href="https://apps.francescovigni.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to apps.francescovigni.com"
            className="btn btn-tertiary"
          >
            Portfolio
          </a>
        </div>
      </div>

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
          frontmatter { skills tags }
        }
      }
    }
    blogs: allFile(
      filter: { sourceInstanceName: { eq: "blog" } }
      sort: { childrenMarkdownRemark: { frontmatter: { date: DESC } } }
      limit: 100
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter { skills tags }
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
