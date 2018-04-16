import React, { Component } from 'react';
import TodoItem from './todo_item';

class Todos extends Component {
  render() {
    return (
      <div>
        <h4>Todos</h4>
        <ul className="list-group">
          <TodoItem title="item 1"/>
          <TodoItem title="item 2"/>
        </ul>
      </div>
    );
  }
}

export default Todos;
