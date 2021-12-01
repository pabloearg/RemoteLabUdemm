// @flow
type Experiment = {
  uuid: string,
  name: string,
  iconUrl:any,
}

type DateAppoinment = {
  id: string,
  day?: string | null,
  hour?: string | null,
  uuid?: string | null,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  experimentId?: string | null,
}

export type {
  Experiment,
  DateAppoinment,
};
