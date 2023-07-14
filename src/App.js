import "./App.css";
import Card from "./componeents/Card";
import Todo from "./componeents/Todo";
import TodosList from "./componeents/TodosList";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
function App() {
  const [todo, setToos] = useState([]);

  const onAddHandler = (task) => {
    const updatedTodo = [
      ...todo,
      {
        id: Math.random().toString(),
        task,
      },
    ];
    setToos(updatedTodo);
  };

  const removeHandler = (id) => {
    const toddo__ = todo.filter((item) => item.id !== id);
    setToos(toddo__);
  };

  let content = "";

  if (todo.length) {
    content = todo.map((item) => (
      <Card key={item.id}>
        <RxCrossCircled
          onClick={() => {
            removeHandler(item.id);
          }}
          className="icon"
        />
        <TodosList
          removeHandler={removeHandler}
          id={item.id}
          text={item.task}
        />  
      </Card>
    ));
  }

  return (
    <section id="todo-id">
      <Todo addTask={onAddHandler} />
      {todo.length ? <ul className="listDiv">{content}</ul> : null}
    </section>
  );
}

export default App;
