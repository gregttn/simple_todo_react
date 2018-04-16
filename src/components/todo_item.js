import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title
    }
  }

  render() {
    return (
      <ul className="list-group-item">{this.state.title}</ul>
    );
  }
}

export default TodoItem;
