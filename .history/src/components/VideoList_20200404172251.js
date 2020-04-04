import React from 'react';

export default class VideoList extends React.Component {
  render() {
    return (
      <div>
        {props.videos.length}
      </div>
    )
  }
};
