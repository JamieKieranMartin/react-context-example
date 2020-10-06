import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// You could even add a Provider around App here to provide something to the entirety of the App
// An example could be something like login functionality or user session
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

