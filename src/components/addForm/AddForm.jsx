import React, { Component } from "react";
import "./itemAddForm.css";

export default class AddForm extends Component {
  state = { newTodo: "" }

  render() {
    return (
      <form className="bottom-panel d-flex"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addHandler(this.state.newTodo);
          this.setState(() => { 
            return {

              newTodo: ""
            }
          })
        }}>
        <input
          type="text"
          className="form-control new-todo-label"
          placeholder="What needs to be done?"
          value = {this.state.newTodo}
          onChange={(e) => {

            this.setState((prevState) => { 
              return {

                newTodo: e.target.value
              }
            })
          }}
        />

        <button
          type="submit"
          className="btn btn-outline-secondary"
        >
          Add
        </button>
      </form>
    );
  }
}
