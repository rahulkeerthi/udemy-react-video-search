import React from "react";

export default class SearchBar extends React.Component {
  state = { term: "" };
  
  onInputChange = (e) => {
    const timeout = null;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log('Input Value:', e.target.value)
    }, 1000);

    this.setState( { term: e.target.value } )
    console.log(e.target.value);
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
