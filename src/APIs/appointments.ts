import { API, graphqlOperation } from 'aws-amplify';
import {
  appointmentByDayAndExperimentUserless,
  getAppointmentTakenRL,
  getConfigRL,
  getUserRL,

} from '../graphql/queries';

import {
  updateAppointmentRL,
  createAppointmentRL,
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

    experimentId: {
      eq: experimentId,
    },
    // isTaken: {
    //   eq: false,
    // },
  }))

  getAppointmentsByUser = (
    email: string,
  ) => API.graphql(graphqlOperation(getAppointmentTakenRL, {
    email,
  }))

  getExperiments = () => API.graphql(graphqlOperation(getConfigRL, { id: 'experiments' }))

  setAppointment = (appointment: any) => API.graphql(graphqlOperation(
    updateAppointmentRL,
    { input: { ...appointment } }
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
