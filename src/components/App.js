import React from "react";
//Components
import TodoList from "./TodoList";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <TodoList />
      </div>
    );
  }
}

export default App;
