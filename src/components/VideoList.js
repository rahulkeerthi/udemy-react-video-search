import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoItem video={video} key={video.id.videoId} />
  });

  return (
    <div className="ui relaxed items">
      {renderedList}
    </div>
  )
};

export default VideoList;
