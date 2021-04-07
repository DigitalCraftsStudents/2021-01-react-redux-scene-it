import { ADD_MOVIE, DELETE_MOVIE } from './actions';

const defaultState = {
  movies: [],
};

export function movieReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        movies: [...state.movies, action.movie],
      };
    case DELETE_MOVIE:
      return {};
    default:
      return state;
  }
}
