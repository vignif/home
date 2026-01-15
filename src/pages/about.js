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
  TbUser,
} from "react-icons/tb"
import mapVideo from "../../data/videos/map.mp4"
import emailjs from "@emailjs/browser"

const Contacts = () => {
  const { social } = useSiteMetadata()
  const formRef = React.useRef()
  const pgpHref = '/hello@francescovigni.pub'
  const [formStatus, setFormStatus] = React.useState({
    loading: false,
    success: false,
    error: false,
  })
  const [messageLen, setMessageLen] = React.useState(0)
  const [errors, setErrors] = React.useState({})
  const [cooldownUntil, setCooldownUntil] = React.useState(0)
  const [captchaError, setCaptchaError] = React.useState("")
  const [turnstileToken, setTurnstileToken] = React.useState("")
  const [showForm, setShowForm] = React.useState(false)
  const siteKey = process.env.GATSBY_TURNSTILE_SITE_KEY
  const verifyUrl = process.env.GATSBY_TURNSTILE_VERIFY_URL || "/api/verify-turnstile"

  React.useEffect(() => {
    const last = Number(window.localStorage.getItem("lastContactSubmit") || 0)
    if (last) setCooldownUntil(last + 45_000) // 45s cooldown
  }, [])

  // Load Cloudflare Turnstile when a site key is present
  React.useEffect(() => {
    if (!siteKey) return
    window.onTurnstileSuccess = token => {
      setTurnstileToken(token || "")
      setCaptchaError("")
    }
    window.onTurnstileExpired = () => {
      setTurnstileToken("")
      setCaptchaError("Verification expired. Please retry.")
    }
    window.onTurnstileError = () => {
      setCaptchaError("Verification failed to load. Check your connection.")
    }
    const existing = document.querySelector('script[src^="https://challenges.cloudflare.com/turnstile/v0/api.js"]')
    if (!existing) {
      const s = document.createElement('script')
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
      s.async = true
      s.defer = true
      document.head.appendChild(s)
    }
    return () => {
      delete window.onTurnstileSuccess
      delete window.onTurnstileExpired
      delete window.onTurnstileError
    }
  }, [siteKey])

  const now = () => Date.now()

  const validate = () => {
    const form = formRef.current
    const nextErrors = {}
    const name = (form.user_name?.value || "").trim()
    const email = (form.user_email?.value || "").trim()
    const subject = (form.subject?.value || "").trim()
    const message = (form.message?.value || "").trim()

    if (name.length < 2) nextErrors.user_name = "Please enter your full name."
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!emailOk) nextErrors.user_email = "Please enter a valid email."
    if (message.length < 20) nextErrors.message = "Please write at least 20 characters."
    if (subject.length > 120) nextErrors.subject = "Subject must be under 120 characters."

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const sendEmail = e => {
    e.preventDefault()
    setFormStatus({ loading: true, success: false, error: false })

    // Honeypot and cooldown checks
    const form = formRef.current
    if ((form._honeypot?.value || "").trim() !== "") {
      setFormStatus({ loading: false, success: false, error: true })
      return
    }
    if (now() < cooldownUntil) {
      setFormStatus({ loading: false, success: false, error: true })
      return
    }

    if (!validate()) {
      setFormStatus({ loading: false, success: false, error: false })
      return
    }

    const proceed = async () => {
      if (siteKey) {
        // Prefer token from callback; fallback to hidden input injected by widget
        const tokenInput = form.querySelector('input[name="cf-turnstile-response"]')
        const token = turnstileToken || (tokenInput && tokenInput.value) || ""
        if (!token) {
          setCaptchaError("Please complete the verification.")
          setFormStatus({ loading: false, success: false, error: false })
          return
        }
        try {
          const resp = await fetch(verifyUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token }),
          })
          const json = await resp.json()
          if (!json.success) {
            setCaptchaError("Verification failed. Please retry.")
            setFormStatus({ loading: false, success: false, error: false })
            return
          }
        } catch (err) {
          setCaptchaError("Network error during verification.")
          setFormStatus({ loading: false, success: false, error: false })
          return
        }
      }

      // Replace these with your EmailJS credentials from https://www.emailjs.com/
      emailjs
        .sendForm(
          "service_5qynz5t",
          "template_phbj276",
          formRef.current,
          "b-COpNJlOPo48d7cM"
        )
        .then(
          result => {
            setFormStatus({ loading: false, success: true, error: false })
            try {
              window.localStorage.setItem("lastContactSubmit", String(now()))
              setCooldownUntil(now() + 45_000)
              if (window.turnstile) {
                try { window.turnstile.reset() } catch {}
              }
            } catch {}
            formRef.current.reset()
            setTurnstileToken("")
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

    proceed()
  }

  return (
    <Layout>
      <section className="text-center py-5">
        <h1 className="fw-semibold">About</h1>
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
            Francesco Vigni is a freelance ML engineer working at the intersection of robotics, and applied AI.
            After completing a Ph.D. in Information and Communication Technology for Health at the University of Naples Federico II (funded by the EU's Marie Skłodowska-Curie PERSEO project), he transitioned from academic research to building production systems.
            <br />
            His background includes developing real-time perception software for industrial robotics, autonomous navigation systems, and HRI research. 
            He has worked with stereo vision, deep learning pipelines, object detection, motion planning, and embedded vision systems across various robotics platforms.
            Francesco specializes in bridging the gap between research and deployment by building intelligent systems that are reliable, scalable, and work in real-world conditions. He's particularly drawn to projects where the challenge isn't just training a model, but making it robust enough for production.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <hr className="hr-text" data-content=" " />
        </div>
      </div>

      <div className="container my-2 own_sub_container">
        <div className="container">
          <div className="row justify-content-around">
            
            <div className="col-md-12">
              <div className="">
                <h3 className="text-center mb-3">Let's Work Together</h3>
                <p className="text-center ">
                  I'm available for consulting projects in ML, computer vision, and robotics.
                  <br />
                  If you have an interesting challenge, let's talk.
                </p>

                <div id="contact" className="text-center mb-3">
                  <a href="mailto:hello@francescovigni.com" className="btn btn-primary btn-lg" aria-label="Email hello@francescovigni.com">
                    <TbMail className="me-2" />hello@francescovigni.com
                  </a>
                  <p className="text-center text-muted small">
                      I use{" "}
                      <a
                        href={pgpHref}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="View or download my PGP public key"
                      >
                        <TbLock />OpenPGP
                      </a>{" "}
                      for encrypted communications
                    </p>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      aria-expanded={showForm ? "true" : "false"}
                      aria-controls="contact-form"
                      onClick={() => setShowForm(v => !v)}
                    >
                      {showForm ? "Hide form" : "Prefer a quick form?"}
                    </button>
                  </div>
                </div>

                {showForm && (
                <div className="row justify-content-center" id="contact-form">
                  <div className="col-md-10 col-lg-8">
                    <div className="card shadow-sm contact-card">
                      <div className="card-body p-4">
                        <form ref={formRef} onSubmit={sendEmail} noValidate>
                      {/* Honeypot field to trap bots */}
                      <input type="text" name="_honeypot" style={{ display: "none" }} tabIndex="-1" autoComplete="off" aria-hidden="true" />
                      {siteKey && (
                        <div className="">
                          <div
                            className="cf-turnstile"
                            data-sitekey={siteKey}
                            data-theme="auto"
                            data-callback="onTurnstileSuccess"
                            data-expired-callback="onTurnstileExpired"
                            data-error-callback="onTurnstileError"
                          />
                          {captchaError && (
                            <div className="text-danger small mt-1">{captchaError}</div>
                          )}
                        </div>
                      )}
                      <div className="row g-3 mb-3">
                        <div className="col-md-6">
                          <div className="input-group">
                            <span className="input-group-text bg-transparent"><TbUser /></span>
                            <input
                              type="text"
                              className={`form-control${errors.user_name ? " is-invalid" : ""}`}
                              id="user_name"
                              name="user_name"
                              placeholder="Your full name"
                              autoComplete="name"
                              minLength={2}
                              required
                              aria-invalid={!!errors.user_name}
                              aria-describedby={errors.user_name ? "err-name" : undefined}
                            />
                          </div>
                          {errors.user_name && (
                            <div id="err-name" className="invalid-feedback">{errors.user_name}</div>
                          )}
                        </div>

                        <div className="col-md-6">
                          <div className="input-group">
                            <span className="input-group-text bg-transparent"><TbMail /></span>
                            <input
                              type="email"
                              className={`form-control${errors.user_email ? " is-invalid" : ""}`}
                              id="user_email"
                              name="user_email"
                              placeholder="your@email.com"
                              autoComplete="email"
                              required
                              aria-invalid={!!errors.user_email}
                              aria-describedby={errors.user_email ? "err-email" : undefined}
                            />
                          </div>
                          {errors.user_email && (
                            <div id="err-email" className="invalid-feedback">{errors.user_email}</div>
                          )}
                        </div>
                      </div>
                      <div className="mb-3">

                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="5"
                          placeholder="Tell me about your challenges and how I can help..."
                          minLength={10}
                          maxLength={2000}
                          required
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? "err-message" : undefined}
                          onChange={(e) => setMessageLen(e.target.value.length)}
                        ></textarea>
                        <div className="form-text text-end">{messageLen}/2000</div>
                        {errors.message && (
                          <div id="err-message" className="invalid-feedback">{errors.message}</div>
                        )}
                      </div>

                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                          disabled={formStatus.loading || now() < cooldownUntil || (!!siteKey && !turnstileToken)}
                          aria-busy={formStatus.loading ? "true" : "false"}
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
                              {now() < cooldownUntil ? "Please wait…" : ((!!siteKey && !turnstileToken) ? "Send" : "Send Message")}
                            </>
                          )}
                        </button>
                      </div>

                      {formStatus.success && (
                        <div
                          className="alert alert-success mt-3 text-center"
                          role="alert"
                          aria-live="polite"
                        >
                          <TbCheck className="me-2" />
                          Message sent successfully! I'll get back to you soon.
                        </div>
                      )}

                      {formStatus.error && (
                        <div
                          className="alert alert-danger mt-3 text-center"
                          role="alert"
                          aria-live="assertive"
                        >
                          Failed to send message. Please try emailing me directly at{" "}
                          <a href="mailto:hello@francescovigni.com">
                            hello@francescovigni.com
                          </a>
                        </div>
                      )}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                )}
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
