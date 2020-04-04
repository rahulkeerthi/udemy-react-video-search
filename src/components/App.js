import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

const KEY = "AIzaSyDWr-tpje_mR2m4hMC5KnaO75FvyfldYvg";

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	onTermSubmit = async (term) => {
		const response = await youtube.get("/search", {
			params: {
				q: term,
				part: "snippet",
				type: "video",
				maxResults: 5,
				key: KEY,
			},
		});
		this.setState({ videos: response.data.items });
	};

	onVideoSelect = (video) => {
		this.setState({selectedVideo: video});
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onTermSubmit={this.onTermSubmit} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					videos={this.state.videos}
					onVideoSelect={this.onVideoSelect}
				/>
			</div>
		);
	}
}

export default App;
