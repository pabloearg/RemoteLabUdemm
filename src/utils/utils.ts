import moment from 'moment';
import { Appointment } from '../API';

moment.locale('es-mx');

export const waitMillis = (timeInMillis: number): Promise<any> => new Promise((resolve) => setTimeout(resolve, timeInMillis));

export const convertExperimentArray = (array: any[]) => {
  const newObj = {};
  array.forEach((obj) => {
    newObj[obj.uuid] = obj;
  });
  return newObj;
};

export const getHourFromAppointment = (appointment: Appointment) => `${appointment?.hour?.substr(0, 2)}:${appointment?.hour?.substr(2, 2)}`;

export const getFormatedDayFromAppointment = (appointment: Appointment) => {
  if (!appointment?.day) {
    return '';
  }
  const momentDay = moment(appointment.day);
  return momentDay.format('DD MMM yyyy');
};
