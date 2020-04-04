import React, { Component } from 'react'

export default const VideoList = (props) => {
  render() {
    return (
      <div>
        {props.videos.length}
      </div>
    )
  }
}
