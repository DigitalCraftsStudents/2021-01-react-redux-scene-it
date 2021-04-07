import { ADD_MOVIE, DELETE_MOVIE, SET_LOADING } from './actions';

export function movieReducer(state = [], action) {
  switch (action.type) {
    case ADD_MOVIE:
      return [...state, action.movie];
    case DELETE_MOVIE:
      return state.filter((movie) => movie.imdbID !== action.imdbID);
    default:
      return state;
  }
}

export function loadingReducer(state = false, action) {
  switch (action.type) {
    case SET_LOADING:
      return action.value;
    default:
      return state;
  }
}
