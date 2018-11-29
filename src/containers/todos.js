import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import TodoItem from '../components/todo_item';
import { fetchTodos } from '../actions/index';

class Todos extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderTodos() {
    var todos =  _.map(this.props.todos, todo => {
      if(!todo.completed) {
        return (
            <TodoItem todoId={todo.id} key={todo.id}/>
        );
      }
    })

    return (
      <div>
        <h5 className="text-center mt-5 mb-3">Your tasks...</h5>
        <ul className="list-group">
          {todos}
        </ul>
      </div>
    );
  }

  renderLoading() {
    return (
        <div>
          <ReactLoading type="spinningBubbles" color="#000" />
        </div>
      );
  }

  render() {
    if(this.props.loading) {
      return this.renderLoading();
    }

    return this.renderTodos();
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    loading: state.loading
  };
}

export default connect(mapStateToProps, { fetchTodos })(Todos);
