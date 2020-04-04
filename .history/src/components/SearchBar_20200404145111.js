import React from "react";

export default class SearchBar extends React.Component {
  state = { term: '' };
  
	render() {
		return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input type="text" placeholder="What are you looking for?..." id="search" />
          </div>
        </form>
      </div>
    )
	}
}
