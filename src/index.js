import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { Router } from 'react-router-dom';
import history from './history';

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router >,
  document.getElementById('root')
);