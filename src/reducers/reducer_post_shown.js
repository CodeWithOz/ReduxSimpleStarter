import _ from 'lodash';
import { fetchPost, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      return { [action.payload.data.id]: action.payload.data };
      break;
    case DELETE_POST:
      return {};
      break;
    default:
      return state;
  }
}
