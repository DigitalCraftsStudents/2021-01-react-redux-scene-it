export const ADD_MOVIE = 'ADD_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

export function createAddMovie(movie) {
  return {
    type: ADD_MOVIE,
    movie,
  };
}

export function createDeleteMovie(imdbID) {
  return {
    type: DELETE_MOVIE,
    imdbID,
  };
}

export const SET_LOADING = 'SET_LOADING';

export function setLoading(value) {
  return {
    type: SET_LOADING,
    value,
  };
}

export const SET_DATA = 'SET_DATA';

export const setData = (data) => {
  return {
    type: SET_DATA,
    data,
  };
};
