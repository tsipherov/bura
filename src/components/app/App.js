import React, { Component } from "react";
import AddForm from "../addForm/AddForm";

import "./App.css";
import Header from "../header/Header";
import SearchPanel from "../searchPanel/SearchPanel";
import StatusFilter from "../statusFilter/statusFilter";
import TodoList from "../todoList/TodoList";

export default class App extends Component {
  state = {
    todos: [
      { id: "lkjlkj", label: "Buy something", important: false },
      { id: "slkij4", label: "Todo something", important: true },
      { id: "87yjof", label: "Take something", important: false },
    ],
  };

  deleteHandler = (id) => {
    let newTodos = this.state.todos.filter((item) => item.id !== id);
    this.setState((prevState) => {
      console.log("prevState.todos", prevState.todos);
      console.log("newTodos", newTodos);
      return {
        todos: newTodos,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <div className="d-flex mb-5">
            <SearchPanel />
            <StatusFilter />
          </div>
          <TodoList
            data={this.state.todos}
            deleteHandler={this.deleteHandler}
          />
          <AddForm />
        </div>
      </div>
    );
  }
}
