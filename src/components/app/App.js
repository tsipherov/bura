import React from "react";
import AddForm from "../addForm/AddForm";

import "./App.css";
import Header from "../header/Header";
import SearchPanel from "../searchPanel/SearchPanel";
import StatusFilter from "../statusFilter/statusFilter";
import TodoList from "../todoList/TodoList";

function App() {
  const todos = [
    { id: "lkjlkj", label: "Buy something", important: false },
    { id: "slkij4", label: "Todo something", important: true },
    { id: "87yjof", label: "Take something", important: false },
  ];

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <div className="d-flex mb-5">
          <SearchPanel />
          <StatusFilter />
        </div>
        <TodoList data={todos} />
        <AddForm />
      </div>
    </div>
  );
}

export default App;
