import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyADzWv4ahBvvuQ3_lPbN_Zbh11I3ooECHI",
  authDomain: "playground-f34c1.firebaseapp.com",
  databaseURL: "https://playground-f34c1.firebaseio.com",
  projectId: "playground-f34c1",
  storageBucket: "playground-f34c1.appspot.com",
  messagingSenderId: "287149944331"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
