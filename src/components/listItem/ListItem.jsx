import React, { Component } from "react";
import "./ListItem.css";

export default class ListItem extends Component {
  render() {
    const {
      label,
      deleteHandler,
      toggleProperty,
      done,
      important,
    } = this.props;
    let labelClasses = "todo-list-item-label";
    if (done) {
      labelClasses += " done";
    }
    if (important) {
      labelClasses += " important";
    }

    return (
      <span className="todo-list-item d-flex justify-content-between">
        <span
          className={labelClasses}
          onClick={() => {
            toggleProperty("done");
          }}
        >
          {label}
        </span>
        <div>
          <button
            type="button"
            className="btn btn-outline-success btn-md"
            onClick={() => {
              toggleProperty("important");
            }}
          >
            <i className="fa fa-exclamation" />
          </button>

          <button
            type="button"
            className="btn btn-outline-danger btn-md"
            onClick={deleteHandler}
          >
            <i className="fa fa-trash" />
          </button>
        </div>
      </span>
    );
  }
}
