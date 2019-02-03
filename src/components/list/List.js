import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as actions from '../../actions';
import ListItem from '../listItem/ListItem';
import './list.scss';

class List extends Component {
  state = {
    showForm: false,
    formValue: ""
  };

  inputChange = event => {
    this.setState({formValue: event.target.value});
  };

  formSubmit = event => {
    const {formValue} = this.state;
    const {addToDo} = this.props;
    event.preventDefault();
    addToDo({title: formValue});
    this.setState({formValue: ""});
  };

  renderForm = () => {
    const {showForm, formValue} = this.state;
    if (showForm) {
      return (
        <div id="todo-add-form" className="todo__form">
          <form onSubmit={this.formSubmit}>
            <div className="todo__form--input">
              <h4 className="todo__label">What Next?</h4>

              <input
                value={formValue}
                onChange={this.inputChange}
                type="text"
              />
            </div>
          </form>
        </div>
      );
    }
  };
  renderToDo() {
    const {data} = this.props;
    const toDos = _.map(data, (value, key) => {
      return <ListItem key={key} todoId={key} todo={value} />;
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return (
      <div className="todo__form">
        <h4>You have no more things ToDo!</h4>
      </div>
    );
  }
  componentWillMount() {
    this.props.fetchToDos();
  }
  render() {
    const {showForm} = this.state;
    return (
      <div className="todo__form">
        <div className="">
          {this.renderForm()}
          {this.renderToDo()}
        </div>
        <div className="fixed-action-btn">
          <button
            onClick={() => this.setState({showForm: !showForm})}
            className=""
          >
          {showForm ? (
            <i className="">-</i>
          ) : (
            <i className="">+</i>
          )}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({data}) => {
  return {
    data
  }
}

export default connect(mapStateToProps, actions)(List);
