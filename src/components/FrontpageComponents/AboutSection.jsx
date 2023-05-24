import React from "react";
import { useRef, useEffect } from "react";
import MagicHermitAnimation from "./FrontpageMedia/MagicHermit.mp4";

function AboutSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.play();
  }, []);

  return (
    <div>
      <video src={MagicHermitAnimation} loop muted ref={videoRef}></video>
    </div>
  );
}

export default AboutSection;
