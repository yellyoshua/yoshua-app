import {
  combineReducers,
  compose,
  applyMiddleware,
  legacy_createStore,
} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const rootReducer = combineReducers(reducers);

export default () => {
  const store = legacy_createStore(
    rootReducer,
    compose(applyMiddleware(thunk)),
  );
  return store;
};
