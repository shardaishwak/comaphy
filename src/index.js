import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

let config = {
	apiKey: 'AIzaSyBo8Aw1iAiigCq21AzRlYynHGp6LFW-ojw',
	authDomain: 'fantasiabase.firebaseapp.com',
	databaseURL: 'https://fantasiabase.firebaseio.com',
	projectId: 'fantasiabase',
	storageBucket: 'fantasiabase.appspot.com',
	messagingSenderId: '1036882564842'
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
