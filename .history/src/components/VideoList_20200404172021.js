import React from 'react';

export default class VideoList extends React.Component {({ videos }) => {
  render() {
    return (
      <div>
        {videos.length}
      </div>
    )
  }
};
