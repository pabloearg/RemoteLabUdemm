import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppointmentApi } from '../../APIs/appointments';
import { initialState } from '../initialState';
import * as types from '../types';

export const appointmentActions = {
  getNewUserAppointments: (user, appointments, oldAppointments) => ((dispatch) => (
    new Promise((resolve, reject) => {

      dispatch({ type: types.GET_CURRENT_APPOINTMENTS_SUCCESS, appointments, oldAppointments });
      resolve();
      // AppointmentApi.getAppointmentsByUser(user)
      //   .then((appointmentResponse) => {
      //     console.log({ appointmentResponse });
      //     const appointments = appointmentResponse?.data;
      //     console.log({ appointments });
      //     dispatch({ type: types.GET_CURRENT_APPOINTMENTS_SUCCESS, appointments });
      //     resolve();
      //   })
      //   .catch((error) => {
      //     reject(error);
      //   });
    })
  )),
  getAppointmentsByExperimentIdAndDay: (day, experimentId,) => ((dispatch) => (
    new Promise((resolve, reject) => {
      AppointmentApi.getAppointmentsByExperimentIdAndDay(day, experimentId)
        .then((parentResponse) => {
          dispatch({ type: types.EDIT_APPOINTMENTS_SUCCESS, parent: parentResponse });
          resolve();
        })
        .catch((error) => {
          dispatch({ type: types.EDIT_APPOINTMENTS_SUCCESS, message: error });
          reject(error);
        });
    })
  )),
  getConfig: () => ((dispatch) => (
    new Promise((resolve, reject) => {
      AppointmentApi.getConfigData().then((data) => {
        dispatch({ type: types.GET_CONFIG_SUCCESS, data });
        resolve(data);
      });
    })
  ))
};
