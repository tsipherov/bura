import React, { Component } from "react";
import "./ListItem.css";

export default class ListItem extends Component {
  state = {
    done: false,
    important: false
  };

  handlerClickOnLabel = () => {
    this.setState(({done}) => {
      return { done: !done }
    });
  };

  handlerImportantSelect = () => { 
    this.setState(({ important }) => {
      return { important: !important }
    })
  }

  render() {
    const { label } = this.props;
    let labelClasses = "todo-list-item-label";
    if (this.state.done) {
      labelClasses += " done";
    }
    if (this.state.important) { 
      labelClasses += " important"
    }

    return (
      <span className="todo-list-item d-flex justify-content-between">
        <span
          className={labelClasses}
          onClick={this.handlerClickOnLabel}
        >
          {label}
        </span>
        <div>
          <button type="button" className="btn btn-outline-success btn-md"
            onClick={ this.handlerImportantSelect }>
            <i className="fa fa-exclamation" />
          </button>

          <button type="button" className="btn btn-outline-danger btn-md">
            <i className="fa fa-trash" />
          </button>
        </div>
      </span>
    );
  }
}
