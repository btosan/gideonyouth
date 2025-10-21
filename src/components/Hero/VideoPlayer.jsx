'use client'

import { useEffect, useRef } from "react";

export default function VideoPlayer() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    
    const skipSections = [
      { start: 5, end: 10 },  // Skip from 5s to 10s
      { start: 20, end: 30 }, // Skip from 20s to 30s
    ];

    const handleTimeUpdate = () => {
      if (video) {
        const currentTime = video.currentTime;

        // Check if the current time is within any skip section
        for (const section of skipSections) {
          if (currentTime >= section.start && currentTime <= section.end) {
            // Skip to the end of the skip section
            video.currentTime = section.end + 0.1; // Adding a small offset to avoid constantly hitting the skip point
            break;
          }
        }
      }
    };

    // Add event listener for time update
    video.addEventListener("timeupdate", handleTimeUpdate);

    // Cleanup event listener on component unmount
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="w-full h-auto" 
        loop
        autoPlay
        muted
      >
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}