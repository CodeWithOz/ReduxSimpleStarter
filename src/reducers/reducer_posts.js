import _ from 'lodash';
import { FETCH_POSTS, DELETE_POST, fetchPosts } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
      break;
    case DELETE_POST:
      return _.omit(state, action.payload);
      break;
    default:
      return state;
  }
}
