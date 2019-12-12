import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const name = 'Hugo';
// const element= React.createElement('h1',{},`Hola Mundo ${name}`);
const element = <h1>Hola soy {name}</h1>
const container = document.getElementById('app');
ReactDOM.render(element, container);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
