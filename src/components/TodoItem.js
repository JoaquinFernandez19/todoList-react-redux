import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions";

class TodoItem extends React.Component {
  closeTodo = () => {
    this.props.deleteTodo(this.props.title);
  };
  render() {
    return (
      <div className="ui segment center aligned inverted">
        <h1>{this.props.title}</h1>
        <p>{this.props.task}</p>

        <i
          className="ui close icon"
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "5px",
            left: "5px",
          }}
          onClick={this.closeTodo}
        ></i>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todoList: state.todoList };
};

export default connect(mapStateToProps, { deleteTodo })(TodoItem);
