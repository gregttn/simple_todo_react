import { FETCH_TODOS_STARTED, FETCH_TODOS } from '../actions';

export default function(state = {}, action)  {
  switch (action.type) {
    case FETCH_TODOS_STARTED:
      return true;
    case FETCH_TODOS:
      return false;
    default:
      return state;
    }
}
