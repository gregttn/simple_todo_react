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
      return (
          <TodoItem todo={todo} key={todo.id}/>
      );
    })
  }
  render() {
    return (
      <div>
        <h4>Todos</h4>
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
