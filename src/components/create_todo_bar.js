import React, { Component } from 'react';

export default class CreateTodoBar extends Component {
  render() {
    return (
      <form className="mt-4">
        <div className="input-group">
          <input className="form-control mr-2"/>
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    );
  }
}
