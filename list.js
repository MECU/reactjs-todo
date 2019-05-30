import React from "react";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(value => {
          return (
            <li>
              {value.text} <button data-id={value.key}>X</button>
            </li>
          );
        })}
      </ul>
    );
  }
}
