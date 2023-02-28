import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import { graphql } from "gatsby"

import { useSiteMetadata } from "../hooks/use-site-metadata"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'

import { HiLink } from 'react-icons/hi'

import handVideo from "../../data/videos/hand.mp4"
import handShakeVideo from "../../data/videos/handshake.mp4"
import carlaVideo from "../../data/videos/carla.mp4"
import teleVideo from "../../data/videos/telepresence.mp4"

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
      <section className="py-5 text-center container own_container">
        <div className="row py-lg-5">
          <div className="col-sm-8  mx-auto">
            <h1 className="fw-light">Francesco Vigni</h1>
            <p className="lead text-muted">Ciao!</p>
            <p className="justify">
              I'm a robotic nerd that loves learning.
              As a PhD student at the University of Naples Federico II, Italy I study how robots can learn to interact in a human-like way.
              The future expects robot to be able to interact with humans in a natural way and somebody has to make it happen ;).<br/>
              I am funded by the <a href="http://www.perseo.eu/" target="_blank" rel="noreferrer">perseo</a> project, a Marie Skłodowska-Curie Innovative Training Network (ITN) funded by the European Commission that allows me to collaborate with the top european researchers in the field.
              Here I collect some of my works and interests.
            </p>
            
          </div>
          <div className="col-sm-4 ms-auto mb-3">
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
        <div className="row justify-content-center">

          <div className="col-sm-auto col-lg-3">
            <video className="embed-responsive embed-responsive-16by9 main-video img-fluid" controls muted={true} autoPlay={true} loop={true}>
              <source className="embed-responsive-item" src={handVideo} type="video/mp4" />
            </video>
            <p className="lead text-muted">Handshake prototype</p>
          </div>
          <div className="col-sm-auto col-lg-3">
            <video className="embed-responsive embed-responsive-16by9 main-video img-fluid" controls muted={true} autoPlay={true} loop={true}>
              <source className="embed-responsive-item" src={handShakeVideo} type="video/mp4" />
            </video>
            <p className="lead text-muted">@icra2019</p>
          </div>
          <div className="col-sm-auto col-lg-3">
            <video className="embed-responsive embed-responsive-16by9 main-video img-fluid" controls muted={true} autoPlay={true} loop={true}>
              <source className="embed-responsive-item" src={carlaVideo} type="video/mp4" />
            </video>
            <p className="lead text-muted">How do you <a href="https://github.com/vignif/carla-parking">park</a>?</p>
          </div>
          <div className="col-sm-auto col-lg-3">
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
                          <p className="mb-0 fw-light">{start}</p>
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


        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="Socials" />
          </div>
        </div>
        {/* SOCIAL ICONS */}
        <div className="row justify-content-center">
          <div className="col-1 mx-1">
            <a href={social.google} target="_blank" rel="noreferrer" className="">
              <FontAwesomeIcon icon={faGoogle} size="2x" />
            </a>
          </div>
          <div className="col-1 mx-1">
            <a href={social.github} target="_blank" rel="noreferrer" className="">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
          <div className="col-1 mx-1">
            <a href={social.twitter} target="_blank" rel="noreferrer" className="">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
          <div className="col-1 mx-1">
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="">
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
  news: allFile(
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
  },
cv: allCvJson {
    nodes {
      id
      employer
      date_start(formatString: "MMM, YYYY")
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