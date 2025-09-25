import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithub,
  faXTwitter,
  faGoogleScholar,
} from "@fortawesome/free-brands-svg-icons"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const SocialLinks = () => {
  const { social } = useSiteMetadata()

  return (
    <div className="row justify-content-center">
      <div className="row">
        <div className="col-md-12">
          <hr className="hr-text" data-content="Socials" />
        </div>
      </div>
      <div className="row justify-content-center my-3">
      <div className="col-1 mx-1">
        <a href={social.google} target="_blank" rel="noreferrer" className="">
          <FontAwesomeIcon icon={faGoogleScholar} size="2x" />
          <FontAwesomeIcon icon="fa-brands fa-google-scholar" size="2x" />
        </a>
      </div>
      <div className="col-1 mx-1">
        <a href={social.github} target="_blank" rel="noreferrer" className="">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <div className="col-1 mx-1">
        <a href={social.twitter} target="_blank" rel="noreferrer" className="">
          <FontAwesomeIcon icon={faXTwitter} size="2x" />
        </a>
      </div>
      <div className="col-1 mx-1">
        <a href={social.linkedin} target="_blank" rel="noreferrer" className="">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div>
    </div>
  )
}

export default SocialLinks
