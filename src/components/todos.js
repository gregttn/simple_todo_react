import React, { Component } from 'react';

class Todos extends Component {
  render() {
    return (
      <div>
        <h4>Todos</h4>
        <ul className="list-group">
          <li className="list-group-item">Item 1</li>
          <li className="list-group-item">Item 2</li>
        </ul>
      </div>
    );
  }
}

export default Todos;
