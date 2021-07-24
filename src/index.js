import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Router from './Router'
import { Amplify } from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)
ReactDOM.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);

