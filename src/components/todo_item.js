import React from 'react';

const TodoItem = props =>
  <li className="list-group-item">
      <p>{props.todo.title}</p>
      <button className="btn btn-danger float-right">Delete</button>
  </li>

export default TodoItem;
