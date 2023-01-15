import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Video from "../components/video"

import handVideo from "../../data/videos/hand.mp4"
import handShakeVideo from "../../data/videos/handshake.mp4"
import carlaVideo from "../../data/videos/carla.mp4"
import teleVideo from "../../data/videos/telepresence.mp4"

const IndexPage = () => (
  <Layout>
    <section className="py-5 text-center container own_container">
      <div className="row py-lg-5">
        <div className="col-sm-8  mx-auto">
          <h1 className="fw-light">Francesco Vigni</h1>
          <p className="lead text-muted"> Ciao!</p>
          <p className="justify">
            Here I collect some of my achievements as well as some of my hobbies.
            I am a PhD student at the University of Naples Federico II, Italy where I study how robots can learn to interact in a human-like way.
            As Early-stage Researcher within the MSCA <a href="http://www.perseo.eu/" target="_blank">perseo</a> project, I study how robots can exploit their social-cues in order to initiate interactions with humans.
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
        <div class="col-md-12">
          <hr class="hr-text" data-content="Highlights" />
        </div>
      </div>
      <div className="row">

        <div class="col-sm-3">
          <video className="embed-responsive embed-responsive-16by9 main-video img-fluid" controls muted={true} autoPlay={true} loop={true}>
            <source className="embed-responsive-item" src={handVideo} type="video/mp4" />
          </video>
          <p className="lead text-muted">Handshake prototype</p>
        </div>
        <div class="col-sm-3">
          <video className="embed-responsive embed-responsive-16by9 main-video img-fluid" controls muted={true} autoPlay={true} loop={true}>
            <source className="embed-responsive-item" src={handShakeVideo} type="video/mp4" />
          </video>
          <p className="lead text-muted">@icra2019</p>
        </div>
        <div class="col-sm-3">
          <video className="embed-responsive embed-responsive-16by9 main-video img-fluid" controls muted={true} autoPlay={true} loop={true}>
            <source className="embed-responsive-item" src={carlaVideo} type="video/mp4" />
          </video>
          <p className="lead text-muted">How do you <a href="https://github.com/vignif/carla-parking">park</a>?</p>
        </div>
        <div class="col-sm-3">
          <video className="embed-responsive embed-responsive-16by9 main-video img-fluid" controls muted={true} autoPlay={true} loop={true}>
            <source className="embed-responsive-item" src={teleVideo} type="video/mp4" />
          </video>
          <p className="lead text-muted">Telepresence robot</p>
        </div>
      </div>


      <div className="row">
        <div class="col-md-12">
          <hr class="hr-text" data-content="News" />
        </div>
      </div>

      <div className="row">
        <div class="col-md-12">
          <Link to="/about/" className="btn btn-danger pull-right">About</Link>
        </div>

        <div class="col-md-12 pull-left">
          <Link to="/page-2/" className="btn btn-secondary my-2">Go to page 2</Link>
        </div>
      </div>

      <div className="row">
        <div class="col-md-12">
          <hr class="hr-text" data-content="Step by step" />
        </div>
      </div>

    </section>
  </Layout>
)

export default IndexPage

export const Head = () => (
  <Seo />
)