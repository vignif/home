import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Video from "../components/video"
import { graphql } from "gatsby"

import { useSiteMetadata } from "../hooks/use-site-metadata"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'

import handVideo from "../../data/videos/hand.mp4"
import handShakeVideo from "../../data/videos/handshake.mp4"
import carlaVideo from "../../data/videos/carla.mp4"
import teleVideo from "../../data/videos/telepresence.mp4"

const IndexPage = ({ data }) => {
  // console.log(data)
  const { social } = useSiteMetadata()
  console.log(social)
  const news = data.allFile.nodes;
  console.log(news);
  return (
    <Layout>
      <section className="py-5 text-center container own_container">
        <div className="row py-lg-5">
          <div className="col-sm-8  mx-auto">
            <h1 className="fw-light">Francesco Vigni</h1>
            <p className="lead text-muted"> Ciao!</p>
            <p className="justify">
              I am a PhD student at the University of Naples Federico II, Italy where I study how robots can learn to interact in a human-like way.
              Here I collect some of my achievements as well as some of my hobbies.
              As Early-stage Researcher within the MSCA <a href="http://www.perseo.eu/" target="_blank" rel="noreferrer">perseo</a> project, I study how robots can exploit their social-cues in order to initiate interactions with humans.
            </p>
          </div>
          <div className="col-sm-4 ms-auto">
            <StaticImage
              src="../../data/images/me_square.jpg"
              width={250}
              quality={95}
              formats={["AUTO", "WEBP"]}
              alt="A Gatsby astronaut"
              className="img-fluid profilepic"
            />


          </div>

        </div>

        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="Highlights" />
          </div>
        </div>
        <div className="row">

          <div className="col-sm-3">
            <video className="embed-responsive embed-responsive-16by9 main-video img-fluid" controls muted={true} autoPlay={true} loop={true}>
              <source className="embed-responsive-item" src={handVideo} type="video/mp4" />
            </video>
            <p className="lead text-muted">Handshake prototype</p>
          </div>
          <div className="col-sm-3">
            <video className="embed-responsive embed-responsive-16by9 main-video img-fluid" controls muted={true} autoPlay={true} loop={true}>
              <source className="embed-responsive-item" src={handShakeVideo} type="video/mp4" />
            </video>
            <p className="lead text-muted">@icra2019</p>
          </div>
          <div className="col-sm-3">
            <video className="embed-responsive embed-responsive-16by9 main-video img-fluid" controls muted={true} autoPlay={true} loop={true}>
              <source className="embed-responsive-item" src={carlaVideo} type="video/mp4" />
            </video>
            <p className="lead text-muted">How do you <a href="https://github.com/vignif/carla-parking">park</a>?</p>
          </div>
          <div className="col-sm-3">
            <video className="embed-responsive embed-responsive-16by9 main-video img-fluid" controls muted={true} autoPlay={true} loop={true}>
              <source className="embed-responsive-item" src={teleVideo} type="video/mp4" />
            </video>
            <p className="lead text-muted">Telepresence robot</p>
          </div>
        </div>

        {/* NEWS SECTION */}
        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="News" />
          </div>
        </div>

        {news.map((node) => (
          <div key={node.id} className="row">
            <>
              <div className="col-sm-2 own_sub_container">
                <p className="own_date">{node.childMarkdownRemark.frontmatter.date}</p>
              </div>

              <div className="col-md-10">
                <div className="justify" dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }} />
              </div>
            </>
          </div>
        ))}
        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="Step by step" />
          </div>
        </div>


        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="Socials" />
          </div>
        </div>
        {/* SOCIAL ICONS */}
        <div className="row justify-content-center">
          <div className="col-md-1">
            <a href={social.google} target="_blank" rel="noreferrer" className="col-sm-2 mx-auto">
              <FontAwesomeIcon icon={faGoogle} size="2x" />
            </a>
          </div>
          <div className="col-md-1">
            <a href={social.github} target="_blank" rel="noreferrer" className="col-sm-2 mx-auto">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
          <div className="col-md-1">
            <a href={social.twitter} target="_blank" rel="noreferrer" className="col-sm-2 mx-auto">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
          <div className="col-md-1">
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="col-sm-2 mx-auto">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>

      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <Seo />
)

//query data from the graphql server
export const query = graphql`
query MyQuery {
  allFile(
    filter: {sourceInstanceName: {eq: "news"}}
    sort: {childrenMarkdownRemark: {frontmatter: {date: DESC}}}
  )
  {
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
}
`