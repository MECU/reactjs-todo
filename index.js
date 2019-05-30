import React from "react";
import ReactDOM from "react-dom";
import { AddBox } from "./addbox";
import { List } from "./list";

let todos = [{ key: 0, text: "test" }];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AddBox />
        <List todos={todos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
