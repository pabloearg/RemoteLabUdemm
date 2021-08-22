import { combineReducers } from 'redux';
import appointments from './reducers/appointments';

const appReducer = combineReducers({
  appointments,
});

export default appReducer;
