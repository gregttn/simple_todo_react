import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Todos from './components/todos';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Todos/>
  ,document.querySelector('.container'));
registerServiceWorker();
