import React from "react";
import logo from "./logo.svg";

const Header = ({ toDo, done }) => {
  return (
    <header className="App-header mb-5">
      <div className="wrapper d-flex justify-content-between align-items-center">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Todo List</h1>
        <h2 className="align-self-end pb-3">
          {toDo} more to do, {done} done
        </h2>
      </div>
    </header>
  );
};

export default Header;
