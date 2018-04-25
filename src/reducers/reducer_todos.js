import _ from 'lodash';
import { FETCH_TODOS, DELETE_TODO } from '../actions';

export default function(state = {}, action)  {
  switch (action.type) {
    case FETCH_TODOS:
      return _.mapKeys(action.payload, 'id');
    case DELETE_TODO:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
