import {
  tagConstants,
} from '../constants';

// REDUCER
const INITIAL_STATE = [
  'primary',
  'secondary',
  'tertiary'
];

export default (state = INITIAL_STATE, action = []) => {
  switch (action.type) {
    case tagConstants.SAVE_TAG:
      return [...state,  action.payload];
    case tagConstants.REMOVE_TAG:
      return [...state.slice(0, action.payload)];
    default:
      return state;
  }
}