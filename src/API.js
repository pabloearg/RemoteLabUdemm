/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserRLInput = {|
  email: string,
  id: string,
  firstName: string,
  lastName: string,
  filedId?: ?string,
  quantityViolations?: ?number,
  cleanDate?: ?any,
  type: string,
  subjects?: ?Array< ?string >,
  appointments?: ?Array< ?any >,
|};

export type ModelUserRLConditionInput = {|
  email?: ?ModelStringInput,
  firstName?: ?ModelStringInput,
  lastName?: ?ModelStringInput,
  filedId?: ?ModelStringInput,
  quantityViolations?: ?ModelIntInput,
  cleanDate?: ?ModelStringInput,
  type?: ?ModelStringInput,
  subjects?: ?ModelStringInput,
  appointments?: ?ModelStringInput,
  and?: ?Array< ?ModelUserRLConditionInput >,
  or?: ?Array< ?ModelUserRLConditionInput >,
  not?: ?ModelUserRLConditionInput,
|};

export type ModelStringInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  size?: ?ModelSizeInput,
|};

export type ModelAttributeTypes =
  "binary" |
  "binarySet" |
  "bool" |
  "list" |
  "map" |
  "number" |
  "numberSet" |
  "string" |
  "stringSet" |
  "_null";


export type ModelSizeInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  between?: ?Array< ?number >,
|};

export type ModelIntInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  between?: ?Array< ?number >,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
|};

export type UpdateUserRLInput = {|
  email?: ?string,
  id: string,
  firstName?: ?string,
  lastName?: ?string,
  filedId?: ?string,
  quantityViolations?: ?number,
  cleanDate?: ?any,
  type?: ?string,
  subjects?: ?Array< ?string >,
  appointments?: ?Array< ?any >,
|};

export type DeleteUserRLInput = {|
  id: string,
|};

export type CreateAppointmentRLInput = {|
  id?: ?string,
  day?: ?string,
  hour?: ?string,
  uuid?: ?string,
  isTaken?: ?string,
  experimentId?: ?string,
|};

export type ModelAppointmentRLConditionInput = {|
  day?: ?ModelStringInput,
  hour?: ?ModelStringInput,
  uuid?: ?ModelStringInput,
  isTaken?: ?ModelStringInput,
  experimentId?: ?ModelStringInput,
  and?: ?Array< ?ModelAppointmentRLConditionInput >,
  or?: ?Array< ?ModelAppointmentRLConditionInput >,
  not?: ?ModelAppointmentRLConditionInput,
|};

export type UpdateAppointmentRLInput = {|
  id: string,
  day?: ?string,
  hour?: ?string,
  uuid?: ?string,
  isTaken?: ?string,
  experimentId?: ?string,
|};

export type DeleteAppointmentRLInput = {|
  id: string,
|};

export type CreateAppointmentTakenRLInput = {|
  email: string,
  day: string,
  hour: string,
  uuid: string,
  firstName?: ?string,
  lastName?: ?string,
  experimentId: string,
  status: string,
|};

export type ModelAppointmentTakenRLConditionInput = {|
  day?: ?ModelStringInput,
  hour?: ?ModelStringInput,
  uuid?: ?ModelStringInput,
  firstName?: ?ModelStringInput,
  lastName?: ?ModelStringInput,
  experimentId?: ?ModelStringInput,
  status?: ?ModelStringInput,
  and?: ?Array< ?ModelAppointmentTakenRLConditionInput >,
  or?: ?Array< ?ModelAppointmentTakenRLConditionInput >,
  not?: ?ModelAppointmentTakenRLConditionInput,
|};

export type UpdateAppointmentTakenRLInput = {|
  email: string,
  day?: ?string,
  hour?: ?string,
  uuid?: ?string,
  firstName?: ?string,
  lastName?: ?string,
  experimentId?: ?string,
  status?: ?string,
|};

export type DeleteAppointmentTakenRLInput = {|
  email: string,
|};

export type CreateAppointmentStudentRLInput = {|
  email: string,
  day: string,
  hour: string,
  uuid: string,
  firstName?: ?string,
  lastName?: ?string,
  experimentId: string,
  status: string,
|};

export type ModelAppointmentStudentRLConditionInput = {|
  day?: ?ModelStringInput,
  hour?: ?ModelStringInput,
  firstName?: ?ModelStringInput,
  lastName?: ?ModelStringInput,
  experimentId?: ?ModelStringInput,
  status?: ?ModelStringInput,
  and?: ?Array< ?ModelAppointmentStudentRLConditionInput >,
  or?: ?Array< ?ModelAppointmentStudentRLConditionInput >,
  not?: ?ModelAppointmentStudentRLConditionInput,
|};

