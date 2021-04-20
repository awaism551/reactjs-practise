import React from "react";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  addTodo = (event) => {
    var desc = this.state.inputValue;
    if (desc) {
      var id = this.state.todos[this.state.todos.length - 1]?.id + 1;
      if (!id) {
        id = 1;
      }
      var todos = this.state.todos;
      todos.push({
        id,
        desc,
      });
      this.setState({
        todos,
        inputValue: "",
      });
    }
    event.preventDefault();
  };

  handleDelete = (id) => {
    var todos = this.state.todos;
    todos = todos.filter((todo) => todo.id !== id);
    this.setState({
      todos,
    });
  };

  render() {
    const todos = this.state.todos.map((todo, index) => {
      return (
        <li key={todo.id}>
          <div className="listItems">
            <span>{todo.desc}</span>
            <button onClick={() => this.handleDelete(todo.id)}>X</button>
          </div>
        </li>
      );
    });
    return (
      <div className="App">
        <h3>Todo List</h3>
        <br />
        <form onSubmit={this.addTodo}>
          <div className="input">
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
              autoFocus
            />
            <button type="submit">Add</button>
          </div>
        </form>
        <div className="todos">
          <ol className="todosList">{todos}</ol>
        </div>
      </div>
    );
  }
}

export default App;
