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
    <div className="footer-socials d-flex align-items-center gap-3">
      <a href={social.google} aria-label="Google Scholar" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGoogleScholar} size="lg" />
      </a>
      <a href={social.github} aria-label="GitHub" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a href={social.twitter} aria-label="X (Twitter)" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faXTwitter} size="lg" />
      </a>
      <a href={social.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
    </div>
  )
}

export default SocialLinks
