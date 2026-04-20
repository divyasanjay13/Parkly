import React from 'react';
import "./VideoSec.css";

const VideoSec = () => {
  return (
    <>
    <div className="videoSec">
        <div className="container">
            <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/pB_iFY2jIdI?si=GLMs0MY2wUfx3b3x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

        </div>
    </div>
    </>
  )
}

export default VideoSec