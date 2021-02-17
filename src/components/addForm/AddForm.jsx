import React, { Component } from "react";
import "./itemAddForm.css";

export default class AddForm extends Component {
  newTodo = "";

  render() {
    return (
      <form className="bottom-panel d-flex">
        <input
          type="text"
          className="form-control new-todo-label"
          placeholder="What needs to be done?"
          onChange={(e) => {
            this.newTodo = e.target.value;
          }}
        />

        <button
          type="submit"
          className="btn btn-outline-secondary"
          onClick={(e) => {
            e.preventDefault();
            this.props.addHandler(this.newTodo);
            this.newTodo = "";
          }}
        >
          Add
        </button>
      </form>
    );
  }
}
