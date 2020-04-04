import React from "react";

export default class SearchBar extends React.Component {
  state = { term: "" };
  
  timer = null;

  onInputChange = (e) => {
    clearTimeout(this.timer);
    console.log(e.target.value);
    this.setState( { term: e.target.value } );
    // this.timer = setTimeout(this.triggerChange(term), 1000);
  }

  triggerChange = (term) => {
    // const { term } = this.state;
    // this.props.onChange(term);
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
