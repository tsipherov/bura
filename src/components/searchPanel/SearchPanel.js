import React, { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    term: "",
  };

  searchChange = (e) => {
    let searchValue = e.target.value;
    this.setState({
      term: searchValue,
    });
    this.props.searchHandler(searchValue);
  };

  render() {
    return (
      <div className="searchPanel w-100">
        <input
          className="form-control search-input"
          type="text"
          placeholder="Enter something"
          value={this.state.term}
          onChange={this.searchChange}
        />
      </div>
    );
  }
}
