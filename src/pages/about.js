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
} from "react-icons/tb"
import mapVideo from "../../data/videos/map.mp4"

const Contacts = () => {
  const { social } = useSiteMetadata()
  const [copiedEmail, setCopiedEmail] = React.useState(null)

  const copyToClipboard = email => {
    navigator.clipboard.writeText(email)
    setCopiedEmail(email)
    setTimeout(() => setCopiedEmail(null), 1000) // Clear after 1 second
  }
  const emails = [
    {
      address: "vignif@gmail.com",
      label: "Main",
      pgpLink: "https://keys.openpgp.org/vks/v1/by-email/vignif@gmail.com",
    },
    {
      address: "francesco.vgn@gmail.com",
      label: "Alternative",
      pgpLink:
        "https://keys.openpgp.org/vks/v1/by-email/francesco.vgn@gmail.com",
    },
    {
      address: "francesco.vigni@unina.it",
      label: "Academic",
      pgpLink:
        "https://keys.openpgp.org/vks/v1/by-email/francesco.vigni@unina.it",
    },
  ]

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
            <div className="col-lg-6 col-md-12">
              <div className="ratio ratio-16x9">
                <video
                  className="img-fluid rounded shadow"
                  controls={false}
                  muted
                  autoPlay
                  loop
                >
                  <source src={mapVideo} type="video/mp4" />
                </video>
              </div>
              <p className="text-muted mt-2">Some of my important spots.</p>
            </div>
            <div className="col-md-6">
              <p>
                Hi! I'm always open to collaborations. If our interests align,
                feel free to reach out. I also use{" "}
                <a href="https://www.openpgp.org/" target="_blank">
                  OpenPGP
                </a>{" "}
                for encrypted emails.
              </p>
              <table className="table table-striped">
                <tbody>
                  {emails.map(({ address, label, pgpLink }) => (
                    <tr key={address}>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => copyToClipboard(address)}
                        >
                          <TbCopy />
                        </button>
                        {copiedEmail === address && (
                          <span className="ms-2 text-success">
                            <TbCheck />
                          </span>
                        )}
                      </td>
                      <td>
                        {address} <span className="text-muted">({label})</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <a
                          href={pgpLink}
                          className="btn btn-sm btn-outline-secondary"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <TbKey /> Get Key
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              ORCID:{" "}
              <a
                href="https://orcid.org/0000-0001-9918-8485"
                target="_blank"
                rel="noreferrer"
              >
                0000-0001-9918-8485
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contacts

export const Head = () => <Seo title="Contacts" />
