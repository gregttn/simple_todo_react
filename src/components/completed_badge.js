import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class CompletedBadge extends Component {
  render() {
    const completed = _.filter(this.props.todos, todo => todo.completed )
    return (
      <div className="d-flex justify-content-center mt-4">
        <span className="badge badge-pill badge-secondary p-2">
            {_.size(completed)} Completed tasks
        </span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos : state.todos };
}

export default connect(mapStateToProps)(CompletedBadge);
