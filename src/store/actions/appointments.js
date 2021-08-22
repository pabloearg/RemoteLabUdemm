import AsyncStorage from '@react-native-async-storage/async-storage';
import { initialState } from '../initialState';
import * as types from '../types';

export default {
  getCurrentAppointments: () => (
    (dispatch) => (
      new Promise((resolve, reject) => {
        AsyncStorage.getItem('currentappointments')
          .then((appointments) => {
            dispatch({
              type: types.GET_CURRENT_APPOINTMENTS_SUCCESS,
              appointments: JSON.parse(appointments || [])
            });
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      })
    )
  ),
  addAppointment: (appointment) => (
    (dispatch, getState) => (
      dispatch({
        type: types.ADD_APPOINTMENTS_SUCCESS,
        appointment
      })
    )
  ),
  editAppointment: (appointment) => (
    (dispatch, getState) => (
      dispatch({
        type: types.EDIT_APPOINTMENTS_SUCCESS,
        appointment
      })
    )
  ),
  deleteAppointment: (appointment) => (
    (dispatch, getState) => (
      dispatch({
        type: types.DELETE_APPOINTMENTS_SUCCESS,
        appointment
      })
    )
  ),
};
