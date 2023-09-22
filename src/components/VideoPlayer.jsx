import ReactPlayer from "react-player";
import videoBg from "../assests/4K_trees.mp4"
import React, { useRef } from "react";
const VIDEO_PATH = 'https://www.youtube.com/watch?v=IUskDZXw_sw&t=15s&ab_channel=GreenMarmotCapsuleHotel'

function VideoPlayer() {
  const playerRef = useRef(null);
  return (
    <div>
      <div>
        <ReactPlayer url={videoBg} controls={true} onPlay={() => console.log('video is playing')} onPause={() => console.log('video is paused')}/>
      </div>
      <div>
         <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
      </div>
    </div>
  );
}

export default VideoPlayer;