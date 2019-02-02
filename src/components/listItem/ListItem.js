import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeTodo} from '../../actions/index';

class ListItem extends Component {
  completeClick = completeTodoId => {
    const {completeTodo} = this.props;
    completeTodo(completeTodoId);
  };
  render() {
    const{todoId, todo} = this.props;
    return (
      <div key="toDoName" className="todoItem">
          <h4>
            {todo.title}
            <span
              onClick={() => this.completeClick(todoId)}
              className="todoItem__span"
            >
              <i className="todoItem__icon">✓</i>
            </span>
          </h4>
  </div>
    );
  }
}

export default connect(null, {completeTodo})(ListItem);
