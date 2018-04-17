import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './style/index.css';
import Todos from './components/todos';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Todos/>
  </Provider>
  ,document.querySelector('.container'));
registerServiceWorker();
