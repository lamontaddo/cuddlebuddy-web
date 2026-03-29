import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  function handleVideoClick() {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    if (video.paused) {
      video.play().catch(() => {});
    }
  }

  return (
    <main className="home">
      <div className="center-wrap">
        <h1 className="logo">CuddleBuddy</h1>

        <p className="tagline">Comfort. Connection. Companionship.</p>

        <div className="video-container">
          <video
            ref={videoRef}
            className="main-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onClick={handleVideoClick}
          >
            <source src="/videos/cuddlebuddy2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <p className="video-helper-text">
            Tap video to {isMuted ? "turn sound on" : "mute sound"}
          </p>
        </div>

        <p className="description">
          CuddleBuddy is a platform for safe, respectful, platonic companionship.
          Clients can book comfort sessions, and providers earn through scheduled
          sessions with secure payments and built-in safety tools.
        </p>

        <div className="buttons">
          <a
            href="https://cuddlebuddy.me"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            Visit Platform
          </a>

          <Link to="/safety" className="secondary-btn">
            Safety Guidelines
          </Link>
        </div>

        <div className="legal-links">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/refunds">Refunds</Link>
        </div>
      </div>
    </main>
  );
}