export type UpdateAppointmentStudentRLInput = {|
  email: string,
  day?: ?string,
  hour?: ?string,
  uuid: string,
  firstName?: ?string,
  lastName?: ?string,
  experimentId?: ?string,
  status?: ?string,
|};

export type DeleteAppointmentStudentRLInput = {|
  email: string,
  uuid: string,
|};

export type CreateSubjectRLInput = {|
  id?: ?string,
  name: string,
  students?: ?Array< ?StudentInput >,
  periodBlock: string,
  university: string,
|};

export type StudentInput = {|
  email?: ?string,
  firstName?: ?string,
  lastName?: ?string,
|};

export type ModelSubjectRLConditionInput = {|
  name?: ?ModelStringInput,
  periodBlock?: ?ModelStringInput,
  university?: ?ModelStringInput,
  and?: ?Array< ?ModelSubjectRLConditionInput >,
  or?: ?Array< ?ModelSubjectRLConditionInput >,
  not?: ?ModelSubjectRLConditionInput,
|};

export type UpdateSubjectRLInput = {|
  id: string,
  name?: ?string,
  students?: ?Array< ?StudentInput >,
  periodBlock?: ?string,
  university?: ?string,
|};

export type DeleteSubjectRLInput = {|
  id: string,
|};

export type CreateConfigRLInput = {|
  id?: ?string,
  experiments?: ?Array< ?ExperimentInput >,
|};

export type ExperimentInput = {|
  uuid: string,
  name: string,
  iconUrl?: ?string,
|};

export type ModelConfigRLConditionInput = {|
  and?: ?Array< ?ModelConfigRLConditionInput >,
  or?: ?Array< ?ModelConfigRLConditionInput >,
  not?: ?ModelConfigRLConditionInput,
|};

export type UpdateConfigRLInput = {|
  experiments?: ?Array< ?ExperimentInput >,
|};

export type DeleteConfigRLInput = {|
  id: string,
|};

export type ModelUserRLFilterInput = {|
  email?: ?ModelStringInput,
  id?: ?ModelStringInput,
  firstName?: ?ModelStringInput,
  lastName?: ?ModelStringInput,
  filedId?: ?ModelStringInput,
  quantityViolations?: ?ModelIntInput,
  cleanDate?: ?ModelStringInput,
  type?: ?ModelStringInput,
  subjects?: ?ModelStringInput,
  appointments?: ?ModelStringInput,
  and?: ?Array< ?ModelUserRLFilterInput >,
  or?: ?Array< ?ModelUserRLFilterInput >,
  not?: ?ModelUserRLFilterInput,
|};

export type ModelAppointmentRLFilterInput = {|
  id?: ?ModelIDInput,
  day?: ?ModelStringInput,
  hour?: ?ModelStringInput,
  uuid?: ?ModelStringInput,
  isTaken?: ?ModelStringInput,
  experimentId?: ?ModelStringInput,
  and?: ?Array< ?ModelAppointmentRLFilterInput >,
  or?: ?Array< ?ModelAppointmentRLFilterInput >,
  not?: ?ModelAppointmentRLFilterInput,
|};

export type ModelIDInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  size?: ?ModelSizeInput,
|};

export type ModelAppointmentTakenRLFilterInput = {|
  email?: ?ModelStringInput,
  day?: ?ModelStringInput,
  hour?: ?ModelStringInput,
  uuid?: ?ModelStringInput,
  firstName?: ?ModelStringInput,
  lastName?: ?ModelStringInput,
  experimentId?: ?ModelStringInput,
  status?: ?ModelStringInput,
  and?: ?Array< ?ModelAppointmentTakenRLFilterInput >,
  or?: ?Array< ?ModelAppointmentTakenRLFilterInput >,
  not?: ?ModelAppointmentTakenRLFilterInput,
|};

export type ModelSortDirection =
  "ASC" |
  "DESC";


export type ModelStringKeyConditionInput = {|
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
|};

export type ModelAppointmentStudentRLFilterInput = {|
  email?: ?ModelStringInput,
  day?: ?ModelStringInput,
  hour?: ?ModelStringInput,
  uuid?: ?ModelStringInput,
  firstName?: ?ModelStringInput,
  lastName?: ?ModelStringInput,
  experimentId?: ?ModelStringInput,
  status?: ?ModelStringInput,
  and?: ?Array< ?ModelAppointmentStudentRLFilterInput >,
  or?: ?Array< ?ModelAppointmentStudentRLFilterInput >,
  not?: ?ModelAppointmentStudentRLFilterInput,
|};

