import React, { Component } from "react";
import "./statusFilter.css";

export default class statusFilter extends Component {
  render() {
    return (
      <div className="btn-group statusFilter">
        <button type="button" className="btn btn-info">
          All
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Active
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Done
        </button>
      </div>
    );
  }
}
