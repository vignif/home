import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Seo } from "../components/seo.js"
import SocialLinks from "../components/socials";
import { useSiteMetadata } from "../hooks/use-site-metadata"
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
                Francesco Vigni is an Italian-Dominican engineer studying how robots can spontaneously integrate into social environments.
                He received his Ph.D. in Information and Communication Technology for Health (ICTH) in 2025 from the University of Naples Federico II, Italy, with a thesis titled "The Unscripted Encounter: Social Cues for Spontaneous Human-Robot Interactions." 
                His doctoral research was funded by the European Horizon 2020 research and innovation programme PERSEO. During his doctoral studies, he was affiliated with the Interdepartmental Center for Advances in Robotic Surgery (ICAROS).
                He has industry experience in robot perception, motion planning, and autonomous systems development. His work includes designing and implementing software for stereo vision and 3D perception, improving grasping strategies for robotic manipulation, and developing motion planning solutions for mobile robots in social environments applications. 
                He has also worked on embedded vision systems for real-time object detection and classification, utilizing deep learning techniques on edge computing platforms.
                In 2018, he completed his M.Sc. in Computer and Automation Engineering with honors at the University of Siena, Italy.
                In 2015, he completed his B.Sc. in Management Engineering at University of Siena, Italy.
                <br/>
                His research focuses on leveraging social cues to enable natural and spontaneous interactions with robots. 
                He designs and tests human-inspired robotic behaviours to enhance engagement and social acceptability. 
                His work aims to bridge the gap between human communication and robotic systems, paving the way for large-scale adoption of social robots.
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

        <SocialLinks />
      </section>

    </Layout>
  )
}

export default Contacts

export const Head = () => (
  <Seo title="Contacts" />
)