import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppointmentApi } from '../../APIs/appointments';
import { initialState } from '../initialState';
import * as types from '../types';

export const appointmentActions = {
  getUserAppointments: (
    user?: string,
  ) => ((dispatch: any, getState: any) => (
    new Promise(async (resolve, reject) => {
      try {
        const email = user ?? getState().user?.data?.email
        console.log("emaildddd: ", email)
        const appointmentResponse: any = await AppointmentApi.getAppointmentsByUser(email)
        const appointments = appointmentResponse?.data?.listAppointmentStudentRLs?.items;
        dispatch({ type: types.GET_CURRENT_APPOINTMENTS_SUCCESS, appointments: appointments });
        resolve(appointmentResponse);
      } catch (error) {
        reject(error);
      }
    })
  )),
  getAppointmentsByExperimentIdAndDay: (day: any, experimentId: any,) => ((dispatch: any) => (
    new Promise(async (resolve, reject) => {
      try {
        const parentResponse: any = await AppointmentApi.getAppointmentsByExperimentIdAndDay(day, experimentId)
        dispatch({ type: types.EDIT_APPOINTMENTS_SUCCESS, parent: parentResponse });
        resolve(parentResponse);
      } catch (error) {
        dispatch({ type: types.EDIT_APPOINTMENTS_SUCCESS, message: error });
        reject(error);
      }
    })
  )),
  getConfig: () => ((dispatch: any) => (
    new Promise(async (resolve, reject) => {
      try {
        const data = {}//await AppointmentApi.getConfigData()
        dispatch({ type: types.GET_CONFIG_SUCCESS, data });
        resolve(data);
      } catch (error) {
        reject(error)
      }
    })
  ))
};
