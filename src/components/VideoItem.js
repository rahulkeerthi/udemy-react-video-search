import React from "react";
import moment from "moment";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
	const timeAgo = moment(video.snippet.publishedAt).fromNow();

	return (
		<div onClick={() => onVideoSelect(video)} className="item">
			<img
				className="ui image"
				key={video.id.videoId}
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
			/>
			<div className="content">
				<div className="header">{video.snippet.title}</div>
				<div className="meta">
					<span className="published">Published {timeAgo}</span>
				</div>
			</div>
		</div>
	);
};

export default VideoItem;
