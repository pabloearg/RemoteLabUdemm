export const userPablo = {
  input: {
    id: 'pabloearg@gmail.com',
    email: 'pabloearg@gmail.com',
    firstName: 'Pablo',
    lastName: 'Arguimbau',
    filedId: '19045',
    quantityViolations: 0,
    cleanDate: null,
    type: 'student',
    classes: [],
    appointments: [{
      experimentId: '1',
      uuid: '1',
      hour: '09:00',
      day: '2021-10-10',
    }]
  }
};

// const addClasses = () => {
//   const class1 = {};
//   API.graphql(graphqlOperation(createAppointment, {
//     input: {
//       ...class1
//     }
//   }));
// };

// const addExperiments = () => {
//   const config: Config = {
//     id: 'experiments',
//     experiments: [
//       {
//         name: 'Caída Libre',
//         uuid: '1',
//         iconUrl: 'http://remotelab.com.ar/content/images/arbol.png'
//       },
//       {
//         name: 'Plano Inclinado',
//         uuid: '2',
//         iconUrl: 'http://remotelab.com.ar/content/images/pelota_plano_inclinado.png'
//       },
//       {
//         name: 'Kirchoff',
//         uuid: '3',
//         iconUrl: 'http://remotelab.com.ar/content/images/kirchoff.png'
//       },
//       {
//         name: 'Capacitor',
//         uuid: '4',
//         iconUrl: 'http://remotelab.com.ar/content/images/cargaCapacitor.png'
//       },
//     ]
//   };
//   API.graphql(graphqlOperation(createConfig, {
//     input: {
//       ...config
//     }
//   }));
// };

// for (let index = 0; index < appointments1.length; index++) {
//   const element = appointments1[index];
//   console.log('element: ', element);
//   await API.graphql(graphqlOperation(createAppointment, {
//     input: {
//       ...element
//     }
//   }));
//   await waitMillis(250);
// }

// const addAppointments = async () => {
//   const appointments1 = constructAppointmentInfoArray('1');
//   const appointments2 = constructAppointmentInfoArray('2');
//   console.log(appointments1.length);
//   for (let index = 0; index < appointments2.length; index++) {
//     const element = appointments2[index];
//     console.log('element: ', element);
//     await API.graphql(graphqlOperation(createAppointment, {
//       input: {
//         ...element
//       }
//     }));
//     await waitMillis(250);
//   }
// };

// const constructAppointmentInfoArray = (experimentId: String): Appointment[] => {
//   const array = [];

//   // const daysQuantity = moment().daysInMonth();
//   const daysQuantity = 15;
//   for (let day = 0; day < (daysQuantity); day++) {
//     for (let hour = 9; hour < 18; hour++) {
//       for (let min = 0; min < 60; min += 30) {
//         const date = moment('23/09/2021', 'DD/MM/YYYY');
//         date.add('days', day + 5);
//         date.set('hours', hour);
//         date.set('minutes', min);
//         const appointmentA = {
//           day: date.format('yyyy-MM-DD'),
//           hour: date.format('HHmm'),
//           uuid: uuidv4()
//         };
//         array.push(appointmentA);
//       }
//     }
//   }
//   const appointments: Appointment[] = map(array, (element) => ({
//     id: `${experimentId}#${element.day}#${element.hour}`,
//     day: element.day,
//     hour: element.hour,
//     uuid: element.uuid,
//     experimentId,
//   }));
//   return appointments;
// };

// return (
//   <View>
//     <ButtonLarge onPress={addAppointments} text="ADD APPOINTMENT" style={{ margin: 20 }} />
//     <ButtonLarge onPress={addClasses} text="ADD CLASS" style={{ margin: 20 }} />
//     <ButtonLarge onPress={addExperiments} text="ADD EXPERIMENTS" style={{ margin: 20 }} />
//   </View>
// );

// import {
//   getUser,
//   appointmentByDayAndExperiment,
// } from '../../graphql/queries';
// import {
//   createAppointment, createConfig
// } from '../../graphql/mutations';
// import ButtonLarge from '../../Components/buttons/ButtonLarge/ButtonLarge';
// import { Appointment, Config, Experiment } from '../../API';
// import { waitMillis } from '../../utils/utils';
// import { appointmentActions } from '../../store/actions/appointments';

// import {
//   padStart,
//   map,
// } from 'lodash';
// import moment from 'moment';
// import { v4 as uuidv4 } from 'uuid';
// import TextHeadings from '../../Components/TextHeadings/TextHeadings';
// import { getString, translateEnum } from '../../static/locale';
// import { Colors } from '../../styles';
