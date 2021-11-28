import { initialState } from '../initialState';
import * as types from '../types';

export default (state = initialState.appointments, action) => {
  // We save existing data to prevent losing it in updates since its used in many places
  // let data = Object.assign(state.data, action.kid)
  switch (action.type) {
    case types.GET_CURRENT_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        currentAppointments: { ...action.appointments },
        oldAppointments: { ...action.oldAppointments }
      };
    case types.ADD_APPOINTMENTS_SUCCESS:
      return state;
    case types.EDIT_APPOINTMENTS_SUCCESS:
      return state;
    case types.DELETE_APPOINTMENTS_SUCCESS:
      return state;
    default:
      return state;
  }
};
