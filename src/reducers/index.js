import { combineReducers } from 'redux';
import TodosReducer from './reducer_todos'
import LoadingReducer from './reducer_loading'

const rootReducer = combineReducers({
  todos: TodosReducer,
  loading: LoadingReducer
});

export default rootReducer;
