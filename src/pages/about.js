import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { Seo } from "../components/seo.js";
import SocialLinks from "../components/socials";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { TbTie, TbHome, TbCopy } from "react-icons/tb";
import mapVideo from "../../data/videos/map.mp4";

const Contacts = () => {
  const { social } = useSiteMetadata();

  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email);
    alert(`Copied: ${email}`);
  };

  return (
    <Layout>
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">About</h1>
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
                Francesco Vigni is an Italian-Dominican engineer researching how robots integrate into social environments. 
                {/* He earned his Ph.D. in Information and Communication Technology for Health (ICTH) in 2025 from the University of Naples Federico II, 
                with a thesis titled "The Unscripted Encounter: Social Cues for Spontaneous Human-Robot Interactions." His doctoral research was funded 
                by the European Horizon 2020 research and innovation program PERSEO.  */}
                During his Ph.D., he was affiliated with the ICAROS research center.
                <br />
                He has industry experience in robot perception, motion planning, and autonomous systems. His work includes software development for 
                stereo vision and 3D perception, improving grasping strategies for robotic manipulation, and motion planning solutions for social robots.
                Additionally, he has worked on embedded vision systems utilizing deep learning techniques for real-time object detection.
                <br />
                In 2018, he completed his M.Sc. in Computer and Automation Engineering with honors at the University of Siena, Italy. 
                In 2015, he earned his B.Sc. in Management Engineering from the same university.
                <br />
                His research focuses on leveraging social cues for natural and spontaneous human-robot interactions. He designs and tests human-inspired 
                robotic behaviours to enhance engagement and social acceptability, aiming to bridge human communication and robotic systems.
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
              <video className="embed-responsive embed-responsive-16by9 about-video img-fluid" controls={false} muted autoPlay loop>
                <source className="embed-responsive-item" src={mapVideo} type="video/mp4" />
              </video>
              <p className="lead text-muted">Some of my important spots.</p>
            </div>
            <div className="col-md-6">
              <p>Hi! I'm always up for collaborations! If our interests overlap, feel free to reach out at either of these addresses.</p>
              <ul className="list-unstyled" >
                <li className="lead text-black d-flex align-items-center">
                  <button
                    className="btn btn-sm btn-outline-secondary ms-2"
                    onClick={() => copyToClipboard("vignif@gmail.com")}
                  >
                    <TbCopy />
                  </button> &nbsp; vignif@gmail.com
                </li>

                <li className="lead text-black d-flex align-items-center mt-2">
                  <button
                    className="btn btn-sm btn-outline-secondary ms-2"
                    onClick={() => copyToClipboard("francesco.vgn@gmail.com")}
                  >
                    <TbCopy />
                  </button> &nbsp; francesco.vgn@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;

export const Head = () => <Seo title="Contacts" />;
