import { combineReducers } from 'redux';
import authReducer from './authReducer';

// This is the model for the Redux global state
export default combineReducers({
  auth: authReducer
});
