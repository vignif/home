import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Seo } from "../components/seo.js"
import SocialLinks from "../components/socials"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import {
  TbTie,
  TbHome,
  TbCopy,
  TbCheck,
  TbMail,
  TbKey,
  TbLock,
  TbSend,
} from "react-icons/tb"
import mapVideo from "../../data/videos/map.mp4"
import emailjs from "@emailjs/browser"

const Contacts = () => {
  const { social } = useSiteMetadata()
  const formRef = React.useRef()
  const [formStatus, setFormStatus] = React.useState({
    loading: false,
    success: false,
    error: false,
  })

  const sendEmail = e => {
    e.preventDefault()
    setFormStatus({ loading: true, success: false, error: false })

    // Replace these with your EmailJS credentials from https://www.emailjs.com/
    emailjs
      .sendForm(
        "service_5qynz5t", // Replace with your EmailJS service ID
        "template_phbj276", // Replace with your EmailJS template ID
        formRef.current,
        "b-COpNJlOPo48d7cM" // Replace with your EmailJS public key
      )
      .then(
        result => {
          setFormStatus({ loading: false, success: true, error: false })
          formRef.current.reset()
          setTimeout(() => {
            setFormStatus({ loading: false, success: false, error: false })
          }, 5000)
        },
        error => {
          setFormStatus({ loading: false, success: false, error: true })
          setTimeout(() => {
            setFormStatus({ loading: false, success: false, error: false })
          }, 5000)
        }
      )
  }

  return (
    <Layout>
      <section className="text-center py-5">
        <h1 className="fw-bold">About</h1>
      </section>

      <div className="row">
        <div className="col-md-12">
          <hr className="hr-text" data-content="Biography" />
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-around">
          <div className="col-md-12">
            <p className="" style={{ textAlign: "justify" }}>
            Francesco Vigni is an independent ML engineer working at the intersection of robotics, and applied AI.
            After completing a Ph.D. in Information and Communication Technology for Health at the University of Naples Federico II (funded by the EU's Marie Skłodowska-Curie PERSEO project), he transitioned from academic research to building production systems.
            <br />
            His background includes developing real-time perception software for industrial robotics, autonomous navigation systems, and HRI research. 
            He has worked with stereo vision, deep learning pipelines, object detection, motion planning, and embedded vision systems across various robotics platforms.
            Francesco specializes in bridging the gap between research and deployment by building intelligent systems that are reliable, scalable, and work in real-world conditions. He's particularly drawn to projects where the challenge isn't just training a model, but making it robust enough for production.
            <br />
            <br />
            Currently available for freelance work in applied ML, computer vision, and robotics perception.
            </p>
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
            
            <div className="col-md-12">
              <div className="py-4">
                <h3 className="text-center mb-3">Let's Work Together</h3>
                <p className="text-center lead mb-4">
                  I'm currently available for freelance projects in ML, computer vision, and robotics.
                  <br />
                  If you have an interesting challenge, let's talk.
                </p>

                <div className="row justify-content-center">
                  <div className="col-md-8 col-lg-6">
                    <form ref={formRef} onSubmit={sendEmail}>
                      <div className="mb-3">
                        <label htmlFor="user_name" className="form-label">
                          Name *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="user_name"
                          name="user_name"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="user_email" className="form-label">
                          Email *
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="user_email"
                          name="user_email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="subject" className="form-label">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">
                          Message *
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="5"
                          required
                        ></textarea>
                      </div>

                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                          disabled={formStatus.loading}
                        >
                          {formStatus.loading ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Sending...
                            </>
                          ) : (
                            <>
                              <TbSend className="me-2" />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>

                      {formStatus.success && (
                        <div
                          className="alert alert-success mt-3 text-center"
                          role="alert"
                        >
                          <TbCheck className="me-2" />
                          Message sent successfully! I'll get back to you soon.
                        </div>
                      )}

                      {formStatus.error && (
                        <div
                          className="alert alert-danger mt-3 text-center"
                          role="alert"
                        >
                          Failed to send message. Please try emailing me directly at{" "}
                          <a href="mailto:vignif@gmail.com">
                            vignif@gmail.com
                          </a>
                        </div>
                      )}
                    </form>

                    <p className="mt-4 text-center text-muted small">
                      I use{" "}
                      <a
                        href="https://keys.openpgp.org/vks/v1/by-email/vignif@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <TbLock /> OpenPGP
                      </a>{" "}
                      for encrypted communications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contacts

export const Head = () => <Seo title="Contacts" />
