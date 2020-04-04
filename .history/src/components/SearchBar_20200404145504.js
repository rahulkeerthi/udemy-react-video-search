import React from "react";
import moduleName from 'prop-types'

export default class SearchBar extends React.Component {
  state = { term: "" };
  
  onInputChange = (e) => {
    this.setState( { term: e.target.value } )
    console.log(e.target.value);
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
							onChange={this.onInputChange}
							id="search"
						/>
					</div>
				</form>
			</div>
		);
	}
}
