/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserRLInput = {
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

export type ModelUserRLConditionInput = {
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  filedId?: ModelStringInput | null,
  quantityViolations?: ModelIntInput | null,
  cleanDate?: ModelStringInput | null,
  type?: ModelStringInput | null,
  subjects?: ModelStringInput | null,
  and?: Array< ModelUserRLConditionInput | null > | null,
  or?: Array< ModelUserRLConditionInput | null > | null,
  not?: ModelUserRLConditionInput | null,
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

export type UserRL = {
  __typename: "UserRL",
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

export type UpdateUserRLInput = {
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

export type DeleteUserRLInput = {
  id: string,
};

export type CreateAppointmentRLInput = {
  id?: string | null,
  day?: string | null,
  hour?: string | null,
  uuid?: string | null,
  isTaken?: string | null,
  experimentId?: string | null,
};

export type ModelAppointmentRLConditionInput = {
  day?: ModelStringInput | null,
  hour?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
  isTaken?: ModelStringInput | null,
  experimentId?: ModelStringInput | null,
  and?: Array< ModelAppointmentRLConditionInput | null > | null,
  or?: Array< ModelAppointmentRLConditionInput | null > | null,
  not?: ModelAppointmentRLConditionInput | null,
};

export type AppointmentRL = {
  __typename: "AppointmentRL",
  id: string,
  day?: string | null,
  hour?: string | null,
  uuid?: string | null,
  isTaken?: string | null,
  experimentId?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAppointmentRLInput = {
  id: string,
  day?: string | null,
  hour?: string | null,
  uuid?: string | null,
  isTaken?: string | null,
  experimentId?: string | null,
};

export type DeleteAppointmentRLInput = {
  id: string,
};

export type CreateAppointmentTakenRLInput = {
  email: string,
  day: string,
  hour: string,
  uuid: string,
  firstName?: string | null,
  lastName?: string | null,
  experimentId: string,
  status: string,
};

export type ModelAppointmentTakenRLConditionInput = {
  day?: ModelStringInput | null,
  hour?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  experimentId?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelAppointmentTakenRLConditionInput | null > | null,
  or?: Array< ModelAppointmentTakenRLConditionInput | null > | null,
  not?: ModelAppointmentTakenRLConditionInput | null,
};

export type AppointmentTakenRL = {
  __typename: "AppointmentTakenRL",
  email: string,
  day: string,
  hour: string,
  uuid: string,
  firstName?: string | null,
  lastName?: string | null,
  experimentId: string,
  status: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateAppointmentTakenRLInput = {
  email: string,
  day?: string | null,
  hour?: string | null,
  uuid?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  experimentId?: string | null,
  status?: string | null,
};

export type DeleteAppointmentTakenRLInput = {
  email: string,
};

export type CreateAppointmentStudentRLInput = {
  email: string,
  day: string,
  hour: string,
  uuid: string,
  firstName?: string | null,
  lastName?: string | null,
  experimentId: string,
  status: string,
};

export type ModelAppointmentStudentRLConditionInput = {
  day?: ModelStringInput | null,
  hour?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  experimentId?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelAppointmentStudentRLConditionInput | null > | null,
  or?: Array< ModelAppointmentStudentRLConditionInput | null > | null,
  not?: ModelAppointmentStudentRLConditionInput | null,
};

export type AppointmentStudentRL = {
  __typename: "AppointmentStudentRL",
  email: string,
  day: string,
  hour: string,
  uuid: string,
  firstName?: string | null,
  lastName?: string | null,
  experimentId: string,
  status: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateAppointmentStudentRLInput = {
  email: string,
  day?: string | null,
  hour?: string | null,
  uuid: string,
  firstName?: string | null,
  lastName?: string | null,
  experimentId?: string | null,
  status?: string | null,
};

export type DeleteAppointmentStudentRLInput = {
  email: string,
  uuid: string,
};

export type CreateSubjectRLInput = {
  id?: string | null,
  name: string,
  students?: Array< StudentInput | null > | null,
  periodBlock: string,
  university: string,
};

export type StudentInput = {
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
};

export type ModelSubjectRLConditionInput = {
  name?: ModelStringInput | null,
  periodBlock?: ModelStringInput | null,
  university?: ModelStringInput | null,
  and?: Array< ModelSubjectRLConditionInput | null > | null,
  or?: Array< ModelSubjectRLConditionInput | null > | null,
  not?: ModelSubjectRLConditionInput | null,
};

export type SubjectRL = {
  __typename: "SubjectRL",
  id: string,
  name: string,
  students?:  Array<Student | null > | null,
  periodBlock: string,
  university: string,
  createdAt: string,
  updatedAt: string,
};

export type Student = {
  __typename: "Student",
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
};

export type UpdateSubjectRLInput = {
  id: string,
  name?: string | null,
  students?: Array< StudentInput | null > | null,
  periodBlock?: string | null,
  university?: string | null,
};

export type DeleteSubjectRLInput = {
  id: string,
};

export type CreateConfigRLInput = {
  id?: string | null,
  experiments?: Array< ExperimentInput | null > | null,
};

export type ExperimentInput = {
  uuid: string,
  name: string,
  iconUrl?: string | null,
};

export type ModelConfigRLConditionInput = {
  and?: Array< ModelConfigRLConditionInput | null > | null,
  or?: Array< ModelConfigRLConditionInput | null > | null,
  not?: ModelConfigRLConditionInput | null,
};

export type ConfigRL = {
  __typename: "ConfigRL",
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

export type UpdateConfigRLInput = {
  experiments?: Array< ExperimentInput | null > | null,
};

export type DeleteConfigRLInput = {
  id: string,
};

export type ModelUserRLFilterInput = {
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  filedId?: ModelStringInput | null,
  quantityViolations?: ModelIntInput | null,
  cleanDate?: ModelStringInput | null,
  type?: ModelStringInput | null,
  subjects?: ModelStringInput | null,
  and?: Array< ModelUserRLFilterInput | null > | null,
  or?: Array< ModelUserRLFilterInput | null > | null,
  not?: ModelUserRLFilterInput | null,
};

export type ModelUserRLConnection = {
  __typename: "ModelUserRLConnection",
  items:  Array<UserRL >,
  nextToken?: string | null,
};

export type ModelAppointmentRLFilterInput = {
  id?: ModelIDInput | null,
  day?: ModelStringInput | null,
  hour?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
  isTaken?: ModelStringInput | null,
  experimentId?: ModelStringInput | null,
  and?: Array< ModelAppointmentRLFilterInput | null > | null,
  or?: Array< ModelAppointmentRLFilterInput | null > | null,
  not?: ModelAppointmentRLFilterInput | null,
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

export type ModelAppointmentRLConnection = {
  __typename: "ModelAppointmentRLConnection",
  items:  Array<AppointmentRL >,
  nextToken?: string | null,
};

export type ModelAppointmentTakenRLFilterInput = {
  email?: ModelStringInput | null,
  day?: ModelStringInput | null,
  hour?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  experimentId?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelAppointmentTakenRLFilterInput | null > | null,
  or?: Array< ModelAppointmentTakenRLFilterInput | null > | null,
  not?: ModelAppointmentTakenRLFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAppointmentTakenRLConnection = {
  __typename: "ModelAppointmentTakenRLConnection",
  items:  Array<AppointmentTakenRL >,
  nextToken?: string | null,
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

export type ModelAppointmentStudentRLFilterInput = {
  email?: ModelStringInput | null,
  day?: ModelStringInput | null,
  hour?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  experimentId?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelAppointmentStudentRLFilterInput | null > | null,
  or?: Array< ModelAppointmentStudentRLFilterInput | null > | null,
  not?: ModelAppointmentStudentRLFilterInput | null,
};

export type ModelAppointmentStudentRLConnection = {
  __typename: "ModelAppointmentStudentRLConnection",
  items:  Array<AppointmentStudentRL >,
  nextToken?: string | null,
};

export type ModelSubjectRLFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  periodBlock?: ModelStringInput | null,
  university?: ModelStringInput | null,
  and?: Array< ModelSubjectRLFilterInput | null > | null,
  or?: Array< ModelSubjectRLFilterInput | null > | null,
  not?: ModelSubjectRLFilterInput | null,
};

export type ModelSubjectRLConnection = {
  __typename: "ModelSubjectRLConnection",
  items:  Array<SubjectRL >,
  nextToken?: string | null,
};

export type ModelConfigRLFilterInput = {
  and?: Array< ModelConfigRLFilterInput | null > | null,
  or?: Array< ModelConfigRLFilterInput | null > | null,
  not?: ModelConfigRLFilterInput | null,
};

export type ModelConfigRLConnection = {
  __typename: "ModelConfigRLConnection",
  items:  Array<ConfigRL >,
  nextToken?: string | null,
};

export type ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyConditionInput = {
  eq?: ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyInput | null,
  le?: ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyInput | null,
  lt?: ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyInput | null,
  ge?: ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyInput | null,
  gt?: ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyInput | null,
  between?: Array< ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyInput | null > | null,
  beginsWith?: ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyInput | null,
};

export type ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyInput = {
  experimentId?: string | null,
  isTaken?: string | null,
};

export type ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyConditionInput = {
  eq?: ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyInput | null,
  le?: ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyInput | null,
  lt?: ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyInput | null,
  ge?: ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyInput | null,
  gt?: ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyInput | null,
  between?: Array< ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyInput | null > | null,
  beginsWith?: ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyInput | null,
};

export type ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyInput = {
  day?: string | null,
  hour?: string | null,
};

export type ModelAppointmentStudentRLByDateAndExperimentCompositeKeyConditionInput = {
  eq?: ModelAppointmentStudentRLByDateAndExperimentCompositeKeyInput | null,
  le?: ModelAppointmentStudentRLByDateAndExperimentCompositeKeyInput | null,
  lt?: ModelAppointmentStudentRLByDateAndExperimentCompositeKeyInput | null,
  ge?: ModelAppointmentStudentRLByDateAndExperimentCompositeKeyInput | null,
  gt?: ModelAppointmentStudentRLByDateAndExperimentCompositeKeyInput | null,
  between?: Array< ModelAppointmentStudentRLByDateAndExperimentCompositeKeyInput | null > | null,
  beginsWith?: ModelAppointmentStudentRLByDateAndExperimentCompositeKeyInput | null,
};

export type ModelAppointmentStudentRLByDateAndExperimentCompositeKeyInput = {
  day?: string | null,
  hour?: string | null,
};

export type CreateUserRLMutationVariables = {
  input: CreateUserRLInput,
  condition?: ModelUserRLConditionInput | null,
};

export type CreateUserRLMutation = {
  createUserRL?:  {
    __typename: "UserRL",
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

export type UpdateUserRLMutationVariables = {
  input: UpdateUserRLInput,
  condition?: ModelUserRLConditionInput | null,
};

export type UpdateUserRLMutation = {
  updateUserRL?:  {
    __typename: "UserRL",
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

export type DeleteUserRLMutationVariables = {
  input: DeleteUserRLInput,
  condition?: ModelUserRLConditionInput | null,
};

export type DeleteUserRLMutation = {
  deleteUserRL?:  {
    __typename: "UserRL",
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

export type CreateAppointmentRLMutationVariables = {
  input: CreateAppointmentRLInput,
  condition?: ModelAppointmentRLConditionInput | null,
};

export type CreateAppointmentRLMutation = {
  createAppointmentRL?:  {
    __typename: "AppointmentRL",
    id: string,
    day?: string | null,
    hour?: string | null,
    uuid?: string | null,
    isTaken?: string | null,
    experimentId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAppointmentRLMutationVariables = {
  input: UpdateAppointmentRLInput,
  condition?: ModelAppointmentRLConditionInput | null,
};

export type UpdateAppointmentRLMutation = {
  updateAppointmentRL?:  {
    __typename: "AppointmentRL",
    id: string,
    day?: string | null,
    hour?: string | null,
    uuid?: string | null,
    isTaken?: string | null,
    experimentId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAppointmentRLMutationVariables = {
  input: DeleteAppointmentRLInput,
  condition?: ModelAppointmentRLConditionInput | null,
};

export type DeleteAppointmentRLMutation = {
  deleteAppointmentRL?:  {
    __typename: "AppointmentRL",
    id: string,
    day?: string | null,
    hour?: string | null,
    uuid?: string | null,
    isTaken?: string | null,
    experimentId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAppointmentTakenRLMutationVariables = {
  input: CreateAppointmentTakenRLInput,
  condition?: ModelAppointmentTakenRLConditionInput | null,
};

export type CreateAppointmentTakenRLMutation = {
  createAppointmentTakenRL?:  {
    __typename: "AppointmentTakenRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName?: string | null,
    lastName?: string | null,
    experimentId: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateAppointmentTakenRLMutationVariables = {
  input: UpdateAppointmentTakenRLInput,
  condition?: ModelAppointmentTakenRLConditionInput | null,
};

export type UpdateAppointmentTakenRLMutation = {
  updateAppointmentTakenRL?:  {
    __typename: "AppointmentTakenRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName?: string | null,
    lastName?: string | null,
    experimentId: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteAppointmentTakenRLMutationVariables = {
  input: DeleteAppointmentTakenRLInput,
  condition?: ModelAppointmentTakenRLConditionInput | null,
};

export type DeleteAppointmentTakenRLMutation = {
  deleteAppointmentTakenRL?:  {
    __typename: "AppointmentTakenRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName?: string | null,
    lastName?: string | null,
    experimentId: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateAppointmentStudentRLMutationVariables = {
  input: CreateAppointmentStudentRLInput,
  condition?: ModelAppointmentStudentRLConditionInput | null,
};

export type CreateAppointmentStudentRLMutation = {
  createAppointmentStudentRL?:  {
    __typename: "AppointmentStudentRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName?: string | null,
    lastName?: string | null,
    experimentId: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateAppointmentStudentRLMutationVariables = {
  input: UpdateAppointmentStudentRLInput,
  condition?: ModelAppointmentStudentRLConditionInput | null,
};

export type UpdateAppointmentStudentRLMutation = {
  updateAppointmentStudentRL?:  {
    __typename: "AppointmentStudentRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName?: string | null,
    lastName?: string | null,
    experimentId: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteAppointmentStudentRLMutationVariables = {
  input: DeleteAppointmentStudentRLInput,
  condition?: ModelAppointmentStudentRLConditionInput | null,
};

export type DeleteAppointmentStudentRLMutation = {
  deleteAppointmentStudentRL?:  {
    __typename: "AppointmentStudentRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName?: string | null,
    lastName?: string | null,
    experimentId: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateSubjectRLMutationVariables = {
  input: CreateSubjectRLInput,
  condition?: ModelSubjectRLConditionInput | null,
};

export type CreateSubjectRLMutation = {
  createSubjectRL?:  {
    __typename: "SubjectRL",
    id: string,
    name: string,
    students?:  Array< {
      __typename: "Student",
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
    } | null > | null,
    periodBlock: string,
    university: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSubjectRLMutationVariables = {
  input: UpdateSubjectRLInput,
  condition?: ModelSubjectRLConditionInput | null,
};

export type UpdateSubjectRLMutation = {
  updateSubjectRL?:  {
    __typename: "SubjectRL",
    id: string,
    name: string,
    students?:  Array< {
      __typename: "Student",
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
    } | null > | null,
    periodBlock: string,
    university: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSubjectRLMutationVariables = {
  input: DeleteSubjectRLInput,
  condition?: ModelSubjectRLConditionInput | null,
};

export type DeleteSubjectRLMutation = {
  deleteSubjectRL?:  {
    __typename: "SubjectRL",
    id: string,
    name: string,
    students?:  Array< {
      __typename: "Student",
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
    } | null > | null,
    periodBlock: string,
    university: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateConfigRLMutationVariables = {
  input: CreateConfigRLInput,
  condition?: ModelConfigRLConditionInput | null,
};

export type CreateConfigRLMutation = {
  createConfigRL?:  {
    __typename: "ConfigRL",
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

export type UpdateConfigRLMutationVariables = {
  input: UpdateConfigRLInput,
  condition?: ModelConfigRLConditionInput | null,
};

export type UpdateConfigRLMutation = {
  updateConfigRL?:  {
    __typename: "ConfigRL",
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

export type DeleteConfigRLMutationVariables = {
  input: DeleteConfigRLInput,
  condition?: ModelConfigRLConditionInput | null,
};

export type DeleteConfigRLMutation = {
  deleteConfigRL?:  {
    __typename: "ConfigRL",
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

export type GetUserRLQueryVariables = {
  id: string,
};

export type GetUserRLQuery = {
  getUserRL?:  {
    __typename: "UserRL",
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

export type ListUserRLsQueryVariables = {
  filter?: ModelUserRLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserRLsQuery = {
  listUserRLs?:  {
    __typename: "ModelUserRLConnection",
    items:  Array< {
      __typename: "UserRL",
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
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetAppointmentRLQueryVariables = {
  id: string,
};

export type GetAppointmentRLQuery = {
  getAppointmentRL?:  {
    __typename: "AppointmentRL",
    id: string,
    day?: string | null,
    hour?: string | null,
    uuid?: string | null,
    isTaken?: string | null,
    experimentId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAppointmentRLsQueryVariables = {
  filter?: ModelAppointmentRLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppointmentRLsQuery = {
  listAppointmentRLs?:  {
    __typename: "ModelAppointmentRLConnection",
    items:  Array< {
      __typename: "AppointmentRL",
      id: string,
      day?: string | null,
      hour?: string | null,
      uuid?: string | null,
      isTaken?: string | null,
      experimentId?: string | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetAppointmentTakenRLQueryVariables = {
  email: string,
};

export type GetAppointmentTakenRLQuery = {
  getAppointmentTakenRL?:  {
    __typename: "AppointmentTakenRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName?: string | null,
    lastName?: string | null,
    experimentId: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListAppointmentTakenRLsQueryVariables = {
  email?: string | null,
  filter?: ModelAppointmentTakenRLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAppointmentTakenRLsQuery = {
  listAppointmentTakenRLs?:  {
    __typename: "ModelAppointmentTakenRLConnection",
    items:  Array< {
      __typename: "AppointmentTakenRL",
      email: string,
      day: string,
      hour: string,
      uuid: string,
      firstName?: string | null,
      lastName?: string | null,
      experimentId: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetAppointmentStudentRLQueryVariables = {
  email: string,
  uuid: string,
};

export type GetAppointmentStudentRLQuery = {
  getAppointmentStudentRL?:  {
    __typename: "AppointmentStudentRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName?: string | null,
    lastName?: string | null,
    experimentId: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListAppointmentStudentRLsQueryVariables = {
  email?: string | null,
  uuid?: ModelStringKeyConditionInput | null,
  filter?: ModelAppointmentStudentRLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAppointmentStudentRLsQuery = {
  listAppointmentStudentRLs?:  {
    __typename: "ModelAppointmentStudentRLConnection",
    items:  Array< {
      __typename: "AppointmentStudentRL",
      email: string,
      day: string,
      hour: string,
      uuid: string,
      firstName?: string | null,
      lastName?: string | null,
      experimentId: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetSubjectRLQueryVariables = {
  id: string,
};

export type GetSubjectRLQuery = {
  getSubjectRL?:  {
    __typename: "SubjectRL",
    id: string,
    name: string,
    students?:  Array< {
      __typename: "Student",
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
    } | null > | null,
    periodBlock: string,
    university: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSubjectRLsQueryVariables = {
  filter?: ModelSubjectRLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubjectRLsQuery = {
  listSubjectRLs?:  {
    __typename: "ModelSubjectRLConnection",
    items:  Array< {
      __typename: "SubjectRL",
      id: string,
      name: string,
      students?:  Array< {
        __typename: "Student",
        email?: string | null,
        firstName?: string | null,
        lastName?: string | null,
      } | null > | null,
      periodBlock: string,
      university: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetConfigRLQueryVariables = {
  id: string,
};

export type GetConfigRLQuery = {
  getConfigRL?:  {
    __typename: "ConfigRL",
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

export type ListConfigRLsQueryVariables = {
  filter?: ModelConfigRLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConfigRLsQuery = {
  listConfigRLs?:  {
    __typename: "ModelConfigRLConnection",
    items:  Array< {
      __typename: "ConfigRL",
      id: string,
      experiments?:  Array< {
        __typename: "Experiment",
        uuid: string,
        name: string,
        iconUrl?: string | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type UserByEmailQueryVariables = {
  email?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserRLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserByEmailQuery = {
  userByEmail?:  {
    __typename: "ModelUserRLConnection",
    items:  Array< {
      __typename: "UserRL",
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
    } >,
    nextToken?: string | null,
  } | null,
};

export type AppointmentByDayAndExperimentUserlessQueryVariables = {
  day?: string | null,
  experimentIdIsTaken?: ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentRLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppointmentByDayAndExperimentUserlessQuery = {
  appointmentByDayAndExperimentUserless?:  {
    __typename: "ModelAppointmentRLConnection",
    items:  Array< {
      __typename: "AppointmentRL",
      id: string,
      day?: string | null,
      hour?: string | null,
      uuid?: string | null,
      isTaken?: string | null,
      experimentId?: string | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type AppointmentByUuidUserlessQueryVariables = {
  uuid?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentRLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppointmentByUuidUserlessQuery = {
  appointmentByUuidUserless?:  {
    __typename: "ModelAppointmentRLConnection",
    items:  Array< {
      __typename: "AppointmentRL",
      id: string,
      day?: string | null,
      hour?: string | null,
      uuid?: string | null,
      isTaken?: string | null,
      experimentId?: string | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetByStatusQueryVariables = {
  status?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentTakenRLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetByStatusQuery = {
  getByStatus?:  {
    __typename: "ModelAppointmentTakenRLConnection",
    items:  Array< {
      __typename: "AppointmentTakenRL",
      email: string,
      day: string,
      hour: string,
      uuid: string,
      firstName?: string | null,
      lastName?: string | null,
      experimentId: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type AppointmentByDateAndExperimentQueryVariables = {
  experimentId?: string | null,
  dayHour?: ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentTakenRLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppointmentByDateAndExperimentQuery = {
  appointmentByDateAndExperiment?:  {
    __typename: "ModelAppointmentTakenRLConnection",
    items:  Array< {
      __typename: "AppointmentTakenRL",
      email: string,
      day: string,
      hour: string,
      uuid: string,
      firstName?: string | null,
      lastName?: string | null,
      experimentId: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetByUuidQueryVariables = {
  uuid?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentTakenRLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetByUuidQuery = {
  getByUuid?:  {
    __typename: "ModelAppointmentTakenRLConnection",
    items:  Array< {
      __typename: "AppointmentTakenRL",
      email: string,
      day: string,
      hour: string,
      uuid: string,
      firstName?: string | null,
      lastName?: string | null,
      experimentId: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetAppointmentByStatusQueryVariables = {
  status?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentStudentRLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetAppointmentByStatusQuery = {
  getAppointmentByStatus?:  {
    __typename: "ModelAppointmentStudentRLConnection",
    items:  Array< {
      __typename: "AppointmentStudentRL",
      email: string,
      day: string,
      hour: string,
      uuid: string,
      firstName?: string | null,
      lastName?: string | null,
      experimentId: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetAppointmentByDateAndExperimentQueryVariables = {
  experimentId?: string | null,
  dayHour?: ModelAppointmentStudentRLByDateAndExperimentCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentStudentRLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetAppointmentByDateAndExperimentQuery = {
  getAppointmentByDateAndExperiment?:  {
    __typename: "ModelAppointmentStudentRLConnection",
    items:  Array< {
      __typename: "AppointmentStudentRL",
      email: string,
      day: string,
      hour: string,
      uuid: string,
      firstName?: string | null,
      lastName?: string | null,
      experimentId: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetAppointmentByUuidQueryVariables = {
  uuid?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentStudentRLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetAppointmentByUuidQuery = {
  getAppointmentByUuid?:  {
    __typename: "ModelAppointmentStudentRLConnection",
    items:  Array< {
      __typename: "AppointmentStudentRL",
      email: string,
      day: string,
      hour: string,
      uuid: string,
      firstName?: string | null,
      lastName?: string | null,
      experimentId: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type SubjectByIdQueryVariables = {
  id?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubjectRLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubjectByIdQuery = {
  subjectById?:  {
    __typename: "ModelSubjectRLConnection",
    items:  Array< {
      __typename: "SubjectRL",
      id: string,
      name: string,
      students?:  Array< {
        __typename: "Student",
        email?: string | null,
        firstName?: string | null,
        lastName?: string | null,
      } | null > | null,
      periodBlock: string,
      university: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserRLSubscription = {
  onCreateUserRL?:  {
    __typename: "UserRL",
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

export type OnUpdateUserRLSubscription = {
  onUpdateUserRL?:  {
    __typename: "UserRL",
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

export type OnDeleteUserRLSubscription = {
  onDeleteUserRL?:  {
    __typename: "UserRL",
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

export type OnCreateAppointmentRLSubscription = {
  onCreateAppointmentRL?:  {
    __typename: "AppointmentRL",
    id: string,
    day?: string | null,
    hour?: string | null,
    uuid?: string | null,
    isTaken?: string | null,
    experimentId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAppointmentRLSubscription = {
  onUpdateAppointmentRL?:  {
    __typename: "AppointmentRL",
    id: string,
    day?: string | null,
    hour?: string | null,
    uuid?: string | null,
    isTaken?: string | null,
    experimentId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAppointmentRLSubscription = {
  onDeleteAppointmentRL?:  {
    __typename: "AppointmentRL",
    id: string,
    day?: string | null,
    hour?: string | null,
    uuid?: string | null,
    isTaken?: string | null,
    experimentId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAppointmentTakenRLSubscription = {
  onCreateAppointmentTakenRL?:  {
    __typename: "AppointmentTakenRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName?: string | null,
    lastName?: string | null,
    experimentId: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateAppointmentTakenRLSubscription = {
  onUpdateAppointmentTakenRL?:  {
    __typename: "AppointmentTakenRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName?: string | null,
    lastName?: string | null,
    experimentId: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteAppointmentTakenRLSubscription = {
  onDeleteAppointmentTakenRL?:  {
    __typename: "AppointmentTakenRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName?: string | null,
    lastName?: string | null,
    experimentId: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateAppointmentStudentRLSubscription = {
  onCreateAppointmentStudentRL?:  {
    __typename: "AppointmentStudentRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName?: string | null,
    lastName?: string | null,
    experimentId: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateAppointmentStudentRLSubscription = {
  onUpdateAppointmentStudentRL?:  {
    __typename: "AppointmentStudentRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName?: string | null,
    lastName?: string | null,
    experimentId: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteAppointmentStudentRLSubscription = {
  onDeleteAppointmentStudentRL?:  {
    __typename: "AppointmentStudentRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName?: string | null,
    lastName?: string | null,
    experimentId: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateSubjectRLSubscription = {
  onCreateSubjectRL?:  {
    __typename: "SubjectRL",
    id: string,
    name: string,
    students?:  Array< {
      __typename: "Student",
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
    } | null > | null,
    periodBlock: string,
    university: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSubjectRLSubscription = {
  onUpdateSubjectRL?:  {
    __typename: "SubjectRL",
    id: string,
    name: string,
    students?:  Array< {
      __typename: "Student",
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
    } | null > | null,
    periodBlock: string,
    university: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSubjectRLSubscription = {
  onDeleteSubjectRL?:  {
    __typename: "SubjectRL",
    id: string,
    name: string,
    students?:  Array< {
      __typename: "Student",
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
    } | null > | null,
    periodBlock: string,
    university: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateConfigRLSubscription = {
  onCreateConfigRL?:  {
    __typename: "ConfigRL",
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

export type OnUpdateConfigRLSubscription = {
  onUpdateConfigRL?:  {
    __typename: "ConfigRL",
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

export type OnDeleteConfigRLSubscription = {
  onDeleteConfigRL?:  {
    __typename: "ConfigRL",
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
