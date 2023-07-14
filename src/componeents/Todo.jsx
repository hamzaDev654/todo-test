import React, { useRef } from "react";

const TodoList = ({ addTask }) => {
  const inputTodoRf = useRef();
  const formRef = useRef("");
  const submitHandler = (e) => {
    e.preventDefault();
    const inputRef = inputTodoRf.current.value;
    addTask(inputRef);
    formRef.current.reset();
  };

  return (
    <form onSubmit={submitHandler} ref={formRef}>
      <div className="form-control">
        <span className="">TODO</span>
        <div className="inputContent">
        <input type="text" ref={inputTodoRf} />
        <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );
};

export default TodoList;
