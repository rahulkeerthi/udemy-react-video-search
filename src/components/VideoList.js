import React from "react";
import VideoItem from "./VideoItem";
import VideoListPlaceholder from "./VideoListPlaceholder";

const VideoList = ({ videos, onVideoSelect }) => {
	if (videos.length === 0) {
		return (
			<div>
				<VideoListPlaceholder />
				<VideoListPlaceholder />
				<VideoListPlaceholder />
				<VideoListPlaceholder />
				<VideoListPlaceholder />
			</div>
		);
	}

	const renderedList = videos.map((video) => {
		return (
			<VideoItem
				video={video}
				key={video.id.videoId}
				onVideoSelect={onVideoSelect}
			/>
		);
	});

	return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
