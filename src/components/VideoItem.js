import React from 'react';
import moment from 'moment';
import './VideoItem.css';

const VideoItem = ({ video }) => {
  const timeAgo = moment(video.snippet.publishedAt).fromNow();

  return (
    <div className="item">
      <img className="ui tiny image" key={video.id.videoId} src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        <div className="meta">
          <span className="published">Published {timeAgo}</span>
        </div>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoItem;