import axios from 'axios';

export const FETCH_TODOS_STARTED = 'fetch_todos_started';
export const FETCH_TODOS = 'fetch_todos';
export const DELETE_TODO = 'delete_todos';
export const CREATE_TODO = 'create_todos';
export const UPDATE_TODO = 'update_todos';
const API_URL = 'https://jsonplaceholder.typicode.com/todos'

export function fetchTodos() {
  return function(dispatch) {
    dispatch(fetchTodosStarted());

    return axios.get(API_URL)
      .then(({ data }) => {
          dispatch(setTodos(data));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function fetchTodosStarted() {
  return {
    type: FETCH_TODOS_STARTED
  };
}

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data
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

  return {
    type: CREATE_TODO,
    payload: todo
  };
}

export function updateCompleted(todo, completed) {
  todo.completed = completed;

  return {
    type: UPDATE_TODO,
    payload: todo
  };
}
