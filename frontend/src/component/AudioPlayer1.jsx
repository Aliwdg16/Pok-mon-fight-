import React, { useEffect } from "react";

const AudioPlayer1 = () => {
  useEffect(() => {
    const audio = new Audio("/flawless-victory-mk-x.mp3");
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

export default AudioPlayer1;
