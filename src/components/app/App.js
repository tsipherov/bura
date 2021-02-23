import React, { Component } from "react";
import AddForm from "../addForm/AddForm";

import "./App.css";
import Header from "../header/Header";
import SearchPanel from "../searchPanel/SearchPanel";
import StatusFilter from "../statusFilter/statusFilter";
import TodoList from "../todoList/TodoList";

export default class App extends Component {
  lastId = 0;

  state = {
    todos: [
      this.createToDoItem("Buy something"),
      this.createToDoItem("Todo something"),
      this.createToDoItem("Take something"),
    ],
  };

  createToDoItem(label) {
    return {
      id: this.lastId++,
      important: false,
      done: false,
      label,
    };
  }

  deleteHandler = (id) => {
    let newTodos = this.state.todos.filter((item) => item.id !== id);
    this.setState((prevState) => {
      return {
        todos: newTodos,
      };
    });
  };

  addHandler = (todo) => {
    this.setState((prevState) => {
      let newTodo = this.createToDoItem(todo);
      let newTodos = [...prevState.todos, newTodo];
      console.log(newTodos);
      return {
        todos: newTodos,
      };
    });
  };

  toggleDone = (id) => {
    let newTodos = this.state.todos.map((item) => {
      if (id === item.id) {
        item.done = !item.done;
      }
      return item;
    });
    this.setState((prevState) => {
      return {
        todos: newTodos,
      };
    });
  };

  toggleImportant = (id) => {
    let newTodos = this.state.todos.map((item) => {
      if (id === item.id) {
        item.important = !item.important;
      }
      return item;
    });
    this.setState((prevState) => {
      return {
        todos: newTodos,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Header toDo={1} done={1} />
        <div className="wrapper">
          <div className="d-flex mb-5">
            <SearchPanel />
            <StatusFilter />
          </div>
          <TodoList
            data={this.state.todos}
            deleteHandler={this.deleteHandler}
            toggleDone={this.toggleDone}
            toggleImportant={this.toggleImportant}
          />
          <AddForm addHandler={this.addHandler} />
        </div>
      </div>
    );
  }
}
