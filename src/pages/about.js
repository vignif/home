import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Seo } from "../components/seo.js"

import { useSiteMetadata } from "../hooks/use-site-metadata"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { TbTie, TbHome, TbAlignJustified, TbSend } from 'react-icons/tb';
import { GrSend } from "react-icons/gr"

import mapVideo from "../../data/videos/map.mp4"

const Contacts = () => {
  const { social } = useSiteMetadata()

  return (

    <Layout>
      <section className="py-5 text-center container own_container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">About</h1>
            {/* <p className="lead text-muted">A curious dude</p> */}
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="Biography" />
          </div>
        </div>

        <div className="container my-2 own_sub_container">

          <div className="container">
            <div className="row justify-content-around">
              <div className="col-md-12">

                <p className="lead" style={{ textAlign: "justify" }}>
                Francesco is an Italian Dominican engineer investing his efforts in research in Human-Robot Interaction. 
                He is an early-stage researcher in the European Horizon 2020 research and innovation programme PERSEO. 
                He is affiliated with the Interdepartmental Center for Advances in Robotic Surgery (ICAROS) and enrolled in the graduate school Information and Communication Technology for Health (ICTH) of University of Naples Federico II in Naples, Italy. 
                Before this experience, he received his M.Sc. in computer and automation engineering with honours at the University of Siena in Italy. 
                His work focuses on exploiting the social cues of robots to facilitate spontaneous interactions. Within this focus, Francesco is designing and testing behaviours for social robots that are inspired by the natural bidirectional communication that commonly happens among humans.
                This approach can improve natural encounters between humans and robots, paving the way for large-scale social robots’ adoption.
                </p>
              </div>

            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="Contacts" />
          </div>
        </div>

        <div className="container my-2 own_sub_container">

          <div className="container">
            <div className="row justify-content-around">
              <div className="col-md-6">
                <video className="embed-responsive embed-responsive-16by9 about-video img-fluid" controls={false} muted={true} autoPlay={true} loop={false}>
                  <source className="embed-responsive-item" src={mapVideo} type="video/mp4" />
                </video>
                <p className="lead text-muted">Some of my important spots.</p>
              </div>
              <div className="col-md-6">
                <p className="">Hi! I'm always looking for persons that share my same interests and want to collaborate or build cool stuff!</p>
                <p className="">If this resonates with you feel free to email me @</p>
                <ul className="list-unstyled" style={{ border: "groove", alignContent: "center" }}>
                  <li className="lead text-black">
                    <TbHome /> <a href="mailto:vignif@gmail.com">vignif@gmail.com</a>
                  </li>

                  <li className="lead text-black">
                    <TbTie /> <a href="mailto:francesco.vigni@unina.it">francesco.vigni@unina.it </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="" />
          </div>
        </div>

        <div className="container my-2 own_sub_container">
          <p className="text-center">Or use the following form.</p>
          <div className="form">
            <form
              action="https://api.slapform.com/NuzhKyThj"
              method="POST"
              target="_blank"
            >

              <div className="mb-3">
                <input className="form-control"
                  type="text"
                  name="name"
                  placeholder="Full name"
                  required
                />

              </div>
              <div className="mb-3">
                <input className="form-control"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                />

              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Your message</label>
                <textarea className="form-control" type="text" id="exampleFormControlTextarea1" rows="3" name="message" required></textarea>
              </div>

              <button type="submit" className="btn btn-outline-primary mb-3 align-items-center">
                <TbSend /> Send
              </button>
            </form>


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

export default Contacts

export const Head = () => (
  <Seo title="Contacts" />
)