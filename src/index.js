import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// var express = require('express')

// //app setup

// var app = express()
// var server = app.listen(4000, function(){
//     console.log('listening to requests on port 4000')
// })

// //static file
// app.use(express.static('public'))

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
