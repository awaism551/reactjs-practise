import React, { useState } from "react";
import "./App.scss";

interface TodoProps {}
interface Todo {
  id: number;
  desc: string;
}

const App = (props: TodoProps) => {
  let [inputValue, setInputValue] = useState<string>("");
  let [todos, setTodos] = useState<Todo[]>([]);

  const handleInputChange = (event: { target: HTMLInputElement }) => {
    debugger;
    setInputValue(event.target.value);
  };

  const addTodo = (event: any) => {
    debugger;
    if (inputValue) {
      let id = todos[todos.length - 1]?.id + 1;
      if (!id) {
        id = 1;
      }
      todos.push({
        id,
        desc: inputValue,
      });
      setTodos(todos);
      setInputValue("");
    }
    event.preventDefault();
  };

  const handleDelete = (id: number) => {
    debugger;
    todos = todos.filter((todo) => todo?.id !== id);
    setTodos(todos);
  };

  const todosToRender = todos.map((todo) => {
    return (
      <li key={todo.id}>
        <div className="listItems">
          <span>{todo.desc}</span>
          <button onClick={() => handleDelete(todo.id)}>X</button>
        </div>
      </li>
    );
  });
  return (
    <div className="App">
      <h3>Todo List</h3>
      <br />
      <form onSubmit={addTodo}>
        <div className="input">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            autoFocus
          />
          <button type="submit">Add</button>
        </div>
      </form>
      <div className="todos">
        <ol className="todosList">{todosToRender}</ol>
      </div>
    </div>
  );
};

export default App;
