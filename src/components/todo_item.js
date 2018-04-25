import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/index';

class TodoItem extends Component {
  onDeleteClick() {
    this.props.deleteTodo(this.props.todo.id);
  }

  render() {
    const { todo } = this.props;
    return (
      <li className="list-group-item">
          <p>{todo.title}</p>
          <button
            className="btn btn-danger float-right"
            onClick={this.onDeleteClick.bind(this)}>Delete</button>
      </li>
    );
  }
}

function mapStateToProps({ todos }, ownProps) {
  return { todo: todos[ownProps.todoId] }
}

export default connect(mapStateToProps, { deleteTodo })(TodoItem);
