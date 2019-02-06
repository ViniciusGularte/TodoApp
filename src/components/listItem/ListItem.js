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
          <h4  onClick={() => this.completeClick(todoId)}>
            {todo.title}
          </h4>
          <hr></hr>
  </div>
    );
  }
}

export default connect(null, {completeTodo})(ListItem);
