import React from "react";

const ENTER_KEY = 13;
const WAIT_INTERVAL = 1000;

export default class SearchBar extends React.Component {
  state = { term: "" };
  
  timer = null;

  onInputChange = (e) => {
    clearTimeout(this.timer);
    this.setState( { term: e.target.value } );
    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
  }
  
  onKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY) {
      clearTimeout(this.timer)
      this.triggerChange()
    }
  }
  
  triggerChange = () => {
    const { term } = this.state;
    this.props.onTermSubmit(term);
  }
  
  onFormSubmit = (e) => {
    e.preventDefault();
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
            Found {this.state.videos.length} Videos
					</div>
				</form>
			</div>
		);
	}
}
