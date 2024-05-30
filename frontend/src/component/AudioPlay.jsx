import React, { useEffect } from "react";

const AudioPlayer = () => {
  useEffect(() => {
    const audio = new Audio("/16_2.mp3");
    audio.play();

    // Optional: Add clean-up function
    // return () => {
    //   audio.pause();
    //   audio.currentTime = 0;
    // };
  }, []);

  return null;
  // This component doesn't render anything
};

export default AudioPlayer;
