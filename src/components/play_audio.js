import React, { useRef, useState } from "react"
import audioFile from "../../data/story.m4a"
import { BiPlayCircle, BiPauseCircle } from "react-icons/bi"

const AudioPlayer = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

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
        src={audioFile}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={handlePlay}
        onPause={handlePause}
        style={{ display: "none" }}
      />
      <button
        type="button"
        onClick={togglePlay}
        style={{ background: "none", border: "none", cursor: "pointer" }}
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
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
      />
      <span style={{ fontSize: "0.95rem", minWidth: "60px", textAlign: "right" }}>
        {Math.floor(progress / 60)}:{String(Math.floor(progress % 60)).padStart(2, "0")} / {Math.floor(duration / 60)}:{String(Math.floor(duration % 60)).padStart(2, "0")}
      </span>
    </div>
  )
}

export default AudioPlayer
