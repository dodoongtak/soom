export function setTaskTitle(taskTitle) {
  return (
    {
      type: 'setTaskTitle',
      payload: { taskTitle }
    }
  );
}

export function addTodo() {
  return ({ type: 'addTodo' });
}

export function deleteTodo(id) {
  return ({
    type: 'deleteTodo',
    payload: { id }
  });
}