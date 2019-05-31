import React from "react";
import ReactDOM from "react-dom";
import { AddBox } from "./addbox";
import { List } from "./list";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faUndo, faTrash } from "@fortawesome/free-solid-svg-icons";

const uuidv1 = require("uuid/v1");

library.add(faCheck, faUndo, faTrash);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.markDone = this.markDone.bind(this);

    this.state = {
      todos: []
    };
  }

  addTodo(todo) {
    this.state.todos.push({
      key: uuidv1(),
      text: todo,
      done: 0
    });
    this.setState({
      todos: this.state.todos
    });
  }

  removeTodo(todoKey) {
    this.setState({
      todos: this.state.todos.filter(el => {
        return el.key !== todoKey;
      })
    });
  }

  markDone(todoKey) {
    this.setState({
      todos: this.state.todos.map(el => {
        if (el.key === todoKey) {
          el.done = 1;
        }
        return el;
      })
    });
  }

  render() {
    return (
      <div>
        <AddBox addTodo={this.addTodo} />
        <List
          todos={this.state.todos}
          removeTodo={this.removeTodo}
          markDone={this.markDone}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
