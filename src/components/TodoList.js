import React from "react";
//Redux
import { connect } from "react-redux";
import { createTodo } from "../actions";
import { deleteTodo } from "../actions";
//Components
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  state = { newTitle: "", newTask: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.newTask !== "" && this.state.newTitle !== "") {
      this.props.createTodo(this.state.newTitle, this.state.newTask);
      this.setState({ newTitle: "", newTask: "" });
    }
  };
  onTitleChange = (e) => {
    this.setState({ newTitle: e.target.value });
  };
  onDescriptionChange = (e) => {
    this.setState({ newTask: e.target.value });
  };
  render() {
    let key = 0;
    return (
      <div>
        <h1 className="ui segment center aligned inverted">
          TodoList with React & Redux
        </h1>
        <form
          onSubmit={this.onFormSubmit}
          className="ui form "
          style={{ maxWidth: "500px", margin: "auto" }}
        >
          <div className="field">
            <label>What are you going to do</label>
            <input
              type="text"
              value={this.state.newTitle}
              onChange={this.onTitleChange}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <textarea
              value={this.state.newTask}
              onChange={this.onDescriptionChange}
            ></textarea>
          </div>
          <button className="ui button" type="submit">
            Add todo
          </button>
        </form>
        <div
          className="ui segment"
          style={{ maxWidth: "500px", margin: "auto", marginTop: "3vh" }}
        >
          {this.props.todoList.map((todo) => {
            key++;
            return <TodoItem key={key} title={todo.title} task={todo.task} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { todoList: state.todoList };
};

export default connect(mapStateToProps, { createTodo, deleteTodo })(TodoList);
