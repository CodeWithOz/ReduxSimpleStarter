import _ from 'lodash';
import { fetchPost, FETCH_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      return { [action.payload.data.id]: action.payload.data };
      break;
    default:
      return state;
  }
}
