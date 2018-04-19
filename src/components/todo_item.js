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
          {todo.title}
      </li>
    );
  }
}

export default TodoItem;
