import React from "react";

const VideoDetail = ({ video }) => {
	if (!video) {
		return (
			<div className="ui segment">
				<div className="ui placeholder">
          <div className="image"></div>
					<div className="ui active inverted dimmer">
						<div className="ui text loader">Loading...</div>
					</div>
				</div>
			</div>
		);
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div className="ui segment">
			<div
				className="ui embed"
				data-source="youtube"
				data-id={video.id.videoId}
				data-placeholder={video.snippet.thumbnails.medium.url}
			>
				<iframe title={video.snippet.title} src={videoSrc} />
			</div>
			<h4 className="ui header">{video.snippet.title}</h4>
			<p>{video.snippet.description}</p>
		</div>
	);
};

export default VideoDetail;
