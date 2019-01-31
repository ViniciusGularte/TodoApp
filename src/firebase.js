import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCpyFnDOeTi8R0aOqythf20SdsygsMf65A",
  authDomain: "todoapp-d740f.firebaseapp.com",
  databaseURL: "https://todoapp-d740f.firebaseio.com",
  projectId: "todoapp-d740f",
  storageBucket: "todoapp-d740f.appspot.com",
  messagingSenderId: "413317750782"

}
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")
