export type AppointmentType = {
  id: string,
  day: string,
  hour: string,
  uuid: string,
  email?: string,
  firstName?: string,
  lastName?: string,
  experimentId: string,
}


export enum AppointmentStatus {
  NORMAL = "0",
  WENT = "1",
  CANCELED = "2",
  MISSED = "3",
}