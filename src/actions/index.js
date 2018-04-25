export const FETCH_TODOS = 'fetch_todos';
export const DELETE_TODO = 'delete_todos';

const stub_todos = [
    {
      'id': 1,
      'title': "first todo"
    },
    {
      'id': 2,
      'title': "second todo"
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
