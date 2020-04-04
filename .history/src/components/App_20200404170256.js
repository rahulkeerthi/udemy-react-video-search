import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';

const KEY = 'AIzaSyDWr-tpje_mR2m4hMC5KnaO75FvyfldYvg';

class App extends React.Component {
  onTermSubmit = async (term) => {
     const response = await youtube.get("/search", {
      params: {
        q: term,
				part: "snippet",
				type: 'video',
        maxResults: 5,
        key: KEY
      }
		})
		console.log(response)
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onTermSubmit={this.onTermSubmit} />
			</div>
		);
	}
}

export default App;
