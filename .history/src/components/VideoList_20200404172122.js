import React from 'react';

export default class VideoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {props.videos.length}
      </div>
    )
  }
};
