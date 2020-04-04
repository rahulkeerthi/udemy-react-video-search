import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';

const KEY = 'AIzaSyDWr-tpje_mR2m4hMC5KnaO75FvyfldYvg';

class App extends React.Component {

  onChange = term => {
		console.log(term)
    youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY
      }
		})
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar />
			</div>
		);
	}

}

export default App;
