export const FETCH_TODOS = 'fetch_todos';
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
