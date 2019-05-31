import React from "react";

export class List extends React.Component {
  constructor(props) {
    super(props);
    this.onClickDeleteHandler = this.onClickDeleteHandler.bind(this);
    this.onClickDoneHandler = this.onClickDoneHandler.bind(this);
  }

  onClickDeleteHandler(e) {
    this.props.removeTodo(e.currentTarget.dataset.id);
  }

  onClickDoneHandler(e) {
    this.props.markDone(e.currentTarget.dataset.id);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(value => {
          return (
            <li
              style={{
                textDecoration: value.done ? "line-through" : "none"
              }}
            >
              {value.text}
              <button data-id={value.key} onClick={this.onClickDeleteHandler}>
                X
              </button>
              <button data-id={value.key} onClick={this.onClickDoneHandler}>
                Checkmark
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
