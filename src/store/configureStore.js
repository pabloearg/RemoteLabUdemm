/* eslint-disable no-undef */
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import initialState from './initialState';
import combiner from './combiner';

export default function configureStore(state = initialState) {
  const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk, logger),
  );

  const store = createStore(
    combiner,
    state,
    enhancer
  );
  return store;
}
