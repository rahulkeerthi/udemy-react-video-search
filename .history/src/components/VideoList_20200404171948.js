import React from 'react';

class VideoList = ({ videos }) => {
  render() {
    return (
      <div>
        {videos.length}
      </div>
    )
  }
};

export default VideoList;