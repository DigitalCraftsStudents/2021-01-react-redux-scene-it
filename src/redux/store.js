import { combineReducers, createStore } from 'redux';
import { movieReducer } from './reducers';

const rootReducer = combineReducers({
  movies: movieReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
