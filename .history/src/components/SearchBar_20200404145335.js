import React from "react";

export default class SearchBar extends React.Component {
  state = { term: "" };
  
  setQuery = (e) => {
    this.setState( { term: e.target.value } )
    console.log(e);
  }

	render() {
		return (
			<div className="search-bar ui segment">
				<form className="ui form">
					<div className="field">
						<label htmlFor="search">Video Search</label>
						<input
							type="text"
							placeholder="What are you looking for?"
							value={this.state.term}
							onChange={this.setQuery}
							id="search"
						/>
					</div>
				</form>
			</div>
		);
	}
}
