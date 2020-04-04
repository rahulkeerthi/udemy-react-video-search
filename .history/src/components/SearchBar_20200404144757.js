import React from "react";

export default class SearchBar extends React.Component {
	render() {
		return (
      <div className="ui segment search-bar">
        <form className="ui form">
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input type="text" id="search" className=""/>
          </div>
        </form>
      </div>
    )
	}
}
