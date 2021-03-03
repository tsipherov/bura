import React, { Component } from "react";
import "./statusFilter.css";

export default class statusFilter extends Component {

  buttons = [
    { name: "all", label: "All"},
    { name: "active", label: "Active"},
    { name: "done", label: "Done"}
  ]

  render() {

    const buttonsComp = this.buttons.map(({ name, label }) => {

      const isActive = name === this.props.filter
      const clazz = isActive ? "btn-info" : "btn-outline-secondary"

      return (<button
        type="button"
        key={ name }
        className={`btn ${clazz}`}
        onClick={() => {
          this.props.toggleFilterHandler(name);
        }}
      >
        {label}
      </button>)
    })
    return (
      <div className="btn-group statusFilter">
        {buttonsComp}
      </div>
    );
  }
}
