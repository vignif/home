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

  return (
    <Layout>
      <div className="row py-lg-3 pb-0">
        <div className="col-sm-8 mx-auto" style={{ textAlign: "start" }}>
          <h2 className="fw-bold">Francesco Vigni, Ph.D.</h2>
          <p className="lead text-muted mb-0">
            /franˈt͡ʃe.sko ˈvi.ɲi/
          </p>
          <p className="lead text-muted">
            he/him{" "}
            <a
              href="https://englishexplorations.check.uni-hamburg.de/academic-writing-how-do-we-use-gender-inclusive-language-in-academic-writing/"
              target="_blank"
              rel="noreferrer"
              className="lead text-muted"
              style={{ fontSize: "small" }}
            >
              why?
            </a>
          </p>
          <p className="justify">
            I spend my time exploring the world of robots, their brains (AI),
            and their impact on our societies. I study how robots can learn to
            interact in a human-like way. The future expects robots to be able
            to interact with humans spontaneously, and somebody has to make it
            happen ;).
            <br />
            On this website, I collect some of my works and interests.
          </p>

          <div className="col-sm-4 text-start">
            <a
              href="FRANCESCO_VIGNI_PHD.pdf"
              download="FRANCESCO_VIGNI_PHD.pdf"
              className="badge bg-dark text-white p-2 my-1 rounded-pill text-decoration-none d-inline-block"
            >
              Download CV
            </a>
            <span> | </span>
            <li className="list-inline-item float-left">
              <a
                href="https://drive.google.com/file/d/1GoJtMYOZscexARxYDWhx_B8-EL3Q_lIU/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="badge bg-dark text-white p-2 my-1 rounded-pill text-decoration-none d-inline-block"
                title="Download or view Francesco Vigni's PhD Thesis"
              >
                PhD Thesis
              </a>
            </li>
            <span> | </span> 
            <a
              href="apps.francescovigni.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to apps.francescovigni.com"
              className="badge bg-dark text-white p-2 my-1 rounded-pill text-decoration-none d-inline-block"
            >
              My Apps
            </a>

          </div>
        </div>
        <div className="col-sm-4 ms-auto mb-3">
          <StaticImage
            src="../../data/images/EC9_8572.jpg"
            width={250}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="Francesco Vigni"
            className="img-fluid profilepic"
          />
        </div>
      </div>
      {/* 
      <hr className="hr-text" data-content="Highlights" />
      <div className="row justify-content-center">
        {[{ video: handVideo, text: "Handshake prototype" },
          { video: handShakeVideo, text: "@icra2019" },
          { video: beerVideo, text: "Want a <a href='https://evm7.github.io/HOI4ABOT_page/' target='_blank'>beer</a>?" },
          { video: carlaVideo, text: "Rule-based <a href='https://github.com/vignif/carla-parking' target='_blank'>parking</a>" }
        ].map(({ video, text }, index) => (
          <div key={index} className="col-sm-auto col-lg-3">
            <video className="embed-responsive embed-responsive-16by9 main-video img-fluid" muted autoPlay loop>
              <source src={video} type="video/mp4" />
            </video>
            <p className="lead text-muted" dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        ))}
      </div> */}

      {/*
      <hr className="hr-text" data-content="What I use?" />
      <div className="row justify-content-center py-1">
        <div className="col-lg-5">
          <h3 className="fw-bold text-center mb-3">Research</h3>
          <ul className="list-inline text-center mb-5">
            {researchStack.map((item, index) => (
              <li
                key={index}
                className="list-inline-item m-2 badge bg-secondary text-white p-2 rounded-pill"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-5">
          <h3 className="fw-bold text-center mb-3">Development</h3>
          <ul className="list-inline text-center">
            {developmentStack.map((item, index) => (
              <li
                key={index}
                className="list-inline-item m-2 badge bg-primary text-white p-2 rounded-pill"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
*/}
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
  }
`