export type ModelSubjectRLFilterInput = {|
  id?: ?ModelIDInput,
  name?: ?ModelStringInput,
  periodBlock?: ?ModelStringInput,
  university?: ?ModelStringInput,
  and?: ?Array< ?ModelSubjectRLFilterInput >,
  or?: ?Array< ?ModelSubjectRLFilterInput >,
  not?: ?ModelSubjectRLFilterInput,
|};

export type ModelConfigRLFilterInput = {|
  and?: ?Array< ?ModelConfigRLFilterInput >,
  or?: ?Array< ?ModelConfigRLFilterInput >,
  not?: ?ModelConfigRLFilterInput,
|};

export type ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyConditionInput = {|
  eq?: ?ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyInput,
  le?: ?ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyInput,
  lt?: ?ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyInput,
  ge?: ?ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyInput,
  gt?: ?ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyInput,
  between?: ?Array< ?ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyInput >,
  beginsWith?: ?ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyInput,
|};

export type ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyInput = {|
  experimentId?: ?string,
  isTaken?: ?string,
|};

export type ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyConditionInput = {|
  eq?: ?ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyInput,
  le?: ?ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyInput,
  lt?: ?ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyInput,
  ge?: ?ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyInput,
  gt?: ?ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyInput,
  between?: ?Array< ?ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyInput >,
  beginsWith?: ?ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyInput,
|};

export type ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyInput = {|
  day?: ?string,
  hour?: ?string,
|};

export type ModelAppointmentStudentRLByDateAndExperimentCompositeKeyConditionInput = {|
  eq?: ?ModelAppointmentStudentRLByDateAndExperimentCompositeKeyInput,
  le?: ?ModelAppointmentStudentRLByDateAndExperimentCompositeKeyInput,
  lt?: ?ModelAppointmentStudentRLByDateAndExperimentCompositeKeyInput,
  ge?: ?ModelAppointmentStudentRLByDateAndExperimentCompositeKeyInput,
  gt?: ?ModelAppointmentStudentRLByDateAndExperimentCompositeKeyInput,
  between?: ?Array< ?ModelAppointmentStudentRLByDateAndExperimentCompositeKeyInput >,
  beginsWith?: ?ModelAppointmentStudentRLByDateAndExperimentCompositeKeyInput,
|};

export type ModelAppointmentStudentRLByDateAndExperimentCompositeKeyInput = {|
  day?: ?string,
  hour?: ?string,
|};

export type CreateUserRLMutationVariables = {|
  input: CreateUserRLInput,
  condition?: ?ModelUserRLConditionInput,
|};

