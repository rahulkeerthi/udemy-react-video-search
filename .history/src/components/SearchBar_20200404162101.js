import React from "react";

const ENTER_KEY = 13;

export default class SearchBar extends React.Component {
  state = { term: "" };
  
  timer = null;

  onInputChange = (e) => {
    clearTimeout(this.timer);
    console.log(e.target.value);
    this.setState( { term: e.target.value } );
    this.timer = setTimeout(this.triggerChange, 1000);
  }

  triggerChange = () => {
    const { term } = this.state;
    this.props.onChange(term);
  }

  onKeyDown = (e) => {
    if (e.keyCode) === ENTER_KEY
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
              onKeyDown={this.onKeyDown} 
							onChange={this.onInputChange}
							id="search"
						/>
					</div>
				</form>
			</div>
		);
	}
}
