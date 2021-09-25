import { combineReducers } from 'redux';
import appointments from './reducers/appointments';
import config from './reducers/config';
import user from './reducers/user';

const appReducer = combineReducers({
  appointments,
  config,
  user,
});

export default appReducer;
