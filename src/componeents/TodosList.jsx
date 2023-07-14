import React from "react";

const TodosList = ({ id, text, removeHandler }) => {
  return (
    <li
      onClick={() => {
        removeHandler(id);
      }}
    >
      {text}
    </li>
  );
};

export default TodosList;
