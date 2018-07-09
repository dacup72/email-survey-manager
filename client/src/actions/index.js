import axios from 'axios';
import { Fetch_USER, FETCH_USER } from './types';

export const fetchUser = () => {
  return function(dispatch) {
    axios
      .get('/api/current_user')
      .then(res => {
      dispatch({ type: FETCH_USER, payload: res });
      });
  }
};