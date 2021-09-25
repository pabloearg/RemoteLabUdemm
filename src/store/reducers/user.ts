import { initialState } from '../initialState';
import * as types from '../types';

export default (state = initialState.user, action) => {
  // We save existing data to prevent losing it in updates since its used in many places
  // let data = Object.assign(state.data, action.kid)
  switch (action.type) {
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        ...action.user,
      };
    default:
      return state;
  }
};
