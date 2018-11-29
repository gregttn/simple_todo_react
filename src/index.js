import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './style/index.css';
import Todos from './containers/todos';
import CreateTodoBar from './components/create_todo_bar';
import CompletedBadge from './components/completed_badge';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <CreateTodoBar/>
      <Todos/>
    <CompletedBadge />
    </div>
  </Provider>
  ,document.querySelector('.container'));
registerServiceWorker();
