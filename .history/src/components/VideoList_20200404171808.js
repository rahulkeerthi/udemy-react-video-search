import React, { Component } from 'react';

const VideoList = (props) => {
  render() {
    return (
      <div>
        {props.videos.length}
      </div>
    )
  }
}

export default VideoList;