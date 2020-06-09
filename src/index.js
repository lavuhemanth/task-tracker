import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAep0ePNQobQg4kHssPREfsY46W5vHiaiE",
  authDomain: "task-tracker-86e5f.firebaseapp.com",
  databaseURL: "https://task-tracker-86e5f.firebaseio.com",
  projectId: "task-tracker-86e5f",
  storageBucket: "task-tracker-86e5f.appspot.com",
  messagingSenderId: "672035833630",
  appId: "1:672035833630:web:3a0f21c23cf3bfba67ab0f",
  measurementId: "G-VJ1RGQBH7J"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
