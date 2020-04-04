import React from 'react';

export default class VideoList extends React.Component {
  constructor(props) {
    super(props)

    console.log(props)
  }

  render() {
    return (
      <div>
        {props.videos.length}
      </div>
    )
  }
};
