import React from "react";

export default class SearchBar extends React.Component {
  state = { term: "" };
  
  UNSAFE_componentWillMount() {
    this.timer = null;
  }

  onInputChange = (term) => {
    clearTimeout(this.timer);
    this.setState( { term } );
    this.timer = setTimeout(, 1000);
  }
  
  onFormSubmit = event => {
    event.preventDefault();

    // TODO: make sure we call callback from parent component
  }

	render() {
		return (
			<div className="search-bar ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit} >
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
