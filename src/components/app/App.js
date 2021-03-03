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
    term: "",
    filter: "all",
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
      return {
        todos: newTodos,
      };
    });
  };

  toggleProperty = (id, property) => {
    let newTodos = this.state.todos.map((item) => {
      if (id === item.id) {
        let newItem = { ...item };
        newItem[property] = !newItem[property];
        return newItem;
      }
      return item;
    });
    this.setState((prevState) => {
      return {
        todos: newTodos,
      };
    });
  };

  search = (todos, term) => {
    if (!term) {
      return todos;
    }

    return todos.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  searchHandler = (term) => {
    this.setState({ term });
  };

  filter = (todos, filter) => {
    if (filter === "all") return todos;
    if (filter === "done") {
      return todos.filter((item) => item.done);
    } else {
      return todos.filter((item) => !item.done);
    }
  };

  toggleFilterHandler = (filterData) => {
    this.setState({
      filter: filterData,
    });
  };

  render() {
    const { todos, term, filter } = this.state;
    let doneItemCounter = this.state.todos.filter((item) => item.done).length;
    let todoCounter = this.state.todos.length - doneItemCounter;
    let termTodos = this.filter(this.search(todos, term), filter);

    return (
      <div className="App">
        <Header toDo={todoCounter} done={doneItemCounter} />
        <div className="wrapper">
          <div className="d-flex mb-5">
            <SearchPanel searchHandler={this.searchHandler} />
            <StatusFilter toggleFilterHandler={this.toggleFilterHandler}
              filter={ filter }/>
          </div>
          <TodoList
            data={termTodos}
            deleteHandler={this.deleteHandler}
            toggleProperty={this.toggleProperty}
          />
          <AddForm addHandler={this.addHandler} />
        </div>
      </div>
    );
  }
}
