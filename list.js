import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
              <a
                className="button"
                data-id={value.key}
                onClick={this.onClickDeleteHandler}
              >
                <FontAwesomeIcon icon="trash" />
              </a>
              <a
                className="button"
                data-id={value.key}
                onClick={this.onClickDoneHandler}
              >
                <FontAwesomeIcon icon="check" />
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}
