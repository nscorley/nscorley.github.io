/*
    ./client/index.js
    this is the webpack entry file
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './sass/base.scss';

ReactDOM.render(<App />, document.getElementById('root'));
