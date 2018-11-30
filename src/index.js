import React from 'react';
import ReactDOM from 'react-dom';

// importe le provider super composant qui vient donner le store aux containers

import { Provider } from 'react-redux';
import { createStore } from 'redux';
 
import './index.css';
import App from './App';
// import tous les reducers
import allReducers from './reducers'
import * as serviceWorker from './serviceWorker';

const store = createStore(allReducers);

ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
