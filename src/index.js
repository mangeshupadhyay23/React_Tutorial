import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
//import Using_state from './Person/using state'
import * as serviceWorker from './serviceWorker';
//import Revision from './Person/revision';
//there are two type of compnent statefull component contianing state using state property or hook and other is called stateless
//stateless are called dumb they are just to give output or display something
//stateful components are called smart components 

ReactDOM.render(<App tittle="Person Manager App"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
