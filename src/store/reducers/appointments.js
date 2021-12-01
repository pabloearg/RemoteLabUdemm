import { getCurrentAppointments, getOldAppointments } from '../../utils/utils';
import { initialState } from '../initialState';
import * as types from '../types';

export default (state = initialState.appointments, action) => {
  // We save existing data to prevent losing it in updates since its used in many places
  // let data = Object.assign(state.data, action.kid)
  switch (action.type) {
    case types.GET_CURRENT_APPOINTMENTS_SUCCESS:
      console.log("action.appointments: " , action.appointments)
      const currentAppointments = getCurrentAppointments(action.appointments)
      const oldAppointments = getOldAppointments(action.appointments)
      console.log("action.currentAppointments: " , currentAppointments)
      console.log("action.oldAppointments: " , oldAppointments)
      return {
        ...state,
        currentAppointments:{data: [ ...currentAppointments ], loaded:true},
        oldAppointments:{data: [ ...oldAppointments ], loaded:true},
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
