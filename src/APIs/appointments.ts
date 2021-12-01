import { API, graphqlOperation } from 'aws-amplify';
import {
  appointmentByDayAndExperimentUserless,
  getAppointmentStudentRL,
  getAppointmentTakenRL,
  listAppointmentStudentRLs,
  getConfigRL,
  getUserRL,

} from '../graphql/queries';

import {
  updateAppointmentRL,
  createAppointmentRL,
  createAppointmentTakenRL,
  createAppointmentStudentRL,
} from '../graphql/mutations';
import { AppointmentType } from '../types/tables';
import { getAppointmentsArray } from '../utils/scripts';
import { waitMillis } from '../utils/utils';

class AppointmentApiClass {
  getAppointmentsByExperimentIdAndDay = (
    day: string,
    experimentId: string,
  ) => API.graphql(graphqlOperation(appointmentByDayAndExperimentUserless, {
    day,
    experimentIdIsTaken: {
      eq: {
        experimentId: experimentId,
        isTaken: "0",
      }
    },
  }))

  getAppointmentsByUser = (
    email: string,
  ) => API.graphql(graphqlOperation(listAppointmentStudentRLs, {
    email,
  }))

  getExperiments = () => API.graphql(graphqlOperation(getConfigRL, { id: 'experiments' }))

  setAppointmentIsTaken = (appointment: any) => API.graphql(graphqlOperation(
    updateAppointmentRL,
    { input: { ...appointment, isTaken: "1" } }
  ))

  createUserAppointment = (appointment: any,) => API.graphql(graphqlOperation(
    createAppointmentStudentRL,
    { input: { ...appointment, } }
  ))

  getUser = (email = 'pabloearg@gmail.com') => API.graphql(graphqlOperation(getUserRL, { id: email }));

  addExperiment = () => {
    const data = getAppointmentsArray("1")[0]
    return API.graphql(graphqlOperation(createAppointmentRL, {
      input: {
        day: data.day,
        id: data.id,
        hour: data.hour,
        uuid: data.uuid,
        isTaken: data.isTaken,
        experimentId: data.experimentId,
      }
    }))
  }

  addExperiments = async (experiment: string) => {
    const appointments = getAppointmentsArray(experiment)
    for (let i = 0; i < appointments.length; i++) {
      const appointment = appointments[i];
      await API.graphql(graphqlOperation(createAppointmentRL, { input: { ...appointment } }))
      await waitMillis(200)
      console.log("appointment: ", appointment)
    }
  }
}

const AppointmentApi = new AppointmentApiClass();

export {
  AppointmentApi
};
