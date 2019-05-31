import React from "react";

export class AddBox extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    let addText = document.getElementById("addText");
    if (addText.value === "") {
      // Can't add blank
      // TODO: Show error message
      return;
    }
    this.props.addTodo(addText.value);
    addText.value = "";
  }

  render() {
    return (
      <div>
        <input type="text" id="addText" />
        <button onClick={this.onClickHandler}>Add</button>
      </div>
    );
  }
}
