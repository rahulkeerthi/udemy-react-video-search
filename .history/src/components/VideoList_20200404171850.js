import React, { Component } from 'react';

const VideoList = ( { videos }) => {
  render() {
    return (
      <div>
        {videos.length}
      </div>
    )
  };
};

export default VideoList;