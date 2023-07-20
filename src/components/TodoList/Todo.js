import React, { Component } from "react";

export default class Todo extends Component {
  TrashBtn() {
    this.props.removeTodo(this.props.id);
  }
  render() {
    return (
      // 'completed' class for completed todos
      <div className="todo" style={{ display: "flex" }}>
        <li className="todo-item">{this.props.title}</li>

        <button className="check-btn ">
          <i className="fas fa-check" aria-hidden="true"></i>
        </button>

        <button className="trash-btn" onClick={this.TrashBtn.bind(this)}>
          <i className="fas fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}
