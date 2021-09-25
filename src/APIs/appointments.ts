import { API, graphqlOperation } from 'aws-amplify';
import {
  appointmentByDayAndExperiment,
  getConfig,
  getUser,
  appointmentByEmail,
} from '../graphql/queries';

import {
  updateAppointment,
} from '../graphql/mutations';

class AppointmentApiClass {
  getAppointmentsByExperimentIdAndDay = (
    day,
    experimentId,
  ) => API.graphql(graphqlOperation(appointmentByDayAndExperiment, {
    day,
    experimentId: {
      eq: experimentId,
    },
  }))

  getAppointmentsByUser = (
    user,
  ) => API.graphql(graphqlOperation(appointmentByEmail, {
    user,
  }))

  getExperiments = () => API.graphql(graphqlOperation(getConfig, { id: 'experiments' }))

  setAppointment = (appointment) => API.graphql(graphqlOperation(
    updateAppointment,
    { input: { ...appointment } }
  ))

  getUser = (email = 'pabloearg@gmail.com') => API.graphql(graphqlOperation(getUser, { id: email }));
}

const AppointmentApi = new AppointmentApiClass();

export {
  AppointmentApi
};
