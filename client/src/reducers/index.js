import { combineReducers } from 'redux';
// Rename the import with "as"
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

// This is the model for the Redux global state
export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
});