export type CreateUserRLMutation = {|
  createUserRL: ? {|
    __typename: "UserRL",
    email: string,
    id: string,
    firstName: string,
    lastName: string,
    filedId: ?string,
    quantityViolations: ?number,
    cleanDate: ?any,
    type: string,
    subjects: ?Array< ?string >,
    appointments: ?Array< ?any >,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type UpdateUserRLMutationVariables = {|
  input: UpdateUserRLInput,
  condition?: ?ModelUserRLConditionInput,
|};

export type UpdateUserRLMutation = {|
  updateUserRL: ? {|
    __typename: "UserRL",
    email: string,
    id: string,
    firstName: string,
    lastName: string,
    filedId: ?string,
    quantityViolations: ?number,
    cleanDate: ?any,
    type: string,
    subjects: ?Array< ?string >,
    appointments: ?Array< ?any >,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type DeleteUserRLMutationVariables = {|
  input: DeleteUserRLInput,
  condition?: ?ModelUserRLConditionInput,
|};

export type DeleteUserRLMutation = {|
  deleteUserRL: ? {|
    __typename: "UserRL",
    email: string,
    id: string,
    firstName: string,
    lastName: string,
    filedId: ?string,
    quantityViolations: ?number,
    cleanDate: ?any,
    type: string,
    subjects: ?Array< ?string >,
    appointments: ?Array< ?any >,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type CreateAppointmentRLMutationVariables = {|
  input: CreateAppointmentRLInput,
  condition?: ?ModelAppointmentRLConditionInput,
|};

export type CreateAppointmentRLMutation = {|
  createAppointmentRL: ? {|
    __typename: "AppointmentRL",
    id: string,
    day: ?string,
    hour: ?string,
    uuid: ?string,
    isTaken: ?string,
    experimentId: ?string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type UpdateAppointmentRLMutationVariables = {|
  input: UpdateAppointmentRLInput,
  condition?: ?ModelAppointmentRLConditionInput,
|};

export type UpdateAppointmentRLMutation = {|
  updateAppointmentRL: ? {|
    __typename: "AppointmentRL",
    id: string,
    day: ?string,
    hour: ?string,
    uuid: ?string,
    isTaken: ?string,
    experimentId: ?string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type DeleteAppointmentRLMutationVariables = {|
  input: DeleteAppointmentRLInput,
  condition?: ?ModelAppointmentRLConditionInput,
|};

export type DeleteAppointmentRLMutation = {|
  deleteAppointmentRL: ? {|
    __typename: "AppointmentRL",
    id: string,
    day: ?string,
    hour: ?string,
    uuid: ?string,
    isTaken: ?string,
    experimentId: ?string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type CreateAppointmentTakenRLMutationVariables = {|
  input: CreateAppointmentTakenRLInput,
  condition?: ?ModelAppointmentTakenRLConditionInput,
|};

export type CreateAppointmentTakenRLMutation = {|
  createAppointmentTakenRL: ? {|
    __typename: "AppointmentTakenRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName: ?string,
    lastName: ?string,
    experimentId: string,
    status: string,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type UpdateAppointmentTakenRLMutationVariables = {|
  input: UpdateAppointmentTakenRLInput,
  condition?: ?ModelAppointmentTakenRLConditionInput,
|};

export type UpdateAppointmentTakenRLMutation = {|
  updateAppointmentTakenRL: ? {|
    __typename: "AppointmentTakenRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName: ?string,
    lastName: ?string,
    experimentId: string,
    status: string,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type DeleteAppointmentTakenRLMutationVariables = {|
  input: DeleteAppointmentTakenRLInput,
  condition?: ?ModelAppointmentTakenRLConditionInput,
|};

export type DeleteAppointmentTakenRLMutation = {|
  deleteAppointmentTakenRL: ? {|
    __typename: "AppointmentTakenRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName: ?string,
    lastName: ?string,
    experimentId: string,
    status: string,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type CreateAppointmentStudentRLMutationVariables = {|
  input: CreateAppointmentStudentRLInput,
  condition?: ?ModelAppointmentStudentRLConditionInput,
|};

export type CreateAppointmentStudentRLMutation = {|
  createAppointmentStudentRL: ? {|
    __typename: "AppointmentStudentRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName: ?string,
    lastName: ?string,
    experimentId: string,
    status: string,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type UpdateAppointmentStudentRLMutationVariables = {|
  input: UpdateAppointmentStudentRLInput,
  condition?: ?ModelAppointmentStudentRLConditionInput,
|};

export type UpdateAppointmentStudentRLMutation = {|
  updateAppointmentStudentRL: ? {|
    __typename: "AppointmentStudentRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName: ?string,
    lastName: ?string,
    experimentId: string,
    status: string,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type DeleteAppointmentStudentRLMutationVariables = {|
  input: DeleteAppointmentStudentRLInput,
  condition?: ?ModelAppointmentStudentRLConditionInput,
|};

export type DeleteAppointmentStudentRLMutation = {|
  deleteAppointmentStudentRL: ? {|
    __typename: "AppointmentStudentRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName: ?string,
    lastName: ?string,
    experimentId: string,
    status: string,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type CreateSubjectRLMutationVariables = {|
  input: CreateSubjectRLInput,
  condition?: ?ModelSubjectRLConditionInput,
|};

export type CreateSubjectRLMutation = {|
  createSubjectRL: ? {|
    __typename: "SubjectRL",
    id: string,
    name: string,
    students: ? Array<? {|
      __typename: string,
      email: ?string,
      firstName: ?string,
      lastName: ?string,
    |} >,
    periodBlock: string,
    university: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type UpdateSubjectRLMutationVariables = {|
  input: UpdateSubjectRLInput,
  condition?: ?ModelSubjectRLConditionInput,
|};

export type UpdateSubjectRLMutation = {|
  updateSubjectRL: ? {|
    __typename: "SubjectRL",
    id: string,
    name: string,
    students: ? Array<? {|
      __typename: string,
      email: ?string,
      firstName: ?string,
      lastName: ?string,
    |} >,
    periodBlock: string,
    university: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type DeleteSubjectRLMutationVariables = {|
  input: DeleteSubjectRLInput,
  condition?: ?ModelSubjectRLConditionInput,
|};

export type DeleteSubjectRLMutation = {|
  deleteSubjectRL: ? {|
    __typename: "SubjectRL",
    id: string,
    name: string,
    students: ? Array<? {|
      __typename: string,
      email: ?string,
      firstName: ?string,
      lastName: ?string,
    |} >,
    periodBlock: string,
    university: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type CreateConfigRLMutationVariables = {|
  input: CreateConfigRLInput,
  condition?: ?ModelConfigRLConditionInput,
|};

export type CreateConfigRLMutation = {|
  createConfigRL: ? {|
    __typename: "ConfigRL",
    id: string,
    experiments: ? Array<? {|
      __typename: string,
      uuid: string,
      name: string,
      iconUrl: ?string,
    |} >,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type UpdateConfigRLMutationVariables = {|
  input: UpdateConfigRLInput,
  condition?: ?ModelConfigRLConditionInput,
|};

export type UpdateConfigRLMutation = {|
  updateConfigRL: ? {|
    __typename: "ConfigRL",
    id: string,
    experiments: ? Array<? {|
      __typename: string,
      uuid: string,
      name: string,
      iconUrl: ?string,
    |} >,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type DeleteConfigRLMutationVariables = {|
  input: DeleteConfigRLInput,
  condition?: ?ModelConfigRLConditionInput,
|};

export type DeleteConfigRLMutation = {|
  deleteConfigRL: ? {|
    __typename: "ConfigRL",
    id: string,
    experiments: ? Array<? {|
      __typename: string,
      uuid: string,
      name: string,
      iconUrl: ?string,
    |} >,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type GetUserRLQueryVariables = {|
  id: string,
|};

export type GetUserRLQuery = {|
  getUserRL: ? {|
    __typename: "UserRL",
    email: string,
    id: string,
    firstName: string,
    lastName: string,
    filedId: ?string,
    quantityViolations: ?number,
    cleanDate: ?any,
    type: string,
    subjects: ?Array< ?string >,
    appointments: ?Array< ?any >,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type ListUserRLsQueryVariables = {|
  filter?: ?ModelUserRLFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListUserRLsQuery = {|
  listUserRLs: ? {|
    __typename: "ModelUserRLConnection",
    items:  Array< {|
      __typename: string,
      email: string,
      id: string,
      firstName: string,
      lastName: string,
      filedId: ?string,
      quantityViolations: ?number,
      cleanDate: ?any,
      type: string,
      subjects: ?Array< ?string >,
      appointments: ?Array< ?any >,
      createdAt: any,
      updatedAt: any,
      owner: ?string,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetAppointmentRLQueryVariables = {|
  id: string,
|};

export type GetAppointmentRLQuery = {|
  getAppointmentRL: ? {|
    __typename: "AppointmentRL",
    id: string,
    day: ?string,
    hour: ?string,
    uuid: ?string,
    isTaken: ?string,
    experimentId: ?string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type ListAppointmentRLsQueryVariables = {|
  filter?: ?ModelAppointmentRLFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListAppointmentRLsQuery = {|
  listAppointmentRLs: ? {|
    __typename: "ModelAppointmentRLConnection",
    items:  Array< {|
      __typename: string,
      id: string,
      day: ?string,
      hour: ?string,
      uuid: ?string,
      isTaken: ?string,
      experimentId: ?string,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetAppointmentTakenRLQueryVariables = {|
  email: string,
|};

export type GetAppointmentTakenRLQuery = {|
  getAppointmentTakenRL: ? {|
    __typename: "AppointmentTakenRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName: ?string,
    lastName: ?string,
    experimentId: string,
    status: string,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type ListAppointmentTakenRLsQueryVariables = {|
  email?: ?string,
  filter?: ?ModelAppointmentTakenRLFilterInput,
  limit?: ?number,
  nextToken?: ?string,
  sortDirection?: ?ModelSortDirection,
|};

export type ListAppointmentTakenRLsQuery = {|
  listAppointmentTakenRLs: ? {|
    __typename: "ModelAppointmentTakenRLConnection",
    items:  Array< {|
      __typename: string,
      email: string,
      day: string,
      hour: string,
      uuid: string,
      firstName: ?string,
      lastName: ?string,
      experimentId: string,
      status: string,
      createdAt: any,
      updatedAt: any,
      owner: ?string,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetAppointmentStudentRLQueryVariables = {|
  email: string,
  uuid: string,
|};

export type GetAppointmentStudentRLQuery = {|
  getAppointmentStudentRL: ? {|
    __typename: "AppointmentStudentRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName: ?string,
    lastName: ?string,
    experimentId: string,
    status: string,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type ListAppointmentStudentRLsQueryVariables = {|
  email?: ?string,
  uuid?: ?ModelStringKeyConditionInput,
  filter?: ?ModelAppointmentStudentRLFilterInput,
  limit?: ?number,
  nextToken?: ?string,
  sortDirection?: ?ModelSortDirection,
|};

export type ListAppointmentStudentRLsQuery = {|
  listAppointmentStudentRLs: ? {|
    __typename: "ModelAppointmentStudentRLConnection",
    items:  Array< {|
      __typename: string,
      email: string,
      day: string,
      hour: string,
      uuid: string,
      firstName: ?string,
      lastName: ?string,
      experimentId: string,
      status: string,
      createdAt: any,
      updatedAt: any,
      owner: ?string,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetSubjectRLQueryVariables = {|
  id: string,
|};

export type GetSubjectRLQuery = {|
  getSubjectRL: ? {|
    __typename: "SubjectRL",
    id: string,
    name: string,
    students: ? Array<? {|
      __typename: string,
      email: ?string,
      firstName: ?string,
      lastName: ?string,
    |} >,
    periodBlock: string,
    university: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type ListSubjectRLsQueryVariables = {|
  filter?: ?ModelSubjectRLFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListSubjectRLsQuery = {|
  listSubjectRLs: ? {|
    __typename: "ModelSubjectRLConnection",
    items:  Array< {|
      __typename: string,
      id: string,
      name: string,
      students: ? Array<? {|
        __typename: string,
        email: ?string,
        firstName: ?string,
        lastName: ?string,
      |} >,
      periodBlock: string,
      university: string,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetConfigRLQueryVariables = {|
  id: string,
|};

export type GetConfigRLQuery = {|
  getConfigRL: ? {|
    __typename: "ConfigRL",
    id: string,
    experiments: ? Array<? {|
      __typename: string,
      uuid: string,
      name: string,
      iconUrl: ?string,
    |} >,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type ListConfigRLsQueryVariables = {|
  filter?: ?ModelConfigRLFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListConfigRLsQuery = {|
  listConfigRLs: ? {|
    __typename: "ModelConfigRLConnection",
    items:  Array< {|
      __typename: string,
      id: string,
      experiments: ? Array<? {|
        __typename: string,
        uuid: string,
        name: string,
        iconUrl: ?string,
      |} >,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type UserByEmailQueryVariables = {|
  email?: ?string,
  sortDirection?: ?ModelSortDirection,
  filter?: ?ModelUserRLFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type UserByEmailQuery = {|
  userByEmail: ? {|
    __typename: "ModelUserRLConnection",
    items:  Array< {|
      __typename: string,
      email: string,
      id: string,
      firstName: string,
      lastName: string,
      filedId: ?string,
      quantityViolations: ?number,
      cleanDate: ?any,
      type: string,
      subjects: ?Array< ?string >,
      appointments: ?Array< ?any >,
      createdAt: any,
      updatedAt: any,
      owner: ?string,
    |} >,
    nextToken: ?string,
  |},
|};

export type AppointmentByDayAndExperimentUserlessQueryVariables = {|
  day?: ?string,
  experimentIdIsTaken?: ?ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyConditionInput,
  sortDirection?: ?ModelSortDirection,
  filter?: ?ModelAppointmentRLFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type AppointmentByDayAndExperimentUserlessQuery = {|
  appointmentByDayAndExperimentUserless: ? {|
    __typename: "ModelAppointmentRLConnection",
    items:  Array< {|
      __typename: string,
      id: string,
      day: ?string,
      hour: ?string,
      uuid: ?string,
      isTaken: ?string,
      experimentId: ?string,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type AppointmentByUuidUserlessQueryVariables = {|
  uuid?: ?string,
  sortDirection?: ?ModelSortDirection,
  filter?: ?ModelAppointmentRLFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type AppointmentByUuidUserlessQuery = {|
  appointmentByUuidUserless: ? {|
    __typename: "ModelAppointmentRLConnection",
    items:  Array< {|
      __typename: string,
      id: string,
      day: ?string,
      hour: ?string,
      uuid: ?string,
      isTaken: ?string,
      experimentId: ?string,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetByStatusQueryVariables = {|
  status?: ?string,
  sortDirection?: ?ModelSortDirection,
  filter?: ?ModelAppointmentTakenRLFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type GetByStatusQuery = {|
  getByStatus: ? {|
    __typename: "ModelAppointmentTakenRLConnection",
    items:  Array< {|
      __typename: string,
      email: string,
      day: string,
      hour: string,
      uuid: string,
      firstName: ?string,
      lastName: ?string,
      experimentId: string,
      status: string,
      createdAt: any,
      updatedAt: any,
      owner: ?string,
    |} >,
    nextToken: ?string,
  |},
|};

export type AppointmentByDateAndExperimentQueryVariables = {|
  experimentId?: ?string,
  dayHour?: ?ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyConditionInput,
  sortDirection?: ?ModelSortDirection,
  filter?: ?ModelAppointmentTakenRLFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type AppointmentByDateAndExperimentQuery = {|
  appointmentByDateAndExperiment: ? {|
    __typename: "ModelAppointmentTakenRLConnection",
    items:  Array< {|
      __typename: string,
      email: string,
      day: string,
      hour: string,
      uuid: string,
      firstName: ?string,
      lastName: ?string,
      experimentId: string,
      status: string,
      createdAt: any,
      updatedAt: any,
      owner: ?string,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetByUuidQueryVariables = {|
  uuid?: ?string,
  sortDirection?: ?ModelSortDirection,
  filter?: ?ModelAppointmentTakenRLFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type GetByUuidQuery = {|
  getByUuid: ? {|
    __typename: "ModelAppointmentTakenRLConnection",
    items:  Array< {|
      __typename: string,
      email: string,
      day: string,
      hour: string,
      uuid: string,
      firstName: ?string,
      lastName: ?string,
      experimentId: string,
      status: string,
      createdAt: any,
      updatedAt: any,
      owner: ?string,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetAppointmentByStatusQueryVariables = {|
  status?: ?string,
  sortDirection?: ?ModelSortDirection,
  filter?: ?ModelAppointmentStudentRLFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type GetAppointmentByStatusQuery = {|
  getAppointmentByStatus: ? {|
    __typename: "ModelAppointmentStudentRLConnection",
    items:  Array< {|
      __typename: string,
      email: string,
      day: string,
      hour: string,
      uuid: string,
      firstName: ?string,
      lastName: ?string,
      experimentId: string,
      status: string,
      createdAt: any,
      updatedAt: any,
      owner: ?string,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetAppointmentByDateAndExperimentQueryVariables = {|
  experimentId?: ?string,
  dayHour?: ?ModelAppointmentStudentRLByDateAndExperimentCompositeKeyConditionInput,
  sortDirection?: ?ModelSortDirection,
  filter?: ?ModelAppointmentStudentRLFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type GetAppointmentByDateAndExperimentQuery = {|
  getAppointmentByDateAndExperiment: ? {|
    __typename: "ModelAppointmentStudentRLConnection",
    items:  Array< {|
      __typename: string,
      email: string,
      day: string,
      hour: string,
      uuid: string,
      firstName: ?string,
      lastName: ?string,
      experimentId: string,
      status: string,
      createdAt: any,
      updatedAt: any,
      owner: ?string,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetAppointmentByUuidQueryVariables = {|
  uuid?: ?string,
  sortDirection?: ?ModelSortDirection,
  filter?: ?ModelAppointmentStudentRLFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type GetAppointmentByUuidQuery = {|
  getAppointmentByUuid: ? {|
    __typename: "ModelAppointmentStudentRLConnection",
    items:  Array< {|
      __typename: string,
      email: string,
      day: string,
      hour: string,
      uuid: string,
      firstName: ?string,
      lastName: ?string,
      experimentId: string,
      status: string,
      createdAt: any,
      updatedAt: any,
      owner: ?string,
    |} >,
    nextToken: ?string,
  |},
|};

export type SubjectByIdQueryVariables = {|
  id?: ?string,
  sortDirection?: ?ModelSortDirection,
  filter?: ?ModelSubjectRLFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type SubjectByIdQuery = {|
  subjectById: ? {|
    __typename: "ModelSubjectRLConnection",
    items:  Array< {|
      __typename: string,
      id: string,
      name: string,
      students: ? Array<? {|
        __typename: string,
        email: ?string,
        firstName: ?string,
        lastName: ?string,
      |} >,
      periodBlock: string,
      university: string,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreateUserRLSubscription = {|
  onCreateUserRL: ? {|
    __typename: "UserRL",
    email: string,
    id: string,
    firstName: string,
    lastName: string,
    filedId: ?string,
    quantityViolations: ?number,
    cleanDate: ?any,
    type: string,
    subjects: ?Array< ?string >,
    appointments: ?Array< ?any >,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type OnUpdateUserRLSubscription = {|
  onUpdateUserRL: ? {|
    __typename: "UserRL",
    email: string,
    id: string,
    firstName: string,
    lastName: string,
    filedId: ?string,
    quantityViolations: ?number,
    cleanDate: ?any,
    type: string,
    subjects: ?Array< ?string >,
    appointments: ?Array< ?any >,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type OnDeleteUserRLSubscription = {|
  onDeleteUserRL: ? {|
    __typename: "UserRL",
    email: string,
    id: string,
    firstName: string,
    lastName: string,
    filedId: ?string,
    quantityViolations: ?number,
    cleanDate: ?any,
    type: string,
    subjects: ?Array< ?string >,
    appointments: ?Array< ?any >,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type OnCreateAppointmentRLSubscription = {|
  onCreateAppointmentRL: ? {|
    __typename: "AppointmentRL",
    id: string,
    day: ?string,
    hour: ?string,
    uuid: ?string,
    isTaken: ?string,
    experimentId: ?string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnUpdateAppointmentRLSubscription = {|
  onUpdateAppointmentRL: ? {|
    __typename: "AppointmentRL",
    id: string,
    day: ?string,
    hour: ?string,
    uuid: ?string,
    isTaken: ?string,
    experimentId: ?string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnDeleteAppointmentRLSubscription = {|
  onDeleteAppointmentRL: ? {|
    __typename: "AppointmentRL",
    id: string,
    day: ?string,
    hour: ?string,
    uuid: ?string,
    isTaken: ?string,
    experimentId: ?string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnCreateAppointmentTakenRLSubscription = {|
  onCreateAppointmentTakenRL: ? {|
    __typename: "AppointmentTakenRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName: ?string,
    lastName: ?string,
    experimentId: string,
    status: string,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type OnUpdateAppointmentTakenRLSubscription = {|
  onUpdateAppointmentTakenRL: ? {|
    __typename: "AppointmentTakenRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName: ?string,
    lastName: ?string,
    experimentId: string,
    status: string,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type OnDeleteAppointmentTakenRLSubscription = {|
  onDeleteAppointmentTakenRL: ? {|
    __typename: "AppointmentTakenRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName: ?string,
    lastName: ?string,
    experimentId: string,
    status: string,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type OnCreateAppointmentStudentRLSubscription = {|
  onCreateAppointmentStudentRL: ? {|
    __typename: "AppointmentStudentRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName: ?string,
    lastName: ?string,
    experimentId: string,
    status: string,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type OnUpdateAppointmentStudentRLSubscription = {|
  onUpdateAppointmentStudentRL: ? {|
    __typename: "AppointmentStudentRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName: ?string,
    lastName: ?string,
    experimentId: string,
    status: string,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type OnDeleteAppointmentStudentRLSubscription = {|
  onDeleteAppointmentStudentRL: ? {|
    __typename: "AppointmentStudentRL",
    email: string,
    day: string,
    hour: string,
    uuid: string,
    firstName: ?string,
    lastName: ?string,
    experimentId: string,
    status: string,
    createdAt: any,
    updatedAt: any,
    owner: ?string,
  |},
|};

export type OnCreateSubjectRLSubscription = {|
  onCreateSubjectRL: ? {|
    __typename: "SubjectRL",
    id: string,
    name: string,
    students: ? Array<? {|
      __typename: string,
      email: ?string,
      firstName: ?string,
      lastName: ?string,
    |} >,
    periodBlock: string,
    university: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnUpdateSubjectRLSubscription = {|
  onUpdateSubjectRL: ? {|
    __typename: "SubjectRL",
    id: string,
    name: string,
    students: ? Array<? {|
      __typename: string,
      email: ?string,
      firstName: ?string,
      lastName: ?string,
    |} >,
    periodBlock: string,
    university: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnDeleteSubjectRLSubscription = {|
  onDeleteSubjectRL: ? {|
    __typename: "SubjectRL",
    id: string,
    name: string,
    students: ? Array<? {|
      __typename: string,
      email: ?string,
      firstName: ?string,
      lastName: ?string,
    |} >,
    periodBlock: string,
    university: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnCreateConfigRLSubscription = {|
  onCreateConfigRL: ? {|
    __typename: "ConfigRL",
    id: string,
    experiments: ? Array<? {|
      __typename: string,
      uuid: string,
      name: string,
      iconUrl: ?string,
    |} >,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnUpdateConfigRLSubscription = {|
  onUpdateConfigRL: ? {|
    __typename: "ConfigRL",
    id: string,
    experiments: ? Array<? {|
      __typename: string,
      uuid: string,
      name: string,
      iconUrl: ?string,
    |} >,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnDeleteConfigRLSubscription = {|
  onDeleteConfigRL: ? {|
    __typename: "ConfigRL",
    id: string,
    experiments: ? Array<? {|
      __typename: string,
      uuid: string,
      name: string,
      iconUrl: ?string,
    |} >,
    createdAt: any,
    updatedAt: any,
  |},
|};