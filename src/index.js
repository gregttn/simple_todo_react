import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './style/index.css';
import Todos from './containers/todos';
import CreateTodoBar from './components/create_todo_bar';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <CreateTodoBar/>
      <Todos/>
    </div>
  </Provider>
  ,document.querySelector('.container'));
registerServiceWorker();
