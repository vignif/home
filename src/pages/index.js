import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import SocialLinks from "../components/socials";
import AudioButton from "../components/play_audio"
import { graphql } from "gatsby"

import { useSiteMetadata } from "../hooks/use-site-metadata"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faXTwitter, faGoogle, faGoogleScholar} from '@fortawesome/free-brands-svg-icons'


import handVideo from "../../data/videos/hand.mp4"
import handShakeVideo from "../../data/videos/handshake.mp4"

import { HiLink, HiFingerPrint } from 'react-icons/hi'
import carlaVideo from "../../data/videos/carla.mp4"
import teleVideo from "../../data/videos/telepresence.mp4"
import beerVideo from "../../data/videos/beer.mp4"

const IndexPage = ({ data }) => {
  // console.log(data)
  const { social } = useSiteMetadata()
  console.log(data)
  const news = data.news.nodes;

  // console.log(news);
  const cvs = data.cv.nodes;
  const number_of_cv = cvs.length;
  // console.log(number_of_cv);
  return (
    <Layout>
        <div className="row py-lg-3 pb-0 ">
          <div className="col-sm-8  mx-auto">
            <h1 className="fw-light">Francesco Vigni</h1>
            <p className="lead text-muted mb-0">/franˈt͡ʃe.sko ˈvi.ɲi/ - <AudioButton /></p>
            <p className="lead text-muted">he/him  <a href="https://englishexplorations.check.uni-hamburg.de/academic-writing-how-do-we-use-gender-inclusive-language-in-academic-writing/" target="_blank" rel="noreferrer" className="lead text-muted" style={{ fontSize: "small" }}>why?</a></p>
            <p className="justify">
              I spend my time exploring the world of robots, their  brains (AI) and their impact on our societies. 
              I study how robots can learn to interact in a human-like way.
              The future expects robots to be able to interact with humans spontaneously and somebody has to make it happen ;).<br />
              {/* I am part of the <a href="http://www.perseo.eu/" target="_blank" rel="noreferrer">perseo</a> project, a Marie Skłodowska-Curie International Training Network (ITN) funded by the European Commission that allows me to collaborate with the top European researchers in the field. <br /> */}
              On this website, I collect some of my works and interests.
            </p>
            <a href="cv.pdf" download="cv.pdf" style={{ float: "left" }}>Download CV</a><br/>
            <a href="https://drive.google.com/file/d/1GoJtMYOZscexARxYDWhx_B8-EL3Q_lIU/view?usp=drive_link" target="_blank" rel="noreferrer" style={{ float: "left" }}>PhD Thesis</a>
          </div>

          <div className="col-sm-4 ms-auto mb-3">
            <StaticImage
              src="../../data/images/me_square.jpg"
              width={250}
              quality={95}
              formats={["AUTO", "WEBP"]}
              alt="Francesco Vigni"
              className="img-fluid profilepic"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="Highlights" />
          </div>
        </div>
        <div className="row justify-content-center">

          <div className="col-sm-auto col-lg-3">
            <video className="embed-responsive embed-responsive-16by9 main-video img-fluid" controls={false} muted={true} autoPlay={true} loop={true}>
              <source className="embed-responsive-item" src={handVideo} type="video/mp4" />
            </video>
            <p className="lead text-muted">Handshake prototype</p>
          </div>
          <div className="col-sm-auto col-lg-3">
            <video className="embed-responsive embed-responsive-16by9 main-video img-fluid" controls={false} muted={true} autoPlay={true} loop={true}>
              <source className="embed-responsive-item" src={handShakeVideo} type="video/mp4" />
            </video>
            <p className="lead text-muted">@icra2019</p>
          </div>
          <div className="col-sm-auto col-lg-3">
            <video className="embed-responsive embed-responsive-16by9 main-video img-fluid" controls={false} muted={true} autoPlay={true} loop={true}>
              <source className="embed-responsive-item" src={beerVideo} type="video/mp4" />
            </video>
            {/* <p className="lead text-muted">How do you <a href="https://github.com/vignif/carla-parking">park</a>?</p> */}
            <p className="lead text-muted">Want a <a href="https://evm7.github.io/HOI4ABOT_page/" target="_blank">beer</a>?</p>
          </div>
          <div className="col-sm-auto col-lg-3">
            <video className="embed-responsive embed-responsive-16by9 main-video img-fluid" controls={false} muted={true} autoPlay={true} loop={true}>
              <source className="embed-responsive-item" src={carlaVideo} type="video/mp4" />
            </video>
            <p className="lead text-muted">Rule-based <a href="https://github.com/vignif/carla-parking" target="_blank">parking</a></p>
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


        <div className="row justify-content-center">
          <div className="col-sm-auto">
            <a href="https://www.linkedin.com/in/francesco-vigni-1b1b0b1a5/" target="_blank" rel="noreferrer">
              <Link className="btn btn-outline-primary btn mt-3" to="/news">
                All the news
              </Link>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="Step by step" />
          </div>
        </div>
        <div className="py-5">
          <div className="main-timeline">
            {cvs.map((cv, index) => {
              const start = cv.date_start;
              const end = cv.date_end;
              const employer = cv.employer;
              const where = cv.where;
              const title = cv.title;
              const icon = cv.icon;
              const extra = cv.extra;
              const link = cv.url;
              return (
                <div key={cv.id}>
                  <>
                    <div className={index % 2 === 0 ? `timeline left` : `timeline right`}>
                      <div className="card">
                        <div className="card-body p-2">
                          <h5> {title}</h5>
                          <p className="mb-0">
                            <a href={link} target="_blank" rel="noreferrer" className="">
                              <HiLink />
                            </a>{employer} - {where}</p>
                          <p className="mb-0 fw-light">
                          {end && end !== 'Invalid date' ? `${start} - ${end}` : start}
                          </p>
                          <p className="mb-0 fw-light">{extra}</p>

                        </div>
                      </div>
                    </div>
                  </>
                </div>
              )
            }
            )}
          </div>
        </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <Seo />
)

//query data from the graphql server
export const query = graphql`
query NewsCV {
  news: allFile(
    filter: {sourceInstanceName: {eq: "news"}}
    sort: {childrenMarkdownRemark: {frontmatter: {date: DESC}}}
    limit: 9
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
  },
cv: allCvJson {
    nodes {
      id
      employer
      date_start(formatString: "MMM, YYYY")
      date_end(formatString: "MMM, YYYY")
      slug
      title
      url
      where
      extra
      icon
    }
  }
}
`
