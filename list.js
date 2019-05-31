import React from "react";

export class List extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    this.props.removeTodo(Number.parseInt(e.currentTarget.dataset.id));
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(value => {
          return (
            <li>
              {value.text}
              <button data-id={value.key} onClick={this.onClickHandler}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
