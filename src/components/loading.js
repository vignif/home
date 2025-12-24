import * as React from "react"
import PropTypes from "prop-types"

const Loading = ({ fullscreen = false, message = "Loading..." }) => {
  const containerStyle = fullscreen
    ? {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--bg)",
        zIndex: 9999,
      }
    : {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 0",
      }

  return (
    <div style={containerStyle}>
      <div className="text-center">
        <div
          className="spinner-border"
          role="status"
          style={{
            width: "3rem",
            height: "3rem",
            color: "var(--accent)",
            marginBottom: "1rem",
          }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        {message && (
          <p className="text-muted mt-3" style={{ fontSize: "1rem" }}>
            {message}
          </p>
        )}
      </div>
    </div>
  )
}

Loading.propTypes = {
  fullscreen: PropTypes.bool,
  message: PropTypes.string,
}

export default Loading
