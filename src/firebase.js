import * as firebase from 'firebase';
require('dotenv').config()

const config = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL:  'https://todoapp-d740f.firebaseio.com',
  projectId:  process.env.PROJECTID,
  storageBucket:  process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID

}
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")
