import { API, graphqlOperation } from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import {
  appointmentByDayAndExperimentUserless,
  getAppointmentStudentRL,
  getAppointmentTakenRL,
  listAppointmentStudentRLs,
  getConfigRL,
  getUserRL,
  listSubjectRLs,

} from '../graphql/queries';
import { v4 as uuidv4 } from 'uuid';

import {
  updateAppointmentRL,
  createAppointmentRL,
  createAppointmentTakenRL,
  createAppointmentStudentRL,
  updateAppointmentStudentRL,
  updateUserRL,
  createUserRL,
  createSubjectRL,
} from '../graphql/mutations';
import { AppointmentStatus, AppointmentType } from '../types/tables';
import { getAppointmentsArray } from '../utils/scripts';
import { waitMillis } from '../utils/utils';
import { SubjectRL, UserRL } from '../API';
import { map } from 'lodash';

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

  createUser = (user: any) => API.graphql(graphqlOperation(createUserRL, { input: { ...user } }))

  getUser = async () => {
    const user = await Auth.currentAuthenticatedUser()
    const email = user?.attributes?.email
    console.log("getUser")
    console.log({ email })
    return API.graphql(graphqlOperation(getUserRL, { id: email }));
  }

  // filter: {
  //   or: [
  //     {
  //       id: {
  //         eq: "id1"
  //       }
  //     },
  //     {
  //       id: {
  //         eq: "id2"
  //       }
  //     }
  //   ]
  // }

  getSubjects = async (subjects: string[]) => {
    const filter = {
      or: map(subjects, (subject) => {
        return {
          id: {
            eq: subject
          }
        }
      })
    }
    return API.graphql(graphqlOperation(listSubjectRLs, { filter }));
  }

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

  cancelAppointment = async (
    appointment: any,
    appointmentStudent: any,
    user: any,) => {
    const _appointment = { ...appointment }
    const _appointmentStudent = { ...appointmentStudent }
    const _user = { ...user }
    delete _appointment.updatedAt;
    delete _appointment.createdAt;
    delete _appointmentStudent.updatedAt;
    delete _appointmentStudent.createdAt;
    delete _appointmentStudent.owner;
    delete _user.updatedAt;
    delete _user.createdAt;
    delete _user.owner;
    // delete _user.id;
    await API.graphql(graphqlOperation(updateAppointmentRL, {
      input: {
        ..._appointment,
        isTaken: "0",
      }
    }))
    await API.graphql(graphqlOperation(updateAppointmentStudentRL, {
      input: {
        ..._appointmentStudent,
        status: AppointmentStatus.CANCELED,
      }
    }))
    console.log("_user: ", _user)
    await API.graphql(graphqlOperation(updateUserRL, {
      input: {
        ..._user,
        quantityViolations: !user?.quantityViolations ? 1 : user?.quantityViolations + 1,
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


  createSubjects = async () => {
    let subjects: SubjectRL[] = [
      {
        id: uuidv4(),
        university: "UDEMM",
        name: "FISICA I",
        students: [{
          email: "pabloearg@gmail.com",
          firstName: "Pablo",
          lastName: "Arguimbau"
        }, {
          email: "dmitri@gmail.com",
          firstName: "Dmitri",
          lastName: "Iarsev",
        }],
        periodBlock: "M"
      },
      {
        id: uuidv4(),
        university: "UDEMM",
        name: "FISICA II",
        students: [{
          email: "pabloearg@gmail.com",
          firstName: "Pablo",
          lastName: "Arguimbau"
        }, {
          email: "dmitri@gmail.com",
          firstName: "Dmitri",
          lastName: "Iarsev",
        }],
        periodBlock: "M"
      },
      {
        id: uuidv4(),
        university: "UDEMM",
        name: "QUIMICA I",
        students: [{
          email: "pabloearg@gmail.com",
          firstName: "Pablo",
          lastName: "Arguimbau"
        }, {
          email: "dmitri@gmail.com",
          firstName: "Dmitri",
          lastName: "Iarsev",
        }],
        periodBlock: "M"
      },
      {
        id: uuidv4(),
        university: "UDEMM",
        name: "QUIMICA II",
        students: [{
          email: "pabloearg@gmail.com",
          firstName: "Pablo",
          lastName: "Arguimbau"
        }, {
          email: "dmitri@gmail.com",
          firstName: "Dmitri",
          lastName: "Iarsev",
        }],
        periodBlock: "M"
      }
    ]
    for (let i = 0; i < subjects.length; i++) {
      const element = subjects[i];
      await API.graphql(graphqlOperation(createSubjectRL, { input: element }));

    }
  }
}

const AppointmentApi = new AppointmentApiClass();

export {
  AppointmentApi
};
