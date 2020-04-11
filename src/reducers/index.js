import { combineReducers } from "redux";

// Redux reducers

export const todoListReducer = (todoList = [], action) => {
  if (action.type === "CREATE_TODO") {
    return [...todoList, action.payload];
  }
  if (action.type === "DELETE_TODO") {
    return todoList.filter((todo) => {
      if (todo.title !== action.payload.title) {
        return todo;
      }
      return null;
    });
  }
  return todoList;
};

export default combineReducers({
  todoList: todoListReducer,
});
