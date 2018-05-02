import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from '../components/todo_item';
import { fetchTodos } from '../actions/index';

class Todos extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderTodos() {
    return _.map(this.props.todos, todo => {
      if(!todo.completed) {
        return (
            <TodoItem todoId={todo.id} key={todo.id}/>
        );
      }
    })
  }
  render() {
    return (
      <div>
        <h5 className="text-center mt-5 mb-3">Your tasks...</h5>
        <ul className="list-group">
          {this.renderTodos()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todos }
}

export default connect(mapStateToProps, { fetchTodos })(Todos);
