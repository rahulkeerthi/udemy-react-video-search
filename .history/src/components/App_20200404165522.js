import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';

const KEY = 'AIzaSyDWr-tpje_mR2m4hMC5KnaO75FvyfldYvg';

class App extends React.Component {
	onTermSubmit = (term) => {

	}

	render() {
		return (
			<div className="ui container">
				<SearchBar />
			</div>
		);
	}

}

export default App;
