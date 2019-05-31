import React from "react";
import ReactDOM from "react-dom";
import { AddBox } from "./addbox";
import { List } from "./list";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);

    this.state = {
      todos: [{ key: 0, text: "test" }]
    };
  }

  addTodo(todo) {
    console.log(todo);
    this.state.todos.push({ key: 1, text: todo });
    this.setState({
      todos: this.state.todos
    });
  }

  render() {
    return (
      <div>
        <AddBox addTodo={this.addTodo} />
        <List todos={this.state.todos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
