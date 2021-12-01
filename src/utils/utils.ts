import { filter, find } from 'lodash';
import moment from 'moment';
import { ToastAndroid } from 'react-native';
import ReactNativeCalendarEvents from 'react-native-calendar-events';
import { AppointmentRL, AppointmentStudentRL } from '../API';
import { Experiment } from '../types';

moment.locale('es-mx');

export const waitMillis = (timeInMillis: number): Promise<any> => new Promise((resolve) => setTimeout(resolve, timeInMillis));

export const convertExperimentArray = (array: any[]) => {
  const newObj = {};
  array.forEach((obj) => {
    newObj[obj.uuid] = obj;
  });
  return newObj;
};

export const getHourFromAppointment = (appointment: AppointmentStudentRL | AppointmentRL) => `${appointment?.hour?.substr(0, 2)}:${appointment?.hour?.substr(2, 2)}`;

export const getFormatedDayFromAppointment = (appointment: AppointmentStudentRL | AppointmentRL) => {
  if (!appointment?.day) {
    return '';
  }
  const momentDay = moment(appointment.day);
  return momentDay.format('DD MMM yyyy');
};

export const getExperimentById = (experimentId: string, experiments: Experiment[]) => {
  for (let i = 0; i < experiments.length; i++) {
    const element = experiments[i]
    if (element.uuid === experimentId)
      return element
  }
  return experiments[0]
}

export const addAppointmentToCalendar = async (appointment: AppointmentStudentRL, experiment: Experiment) => {
  try {
    const a = await ReactNativeCalendarEvents.checkPermissions();
    if (a !== 'authorized') {
      const b = await ReactNativeCalendarEvents.requestPermissions();
      if (b !== 'authorized')
        return

    }
    const day = getFormatedDayFromAppointment(appointment)
    const hour = getHourFromAppointment(appointment)
    const fecha = `El dia ${day} a las  ${hour} hs`
    const h = parseInt(appointment?.hour?.substr(0, 2))
    const m = parseInt(appointment?.hour?.substr(2, 2))

    const initDate = moment(appointment.day).set("hours", h).set("minutes", m).toISOString()
    const endDate = moment(initDate).add(30, "minutes").toISOString()
    const event = await ReactNativeCalendarEvents.saveEvent('Remote Lab', {
      description: `Turno para realizar el laboratorio de ${experiment.name},${fecha}`,
      startDate: initDate,
      endDate: endDate,
    });
    ToastAndroid.show("Se agrego el turno al calendario", 3000)
    return event
  } catch (error) {
    console.log("addAppointmentToCalendar: ", error);
  }
}

export const getMomentDateFromAppointment = (appointment: AppointmentStudentRL) => {
  const h = parseInt(appointment?.hour?.substr(0, 2))
  const m = parseInt(appointment?.hour?.substr(2, 2))
  return moment(appointment.day).set("hours", h).set("minutes", m)
}

export const getCurrentAppointments = (appointments: AppointmentStudentRL[]) => {
  const now = moment()
  return filter(appointments, (appointment) => {
    const appointmentDate = getMomentDateFromAppointment(appointment)
    return now.diff(appointmentDate, "millisecond") < 0
  })
}

export const getOldAppointments = (appointments: AppointmentStudentRL[]) => {
  const now = moment()
  return filter(appointments, (appointment) => {
    const appointmentDate = getMomentDateFromAppointment(appointment)
    return now.diff(appointmentDate, "millisecond") > 0
  })
}