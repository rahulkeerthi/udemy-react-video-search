import React from 'react';
import VideoItem from 'VideoItem'

const VideoList = ({ videos }) => {
  videos.map(video => {
    return <VideoItem />
  })
  return (
    <div>
      {videos.length}
    </div>
  )
};

export default VideoList;
