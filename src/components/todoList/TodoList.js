import React from "react";
import ListItem from "../listItem/ListItem";
import "./todo-list.css";

const TodoList = ({ data, deleteHandler }) => {
  let elements = data.map((item) => {
    let { id, ...todos } = item;
    return (
      <li className="list-group-item todoListItem" key={id}>
        <ListItem
          {...todos}
          deleteHandler={() => {
            deleteHandler(id);
          }}
        />
      </li>
    );
  });

  return <ul className="list-group list-group-flush">{elements}</ul>;
};

export default TodoList;
