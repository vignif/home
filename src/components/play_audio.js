import React, { useRef, useState } from "react"
// Do not import audioFile statically; load it asynchronously
import { BiPlayCircle, BiPauseCircle } from "react-icons/bi"


const AudioPlayer = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [audioSrc, setAudioSrc] = useState(null)
  const [loading, setLoading] = useState(true)

  // Use static file URL for efficient caching
  React.useEffect(() => {
    setAudioSrc("/story.m4a")
    setLoading(false)
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    if (!audioRef.current) return
    setProgress(audioRef.current.currentTime)
  }

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return
    setDuration(audioRef.current.duration)
  }

  const handleSeek = e => {
    if (!audioRef.current) return
    const seekTime = Number(e.target.value)
    audioRef.current.currentTime = seekTime
    setProgress(seekTime)
  }

  const handlePlay = () => setIsPlaying(true)
  const handlePause = () => setIsPlaying(false)

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
      <audio
        ref={audioRef}
        src={audioSrc || undefined}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={handlePlay}
        onPause={handlePause}
        style={{ display: "none" }}
      />
      <button
        type="button"
        onClick={togglePlay}
        style={{ background: "none", border: "none", cursor: audioSrc ? "pointer" : "not-allowed" }}
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
        disabled={!audioSrc}
      >
        {isPlaying ? <BiPauseCircle size={32} /> : <BiPlayCircle size={32} />}
      </button>
      <input
        type="range"
        min={0}
        max={duration || 0}
        value={progress}
        onChange={handleSeek}
        style={{ width: "180px" }}
        aria-label="Audio progress"
        disabled={!audioSrc}
      />
      <span style={{ fontSize: "0.95rem", minWidth: "60px", textAlign: "right" }}>
        {Math.floor(progress / 60)}:{String(Math.floor(progress % 60)).padStart(2, "0")} / {Math.floor(duration / 60)}:{String(Math.floor(duration % 60)).padStart(2, "0")}
      </span>
      {loading && (
        <span style={{ fontSize: "0.9rem", color: "#888" }}>Loading audio…</span>
      )}
    </div>
  )
}

export default AudioPlayer
