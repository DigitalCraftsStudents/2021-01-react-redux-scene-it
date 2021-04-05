export const ADD_MOVIE = 'ADD_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

export function createAddMovie() {
  return {
    type: ADD_MOVIE,
  };
}

export function createDeleteMovie() {
  return {
    type: DELETE_MOVIE,
  };
}
