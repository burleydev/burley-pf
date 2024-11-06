import React, { useRef, useState, useEffect } from 'react';

const VideoPlayer = ({ src, width = "1080px" }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play the video when it enters the viewport
            videoElement.play();
            setIsPlaying(true);
          } else {
            // Pause the video when it leaves the viewport
            videoElement.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 1 } // Trigger when 100% of the video is visible
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      // Clean up the observer when the component unmounts
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

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
      className="w-full sm:w-auto lg:w-[63rem]"
      style={{ maxWidth: width}}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        width="100%"
        height="100%"
        muted
        loop
        onClick={togglePlay} // Click on video to play/pause
        controls={showControls} // Controls visible on hover
        style={{ cursor: 'pointer' }}
        className="lg:rounded-3xl shadow-lg xs:rounded-none"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

