import _ from 'lodash';
import { FETCH_POSTS, fetchPosts } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
      break;
    default:
      return state;
  }
}
