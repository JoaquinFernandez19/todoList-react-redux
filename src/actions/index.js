//Action creators

export const createTodo = (title, task) => {
  return {
    type: "CREATE_TODO",
    payload: {
      title: title,
      task: task,
    },
  };
};

export const deleteTodo = (title) => {
  return {
    type: "DELETE_TODO",
    payload: {
      title: title,
    },
  };
};
