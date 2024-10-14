import React, { useRef, useState, useEffect } from 'react';

const VideoPlayer = ({ src, width = "1080px", height = "608px" }) => {
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
    <div style={{ width, height }}>
      <video
        ref={videoRef}
        width={width}
        height={height}
        autoPlay
        muted
        loop
        onClick={togglePlay} // Click on video to play/pause
        controls={false}    // Hides default controls
        style={{ cursor: 'pointer' }} // Optional: Change cursor style to indicate clickable
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
