import { combineReducers } from 'redux';
import postReducers from './postsReducers'
import userReducer from './userReducer'

export default combineReducers({
    posts: postReducers,
    users: userReducer
});