import React, { Component } from 'react'

export const VideoList = (props) => {
  render() {
    return (
      <div>
        {props.videos.length}
      </div>
    )
  }
}
