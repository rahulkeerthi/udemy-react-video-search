import React from 'react';

export default class VideoList extends React.Component {
  constructor(props) {
    super(props)

    console.log(props)
  }

  render() {
    return (
      <div>
        {videos.length}
      </div>
    )
  }
};
