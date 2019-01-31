import {todosRef} from '../firebase'
const FETCH_TODOS = 'FETCH_TODOS';

export const addToDo = newToDo => async dispatch => {
  todosRef.push().set(newToDo);
};

export const completeTodo = completeTodo => async dispatch => {
  todosRef.child(completeTodo).remove();
};

export const fetchToDos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};
