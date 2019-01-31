import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeTodo} from '../actions/index';

class ListItem extends Component {
  completeClick = completeTodoId => {
    const {completeTodo} = this.props;
    completeTodo(completeTodoId);
  };
  render() {
    const{todoId, todo} = this.props;
    return (
      <div key="toDoName" className="">
          <h4>
            {todo.title}
            <span
              onClick={() => this.completeClick(todoId)}
              className="complete-todo-item waves-effect waves-light blue lighten-5 blue-text text-darken-4 btn"
            >
              <i className="large material-icons">✓</i>
            </span>
          </h4>
  </div>
    );
  }
}

export default connect(null, {completeTodo})(ListItem);
