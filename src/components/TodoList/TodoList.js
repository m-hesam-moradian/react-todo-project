import React, { Component } from "react";
import Header from "./Header";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoTitle: "",
      status: "all",
    };

    this.addTodo = this.addTodo.bind(this);
    this.inputGether = this.inputGether.bind(this);
    this.removeBtn = this.removeBtn.bind(this);
    this.checkedBTn = this.checkedBTn.bind(this);

    // this.editTodo = this.editTodo.bind(this)
    // this.todoTitleHandler = this.todoTitleHandler.bind(this)
    // this.statusHandler = this.statusHandler.bind(this)
  }

  inputGether(event) {
    this.setState({ todoTitle: event.target.value });
  }
  addTodo(event) {
    event.preventDefault();
    document.querySelector(".todo-input").value = "";

    this.setState((prevState) => {
      return {
        todos: [
          ...prevState.todos,
          {
            todo: this.state.todoTitle,
            id: this.state.todos.length,
            status: false,
          },
        ],
      };
    });
  }

  removeBtn(id) {
    const afterDeleteArray = this.state.todos.filter((obj) => obj.id != id);

    this.setState({ todos: afterDeleteArray });
  }
  checkedBTn(id) {
    // console.log(id);

    const afterDeleteArray = this.state.todos.filter((obj) => obj.id != id);

    const selectedObject = this.state.todos.filter((obj) => obj.id == id);


    
    selectedObject[0].status = !selectedObject[0].status;
    // console.log(afterDeleteArray);
    // console.log(selectedObject);
    // const mergeArray = [...afterDeleteArray, ...selectedObject];
    // console.log(mergeArray);

    this.setState({ todos: [...afterDeleteArray, ...selectedObject] });
    // console.log(this.setState.todos);

    //     console.log(id);
    //        const afterDeleteArray = this.state.todos.filter((obj) => obj.id == id);
    //       //  afterDeleteArray[0].status = true;
    //       console.log(afterDeleteArray);
    //     this.setState((prevState) => {
    //       prevState.todos.map((obj) => {

    //           if (obj.id == id) {

    //             return {

    //                 }
    //           }
    //       })
    // }
    //   )
  }

  render() {
    return (
      <>
        <Header />
        <form>
          <input
            type="text"
            className="todo-input"
            maxLength="40"
            onChange={this.inputGether}
          />
          <button className="todo-button" type="submit" onClick={this.addTodo}>
            <i className="fas fa-plus-square"></i>
          </button>
          <div className="select">
            <select name="todos" className="filter-todo">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>

        <div className="todo-container">
          {/* <ul className="todo-list">
            {this.state.todos &&
              this.state.todos.map((obj) => (
                <Todo
                  title={obj.todo}
                  id={obj.id}
                  removeBtn={this.removeBtn}
                  checkedBTn={this.checkedBTn}
                  status={obj.status}
                />
              ))}
          </ul> */}
          <ul className="todo-list">
   
            {this.state.todos &&
              this.state.todos.map((obj) => {
                let checkClasses="todo ";
                if (obj.status) {
                  
                 checkClasses = "todo completed ";
                } 

                return (
                  <Todo
                    // key={obj.id}
                    title={obj.todo}
                    id={obj.id}
                    removeBtn={this.removeBtn}
                    checkedBTn={this.checkedBTn}
                    checkClasses={checkClasses}
                  />
                );
              })}
          </ul>
        </div>
      </>
    );
  }
}
