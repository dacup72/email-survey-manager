// All react components refresh when reducer updates the state
import { FETCH_USER } from "../actions/types";

// Determines if the user is logged in or not
// Default state is null which specifies we do not know the current state of the user
export default function(state = null, action) {
  switch (action.type) {
    // Return the users model if they are logged in and false if they are not
    case FETCH_USER: 
      return action.payload || false;
    default:
      return state;
  }
};