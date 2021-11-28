import moment from "moment"
import { v4 as uuidv4 } from 'uuid';
export const getAppointmentsArray = (experimentId: string) => {

  const appointments = []
  for (let i = 0; i < 48; i++) {
    for (let hour = 9; hour < 15; hour++) {
      for (let minutes = 0; minutes < 60; minutes += 30) {
        const date = moment().set("hours", 0).set("minutes", 0)
        date.add(i, "days")
        date.add(hour, "hours")
        date.add(minutes, "minutes")
        const id = uuidv4()
        const appointment = {
          uuid: id,
          day: date.format("MM-DD-YYYY"),
          hour: date.format("hhmm"),
          isTaken: "0",
          experimentId: experimentId,
          id: id,
        }
        appointments.push(appointment)
      }

    }
  }
  return appointments
  console.log("appointments: ", appointments)
}