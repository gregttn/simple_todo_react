export const FETCH_TODOS = 'fetch_todos';
export const DELETE_TODO = 'delete_todos';
export const CREATE_TODO = 'create_todos';

const stub_todos = [
    {
      'id': 1,
      'title': "first todo",
      'completed': false
    },
    {
      'id': 2,
      'title': "second todo",
      'completed': false
    },
    {
      'id': 3,
      'title': "completed todo",
      'completed': true
    }
  ];

export function fetchTodos() {
  return {
    type: FETCH_TODOS,
    payload: stub_todos
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export function createTodo(todoTitle) {
  const todo = {
    'id': new Date().getTime(),
    'title': todoTitle,
    'completed': false
  };

  stub_todos.push(todo);

  return {
    type: CREATE_TODO,
    payload: todo
  };
}
