import React, { useRef, useState, useEffect } from 'react';

const VideoPlayer = ({ src, maxWidth = "1080px", aspectRatio = "16/9" }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, []); // Autoplay when the component mounts

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      style={{
        maxWidth,           // Limit maximum width for larger screens
        width: '100%',      // Make it full-width for smaller screens
        aspectRatio,        // Set aspect ratio to maintain proportions
        position: 'relative',
      }}
      className="mx-auto"  // Center the video horizontally
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        onClick={togglePlay}  // Click to play/pause
        controls={false}      // Hide default controls
        className="rounded-3xl w-full h-full object-cover cursor-pointer" // Responsive width and cursor
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

