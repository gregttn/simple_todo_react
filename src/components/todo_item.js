import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: props.todo
    }
  }

  render() {
    const { todo } = this.state;
    return (
      <li className="list-group-item">
          <p>{todo.title}</p>
          <button className="btn btn-danger float-right">Delete</button>
      </li>
    );
  }
}

export default TodoItem;
