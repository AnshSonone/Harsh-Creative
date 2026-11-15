"use client";

import YouTube from "react-youtube";
import { useRef } from "react";

export default function CleanYouTubePlayer({ videoId }) {
  const cleanId = videoId.slice(0, 11);
  const playerRef = useRef(null);

  const onPlayerReady = (event) => {
    playerRef.current = event.target;
    event.target.setVolume(20); // Set low volume (0 to 100)
    event.target.playVideo();
  };

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1, // Must start muted for browser autoplay to work
      loop: 1,
      playlist: cleanId,
      playsinline: 1,
      controls: 0, // Hides default YouTube controls for a cleaner Shorts look
    },
  };

  console.log(playerRef.current);

  return <YouTube
          videoId={videoId}
          opts={opts}
          onReady={onPlayerReady}
          className="aspect-9/16 w-full overflow-hidden rounded-2xl bg-black"
          iframeClassName="w-full h-full object-cover"
        />
}
