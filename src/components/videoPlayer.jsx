import React, { useRef, useState, useEffect } from 'react';

const VideoPlayer = ({ src, width = "1080px", height = "608px" }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

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
      style={{ width, height }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        width={width}
        height={height}
        autoPlay
        muted
        loop
        onClick={togglePlay} // Click on video to play/pause
        controls={showControls}    // Controls visible on hover
        style={{ cursor: 'pointer' }}
        className="rounded-3xl shadow-lg"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
