import React from "react";

export class AddBox extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    // console.log(e);
    let addText = document.getElementById("addText");
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
