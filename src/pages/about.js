import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Seo } from "../components/seo.js"

import { useSiteMetadata } from "../hooks/use-site-metadata"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { TbTie, TbHome, TbAlignJustified } from 'react-icons/tb';


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
              
                <p className="lead " style={{textAlign: "justify"}}>Francesco Vigni is a licensed information engineer and PhD student of the EU project PERSEO and part of the PriscaLab based at the University of Naples Federico II in Naples, Italy. He is also affiliated with the Interdepartmental Center for Advances in Robotic Surgery (ICAROS) and enrolled in the graduate school Information and Communication Technology for Health (ICTH) of the same university. He received his M.Sc in computer and automation engineering with honours at the University of Siena in Italy. His first conference paper was awarded the Best Paper Award Finalist on HRI at ICRA2019 in Montreal, Canada. Currently, his work focuses on designing, developing, and testing metrics for social HRI that are inspired by the natural bidirectional communication that commonly happens among humans. This strategy can improve natural encounters between robots and humans.</p>
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
                <ul className="list-unstyled">
                  <li className="lead text-muted">
                    <TbHome /> vignif@gmail.com
                  </li>

                  <li className="lead text-muted">
                    <TbTie /> francesco.vigni@unina.it
                  </li>
                </ul>


                <p className="mt-5">Or contact me on one of the socials below!</p>
              </div>
            </div>
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