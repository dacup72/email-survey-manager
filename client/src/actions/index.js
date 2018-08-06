import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  // sends action.type "FETCH_USER" to Reducers and updates everything in app using the user model
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  // history comes from the withRouter function used in SurveyFormRevew Component
  // the .push() on history allows us to select a route to navigate through our app
  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

