import { ADD_MOVIE, DELETE_MOVIE } from './actions';

const defaultState = {};

export function movieReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return {};
    case DELETE_MOVIE:
      return {};
    default:
      return state;
  }
}
