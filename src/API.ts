/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  email: string,
  firstName: string,
  lastName: string,
  filedId?: string | null,
  quantityViolations?: number | null,
  cleanDate?: string | null,
  type: string,
  subjects?: Array< string | null > | null,
  appointments?: Array< AppointmentLocalInput | null > | null,
};

export type AppointmentLocalInput = {
  experimentId?: string | null,
  uuid?: string | null,
  hour?: string | null,
  day?: string | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  filedId?: ModelStringInput | null,
  quantityViolations?: ModelIntInput | null,
  cleanDate?: ModelStringInput | null,
  type?: ModelStringInput | null,
  subjects?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  email: string,
  firstName: string,
  lastName: string,
  filedId?: string | null,
  quantityViolations?: number | null,
  cleanDate?: string | null,
  type: string,
  subjects?: Array< string | null > | null,
  appointments?:  Array<AppointmentLocal | null > | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type AppointmentLocal = {
  __typename: "AppointmentLocal",
  experimentId?: string | null,
  uuid?: string | null,
  hour?: string | null,
  day?: string | null,
};

export type UpdateUserInput = {
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  filedId?: string | null,
  quantityViolations?: number | null,
  cleanDate?: string | null,
  type?: string | null,
  subjects?: Array< string | null > | null,
  appointments?: Array< AppointmentLocalInput | null > | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateAppointmentInput = {
  id?: string | null,
  day?: string | null,
  hour?: string | null,
  uuid?: string | null,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  experimentId?: string | null,
};

export type ModelAppointmentConditionInput = {
  day?: ModelStringInput | null,
  hour?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  experimentId?: ModelStringInput | null,
  and?: Array< ModelAppointmentConditionInput | null > | null,
  or?: Array< ModelAppointmentConditionInput | null > | null,
  not?: ModelAppointmentConditionInput | null,
};

export type Appointment = {
  __typename: "Appointment",
  id: string,
  day?: string | null,
  hour?: string | null,
  uuid?: string | null,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  experimentId?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAppointmentInput = {
  id: string,
  day?: string | null,
  hour?: string | null,
  uuid?: string | null,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  experimentId?: string | null,
};

export type DeleteAppointmentInput = {
  id: string,
};

export type CreateSubjectInput = {
  id?: string | null,
  name: string,
  students?: Array< StudentInput | null > | null,
};

export type StudentInput = {
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
};

export type ModelSubjectConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSubjectConditionInput | null > | null,
  or?: Array< ModelSubjectConditionInput | null > | null,
  not?: ModelSubjectConditionInput | null,
};

export type Subject = {
  __typename: "Subject",
  id: string,
  name: string,
  students?:  Array<Student | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type Student = {
  __typename: "Student",
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
};

export type UpdateSubjectInput = {
  id: string,
  name?: string | null,
  students?: Array< StudentInput | null > | null,
};

export type DeleteSubjectInput = {
  id: string,
};

export type CreateConfigInput = {
  id?: string | null,
  experiments?: Array< ExperimentInput | null > | null,
};

export type ExperimentInput = {
  uuid: string,
  name: string,
  iconUrl?: string | null,
};

export type ModelConfigConditionInput = {
  and?: Array< ModelConfigConditionInput | null > | null,
  or?: Array< ModelConfigConditionInput | null > | null,
  not?: ModelConfigConditionInput | null,
};

export type Config = {
  __typename: "Config",
  id: string,
  experiments?:  Array<Experiment | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type Experiment = {
  __typename: "Experiment",
  uuid: string,
  name: string,
  iconUrl?: string | null,
};

export type UpdateConfigInput = {
  experiments?: Array< ExperimentInput | null > | null,
};

export type DeleteConfigInput = {
  id: string,
};

export type ModelUserFilterInput = {
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  filedId?: ModelStringInput | null,
  quantityViolations?: ModelIntInput | null,
  cleanDate?: ModelStringInput | null,
  type?: ModelStringInput | null,
  subjects?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelAppointmentFilterInput = {
  id?: ModelIDInput | null,
  day?: ModelStringInput | null,
  hour?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  experimentId?: ModelStringInput | null,
  and?: Array< ModelAppointmentFilterInput | null > | null,
  or?: Array< ModelAppointmentFilterInput | null > | null,
  not?: ModelAppointmentFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelAppointmentConnection = {
  __typename: "ModelAppointmentConnection",
  items?:  Array<Appointment | null > | null,
  nextToken?: string | null,
};

export type ModelSubjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSubjectFilterInput | null > | null,
  or?: Array< ModelSubjectFilterInput | null > | null,
  not?: ModelSubjectFilterInput | null,
};

export type ModelSubjectConnection = {
  __typename: "ModelSubjectConnection",
  items?:  Array<Subject | null > | null,
  nextToken?: string | null,
};

export type ModelConfigFilterInput = {
  and?: Array< ModelConfigFilterInput | null > | null,
  or?: Array< ModelConfigFilterInput | null > | null,
  not?: ModelConfigFilterInput | null,
};

export type ModelConfigConnection = {
  __typename: "ModelConfigConnection",
  items?:  Array<Config | null > | null,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAppointmentAppointmentByDateAndExperimentCompositeKeyConditionInput = {
  eq?: ModelAppointmentAppointmentByDateAndExperimentCompositeKeyInput | null,
  le?: ModelAppointmentAppointmentByDateAndExperimentCompositeKeyInput | null,
  lt?: ModelAppointmentAppointmentByDateAndExperimentCompositeKeyInput | null,
  ge?: ModelAppointmentAppointmentByDateAndExperimentCompositeKeyInput | null,
  gt?: ModelAppointmentAppointmentByDateAndExperimentCompositeKeyInput | null,
  between?: Array< ModelAppointmentAppointmentByDateAndExperimentCompositeKeyInput | null > | null,
  beginsWith?: ModelAppointmentAppointmentByDateAndExperimentCompositeKeyInput | null,
};

export type ModelAppointmentAppointmentByDateAndExperimentCompositeKeyInput = {
  experimentId?: string | null,
  day?: string | null,
  hour?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    filedId?: string | null,
    quantityViolations?: number | null,
    cleanDate?: string | null,
    type: string,
    subjects?: Array< string | null > | null,
    appointments?:  Array< {
      __typename: "AppointmentLocal",
      experimentId?: string | null,
      uuid?: string | null,
      hour?: string | null,
      day?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    filedId?: string | null,
    quantityViolations?: number | null,
    cleanDate?: string | null,
    type: string,
    subjects?: Array< string | null > | null,
    appointments?:  Array< {
      __typename: "AppointmentLocal",
      experimentId?: string | null,
      uuid?: string | null,
      hour?: string | null,
      day?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    filedId?: string | null,
    quantityViolations?: number | null,
    cleanDate?: string | null,
    type: string,
    subjects?: Array< string | null > | null,
    appointments?:  Array< {
      __typename: "AppointmentLocal",
      experimentId?: string | null,
      uuid?: string | null,
      hour?: string | null,
      day?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateAppointmentMutationVariables = {
  input: CreateAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type CreateAppointmentMutation = {
  createAppointment?:  {
    __typename: "Appointment",
    id: string,
    day?: string | null,
    hour?: string | null,
    uuid?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    experimentId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAppointmentMutationVariables = {
  input: UpdateAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type UpdateAppointmentMutation = {
  updateAppointment?:  {
    __typename: "Appointment",
    id: string,
    day?: string | null,
    hour?: string | null,
    uuid?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    experimentId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAppointmentMutationVariables = {
  input: DeleteAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type DeleteAppointmentMutation = {
  deleteAppointment?:  {
    __typename: "Appointment",
    id: string,
    day?: string | null,
    hour?: string | null,
    uuid?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    experimentId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSubjectMutationVariables = {
  input: CreateSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type CreateSubjectMutation = {
  createSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    students?:  Array< {
      __typename: "Student",
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSubjectMutationVariables = {
  input: UpdateSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type UpdateSubjectMutation = {
  updateSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    students?:  Array< {
      __typename: "Student",
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSubjectMutationVariables = {
  input: DeleteSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type DeleteSubjectMutation = {
  deleteSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    students?:  Array< {
      __typename: "Student",
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateConfigMutationVariables = {
  input: CreateConfigInput,
  condition?: ModelConfigConditionInput | null,
};

export type CreateConfigMutation = {
  createConfig?:  {
    __typename: "Config",
    id: string,
    experiments?:  Array< {
      __typename: "Experiment",
      uuid: string,
      name: string,
      iconUrl?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateConfigMutationVariables = {
  input: UpdateConfigInput,
  condition?: ModelConfigConditionInput | null,
};

export type UpdateConfigMutation = {
  updateConfig?:  {
    __typename: "Config",
    id: string,
    experiments?:  Array< {
      __typename: "Experiment",
      uuid: string,
      name: string,
      iconUrl?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteConfigMutationVariables = {
  input: DeleteConfigInput,
  condition?: ModelConfigConditionInput | null,
};

export type DeleteConfigMutation = {
  deleteConfig?:  {
    __typename: "Config",
    id: string,
    experiments?:  Array< {
      __typename: "Experiment",
      uuid: string,
      name: string,
      iconUrl?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    filedId?: string | null,
    quantityViolations?: number | null,
    cleanDate?: string | null,
    type: string,
    subjects?: Array< string | null > | null,
    appointments?:  Array< {
      __typename: "AppointmentLocal",
      experimentId?: string | null,
      uuid?: string | null,
      hour?: string | null,
      day?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      email: string,
      firstName: string,
      lastName: string,
      filedId?: string | null,
      quantityViolations?: number | null,
      cleanDate?: string | null,
      type: string,
      subjects?: Array< string | null > | null,
      appointments?:  Array< {
        __typename: "AppointmentLocal",
        experimentId?: string | null,
        uuid?: string | null,
        hour?: string | null,
        day?: string | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAppointmentQueryVariables = {
  id: string,
};

export type GetAppointmentQuery = {
  getAppointment?:  {
    __typename: "Appointment",
    id: string,
    day?: string | null,
    hour?: string | null,
    uuid?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    experimentId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAppointmentsQueryVariables = {
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppointmentsQuery = {
  listAppointments?:  {
    __typename: "ModelAppointmentConnection",
    items?:  Array< {
      __typename: "Appointment",
      id: string,
      day?: string | null,
      hour?: string | null,
      uuid?: string | null,
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      experimentId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSubjectQueryVariables = {
  id: string,
};

export type GetSubjectQuery = {
  getSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    students?:  Array< {
      __typename: "Student",
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSubjectsQueryVariables = {
  filter?: ModelSubjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubjectsQuery = {
  listSubjects?:  {
    __typename: "ModelSubjectConnection",
    items?:  Array< {
      __typename: "Subject",
      id: string,
      name: string,
      students?:  Array< {
        __typename: "Student",
        email?: string | null,
        firstName?: string | null,
        lastName?: string | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetConfigQueryVariables = {
  id: string,
};

export type GetConfigQuery = {
  getConfig?:  {
    __typename: "Config",
    id: string,
    experiments?:  Array< {
      __typename: "Experiment",
      uuid: string,
      name: string,
      iconUrl?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListConfigsQueryVariables = {
  filter?: ModelConfigFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConfigsQuery = {
  listConfigs?:  {
    __typename: "ModelConfigConnection",
    items?:  Array< {
      __typename: "Config",
      id: string,
      experiments?:  Array< {
        __typename: "Experiment",
        uuid: string,
        name: string,
        iconUrl?: string | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type UserByEmailQueryVariables = {
  email?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserByEmailQuery = {
  userByEmail?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      email: string,
      firstName: string,
      lastName: string,
      filedId?: string | null,
      quantityViolations?: number | null,
      cleanDate?: string | null,
      type: string,
      subjects?: Array< string | null > | null,
      appointments?:  Array< {
        __typename: "AppointmentLocal",
        experimentId?: string | null,
        uuid?: string | null,
        hour?: string | null,
        day?: string | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type AppointmentByDateAndExperimentQueryVariables = {
  id?: string | null,
  experimentIdDayHour?: ModelAppointmentAppointmentByDateAndExperimentCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppointmentByDateAndExperimentQuery = {
  appointmentByDateAndExperiment?:  {
    __typename: "ModelAppointmentConnection",
    items?:  Array< {
      __typename: "Appointment",
      id: string,
      day?: string | null,
      hour?: string | null,
      uuid?: string | null,
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      experimentId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type AppointmentByDayAndExperimentQueryVariables = {
  day?: string | null,
  experimentId?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppointmentByDayAndExperimentQuery = {
  appointmentByDayAndExperiment?:  {
    __typename: "ModelAppointmentConnection",
    items?:  Array< {
      __typename: "Appointment",
      id: string,
      day?: string | null,
      hour?: string | null,
      uuid?: string | null,
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      experimentId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type AppointmentByUuidQueryVariables = {
  uuid?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppointmentByUuidQuery = {
  appointmentByUuid?:  {
    __typename: "ModelAppointmentConnection",
    items?:  Array< {
      __typename: "Appointment",
      id: string,
      day?: string | null,
      hour?: string | null,
      uuid?: string | null,
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      experimentId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type SubjectByIdQueryVariables = {
  id?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubjectByIdQuery = {
  subjectById?:  {
    __typename: "ModelSubjectConnection",
    items?:  Array< {
      __typename: "Subject",
      id: string,
      name: string,
      students?:  Array< {
        __typename: "Student",
        email?: string | null,
        firstName?: string | null,
        lastName?: string | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    filedId?: string | null,
    quantityViolations?: number | null,
    cleanDate?: string | null,
    type: string,
    subjects?: Array< string | null > | null,
    appointments?:  Array< {
      __typename: "AppointmentLocal",
      experimentId?: string | null,
      uuid?: string | null,
      hour?: string | null,
      day?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    filedId?: string | null,
    quantityViolations?: number | null,
    cleanDate?: string | null,
    type: string,
    subjects?: Array< string | null > | null,
    appointments?:  Array< {
      __typename: "AppointmentLocal",
      experimentId?: string | null,
      uuid?: string | null,
      hour?: string | null,
      day?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    filedId?: string | null,
    quantityViolations?: number | null,
    cleanDate?: string | null,
    type: string,
    subjects?: Array< string | null > | null,
    appointments?:  Array< {
      __typename: "AppointmentLocal",
      experimentId?: string | null,
      uuid?: string | null,
      hour?: string | null,
      day?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateAppointmentSubscription = {
  onCreateAppointment?:  {
    __typename: "Appointment",
    id: string,
    day?: string | null,
    hour?: string | null,
    uuid?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    experimentId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAppointmentSubscription = {
  onUpdateAppointment?:  {
    __typename: "Appointment",
    id: string,
    day?: string | null,
    hour?: string | null,
    uuid?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    experimentId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAppointmentSubscription = {
  onDeleteAppointment?:  {
    __typename: "Appointment",
    id: string,
    day?: string | null,
    hour?: string | null,
    uuid?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    experimentId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSubjectSubscription = {
  onCreateSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    students?:  Array< {
      __typename: "Student",
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSubjectSubscription = {
  onUpdateSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    students?:  Array< {
      __typename: "Student",
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSubjectSubscription = {
  onDeleteSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    students?:  Array< {
      __typename: "Student",
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateConfigSubscription = {
  onCreateConfig?:  {
    __typename: "Config",
    id: string,
    experiments?:  Array< {
      __typename: "Experiment",
      uuid: string,
      name: string,
      iconUrl?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateConfigSubscription = {
  onUpdateConfig?:  {
    __typename: "Config",
    id: string,
    experiments?:  Array< {
      __typename: "Experiment",
      uuid: string,
      name: string,
      iconUrl?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteConfigSubscription = {
  onDeleteConfig?:  {
    __typename: "Config",
    id: string,
    experiments?:  Array< {
      __typename: "Experiment",
      uuid: string,
      name: string,
      iconUrl?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
