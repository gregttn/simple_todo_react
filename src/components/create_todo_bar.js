import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../actions/index';

class CreateTodoBar extends Component {
  constructor(props) {
    super(props);

    this.state = { todo: ''};
  }

  handleTodoChange(event) {
      this.setState({ todo: event.target.value});
  }

  onAddClick(event) {
    event.preventDefault();
    this.props.createTodo(this.state.todo);
    this.setState({ todo: ''});
  }

  render() {
    return (
      <form className="mt-4">
        <div className="input-group">
          <input
            value={this.state.todo}
            onChange={this.handleTodoChange.bind(this)}
            className="form-control mr-2"/>
          <button onClick={this.onAddClick.bind(this)}
              className="btn btn-primary">Add</button>
        </div>
      </form>
    );
  }
}

export default connect(null, { createTodo })(CreateTodoBar);
