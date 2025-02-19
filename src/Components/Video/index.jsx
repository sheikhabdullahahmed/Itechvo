import React, { useState } from 'react';
import { IoMdMusicalNotes } from 'react-icons/io';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = () => {
    const videoElement = document.getElementById("video");
    if (videoElement.paused) {
      videoElement.play(); // Play the video
      setIsPlaying(true);
    } else {
      videoElement.pause(); // Pause the video
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative">
      {/* Video Element */}
      <video id="video" width="100%" controls>
        <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Button */}
      <button
        className="mx-5 hover:cursor-pointer font-bold lg:text-base text-base inline-flex items-center gap-2 text-gray-600"
        onClick={handleButtonClick}
      >
        <IoMdMusicalNotes className="lg:text-2xl text-base text-[#A249F6]" />
        {isPlaying ? "Pause Video" : "Watch Video"}
      </button>
    </div>
  );
};

export default VideoPlayer;
