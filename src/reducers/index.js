import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import PostShownReducer from './reducer_post_shown';

const rootReducer = combineReducers({
  posts: PostsReducer,
  postShown: PostShownReducer,
  form: formReducer
});

export default rootReducer;
