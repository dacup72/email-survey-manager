import axios from 'axios';
import { Fetch_USER } from './types';

const fetchUser = () => {
  axios.get('/api/current_user');
};