import { SET_USERNAME, SET_USERPROFILE } from '../actions/userAction';
import { InitialState, Actions } from '../types';

export default function reducer(state: InitialState, action: Actions) {
  switch(action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload };
    case SET_USERPROFILE:
      return { ...state, userProfile: action.payload };
    default:
      return state;
  }
}
