import React, { Component } from "react";
import "./statusFilter.css";

export default class statusFilter extends Component {
  render() {
    return (
      <div className="btn-group statusFilter">
        <button
          type="button"
          className="btn btn-info"
          onClick={() => {
            this.props.toggleFilterHandler("all");
          }}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            this.props.toggleFilterHandler("active");
          }}
        >
          Active
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            this.props.toggleFilterHandler("done");
          }}
        >
          Done
        </button>
      </div>
    );
  }
}
