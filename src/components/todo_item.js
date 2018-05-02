import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, updateCompleted } from '../actions/index';

class TodoItem extends Component {
  onDeleteClick() {
    this.props.deleteTodo(this.props.todo.id);
  }

  onCompletedClick(event) {
    this.props.updateCompleted(this.props.todo, event.target.checked)
  }

  render() {
    const { todo } = this.props;
    return (
      <li className="list-group-item">
        <div className="form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            defaultChecked={todo.completed}
            onChange={this.onCompletedClick.bind(this)}
            />
          <label
            className="form-check-label ml-2">
              {todo.title}
          </label>
        </div>
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

export default connect(mapStateToProps, { deleteTodo, updateCompleted })(TodoItem);
