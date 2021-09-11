/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type APPOINTMENT = {
  __typename: "APPOINTMENT",
  id: number,
  day?: string | null,
  hour?: string | null,
  idExperiment?: number | null,
  idStudent?: number | null,
  status?: string | null,
};

export type CreateAPPOINTMENTInput = {
  id: number,
  day?: string | null,
  hour?: string | null,
  idExperiment?: number | null,
  idStudent?: number | null,
  status?: string | null,
};

export type UpdateAPPOINTMENTInput = {
  id: number,
  day?: string | null,
  hour?: string | null,
  idExperiment?: number | null,
  idStudent?: number | null,
  status?: string | null,
};

export type CLASS = {
  __typename: "CLASS",
  id: number,
  name: string,
  idTeacher: number,
  period?: string | null,
  shift?: string | null,
};

export type CreateCLASSInput = {
  id: number,
  name: string,
  idTeacher: number,
  period?: string | null,
  shift?: string | null,
};

export type UpdateCLASSInput = {
  id: number,
  name?: string | null,
  idTeacher?: number | null,
  period?: string | null,
  shift?: string | null,
};

export type EXPERIMENT = {
  __typename: "EXPERIMENT",
  id: number,
  name?: string | null,
  img_path?: string | null,
};

export type CreateEXPERIMENTInput = {
  id: number,
  name?: string | null,
  img_path?: string | null,
};

export type UpdateEXPERIMENTInput = {
  id: number,
  name?: string | null,
  img_path?: string | null,
};

export type STUDENT = {
  __typename: "STUDENT",
  id: number,
  first_name: string,
  last_name: string,
  file_id: string,
  email: string,
  quantityViolations?: number | null,
  status?: string | null,
  cleanDate?: string | null,
};

export type CreateSTUDENTInput = {
  id: number,
  first_name: string,
  last_name: string,
  file_id: string,
  email: string,
  quantityViolations?: number | null,
  status?: string | null,
  cleanDate?: string | null,
};

export type UpdateSTUDENTInput = {
  id: number,
  first_name?: string | null,
  last_name?: string | null,
  file_id?: string | null,
  email?: string | null,
  quantityViolations?: number | null,
  status?: string | null,
  cleanDate?: string | null,
};

export type TEACHER = {
  __typename: "TEACHER",
  id: number,
  first_name: string,
  last_name: string,
  email: string,
};

export type CreateTEACHERInput = {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
};

export type UpdateTEACHERInput = {
  id: number,
  first_name?: string | null,
  last_name?: string | null,
  email?: string | null,
};

export type CLASSXSTUDENT = {
  __typename: "CLASSXSTUDENT",
  idClass?: number | null,
  idStudent?: number | null,
  id: number,
};

export type CreateCLASSXSTUDENTInput = {
  idClass?: number | null,
  idStudent?: number | null,
  id: number,
};

export type UpdateCLASSXSTUDENTInput = {
  idClass?: number | null,
  idStudent?: number | null,
  id: number,
};

export type CreateTaskInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  status?: string | null,
};

export type ModelTaskConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelTaskConditionInput | null > | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  not?: ModelTaskConditionInput | null,
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

export type Task = {
  __typename: "Task",
  id: string,
  title: string,
  description?: string | null,
  status?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTaskInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  status?: string | null,
};

export type DeleteTaskInput = {
  id: string,
};

export type CreatePrivateNoteInput = {
  id?: string | null,
  content: string,
};

export type ModelPrivateNoteConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelPrivateNoteConditionInput | null > | null,
  or?: Array< ModelPrivateNoteConditionInput | null > | null,
  not?: ModelPrivateNoteConditionInput | null,
};

export type PrivateNote = {
  __typename: "PrivateNote",
  id: string,
  content: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdatePrivateNoteInput = {
  id: string,
  content?: string | null,
};

export type DeletePrivateNoteInput = {
  id: string,
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
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

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection",
  items?:  Array<Task | null > | null,
  nextToken?: string | null,
};

export type ModelPrivateNoteFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelPrivateNoteFilterInput | null > | null,
  or?: Array< ModelPrivateNoteFilterInput | null > | null,
  not?: ModelPrivateNoteFilterInput | null,
};

export type ModelPrivateNoteConnection = {
  __typename: "ModelPrivateNoteConnection",
  items?:  Array<PrivateNote | null > | null,
  nextToken?: string | null,
};

export type DeleteAPPOINTMENTMutationVariables = {
  id: number,
};

export type DeleteAPPOINTMENTMutation = {
  deleteAPPOINTMENT?:  {
    __typename: "APPOINTMENT",
    id: number,
    day?: string | null,
    hour?: string | null,
    idExperiment?: number | null,
    idStudent?: number | null,
    status?: string | null,
  } | null,
};

export type CreateAPPOINTMENTMutationVariables = {
  createAPPOINTMENTInput: CreateAPPOINTMENTInput,
};

export type CreateAPPOINTMENTMutation = {
  createAPPOINTMENT?:  {
    __typename: "APPOINTMENT",
    id: number,
    day?: string | null,
    hour?: string | null,
    idExperiment?: number | null,
    idStudent?: number | null,
    status?: string | null,
  } | null,
};

export type UpdateAPPOINTMENTMutationVariables = {
  updateAPPOINTMENTInput: UpdateAPPOINTMENTInput,
};

export type UpdateAPPOINTMENTMutation = {
  updateAPPOINTMENT?:  {
    __typename: "APPOINTMENT",
    id: number,
    day?: string | null,
    hour?: string | null,
    idExperiment?: number | null,
    idStudent?: number | null,
    status?: string | null,
  } | null,
};

export type DeleteCLASSMutationVariables = {
  id: number,
};

export type DeleteCLASSMutation = {
  deleteCLASS?:  {
    __typename: "CLASS",
    id: number,
    name: string,
    idTeacher: number,
    period?: string | null,
    shift?: string | null,
  } | null,
};

export type CreateCLASSMutationVariables = {
  createCLASSInput: CreateCLASSInput,
};

export type CreateCLASSMutation = {
  createCLASS?:  {
    __typename: "CLASS",
    id: number,
    name: string,
    idTeacher: number,
    period?: string | null,
    shift?: string | null,
  } | null,
};

export type UpdateCLASSMutationVariables = {
  updateCLASSInput: UpdateCLASSInput,
};

export type UpdateCLASSMutation = {
  updateCLASS?:  {
    __typename: "CLASS",
    id: number,
    name: string,
    idTeacher: number,
    period?: string | null,
    shift?: string | null,
  } | null,
};

export type DeleteEXPERIMENTMutationVariables = {
  id: number,
};

export type DeleteEXPERIMENTMutation = {
  deleteEXPERIMENT?:  {
    __typename: "EXPERIMENT",
    id: number,
    name?: string | null,
    img_path?: string | null,
  } | null,
};

export type CreateEXPERIMENTMutationVariables = {
  createEXPERIMENTInput: CreateEXPERIMENTInput,
};

export type CreateEXPERIMENTMutation = {
  createEXPERIMENT?:  {
    __typename: "EXPERIMENT",
    id: number,
    name?: string | null,
    img_path?: string | null,
  } | null,
};

export type UpdateEXPERIMENTMutationVariables = {
  updateEXPERIMENTInput: UpdateEXPERIMENTInput,
};

export type UpdateEXPERIMENTMutation = {
  updateEXPERIMENT?:  {
    __typename: "EXPERIMENT",
    id: number,
    name?: string | null,
    img_path?: string | null,
  } | null,
};

export type DeleteSTUDENTMutationVariables = {
  id: number,
};

export type DeleteSTUDENTMutation = {
  deleteSTUDENT?:  {
    __typename: "STUDENT",
    id: number,
    first_name: string,
    last_name: string,
    file_id: string,
    email: string,
    quantityViolations?: number | null,
    status?: string | null,
    cleanDate?: string | null,
  } | null,
};

export type CreateSTUDENTMutationVariables = {
  createSTUDENTInput: CreateSTUDENTInput,
};

export type CreateSTUDENTMutation = {
  createSTUDENT?:  {
    __typename: "STUDENT",
    id: number,
    first_name: string,
    last_name: string,
    file_id: string,
    email: string,
    quantityViolations?: number | null,
    status?: string | null,
    cleanDate?: string | null,
  } | null,
};

export type UpdateSTUDENTMutationVariables = {
  updateSTUDENTInput: UpdateSTUDENTInput,
};

export type UpdateSTUDENTMutation = {
  updateSTUDENT?:  {
    __typename: "STUDENT",
    id: number,
    first_name: string,
    last_name: string,
    file_id: string,
    email: string,
    quantityViolations?: number | null,
    status?: string | null,
    cleanDate?: string | null,
  } | null,
};

export type DeleteTEACHERMutationVariables = {
  id: number,
};

export type DeleteTEACHERMutation = {
  deleteTEACHER?:  {
    __typename: "TEACHER",
    id: number,
    first_name: string,
    last_name: string,
    email: string,
  } | null,
};

export type CreateTEACHERMutationVariables = {
  createTEACHERInput: CreateTEACHERInput,
};

export type CreateTEACHERMutation = {
  createTEACHER?:  {
    __typename: "TEACHER",
    id: number,
    first_name: string,
    last_name: string,
    email: string,
  } | null,
};

export type UpdateTEACHERMutationVariables = {
  updateTEACHERInput: UpdateTEACHERInput,
};

export type UpdateTEACHERMutation = {
  updateTEACHER?:  {
    __typename: "TEACHER",
    id: number,
    first_name: string,
    last_name: string,
    email: string,
  } | null,
};

export type DeleteCLASSXSTUDENTMutationVariables = {
  id: number,
};

export type DeleteCLASSXSTUDENTMutation = {
  deleteCLASSXSTUDENT?:  {
    __typename: "CLASSXSTUDENT",
    idClass?: number | null,
    idStudent?: number | null,
    id: number,
  } | null,
};

export type CreateCLASSXSTUDENTMutationVariables = {
  createCLASSXSTUDENTInput: CreateCLASSXSTUDENTInput,
};

export type CreateCLASSXSTUDENTMutation = {
  createCLASSXSTUDENT?:  {
    __typename: "CLASSXSTUDENT",
    idClass?: number | null,
    idStudent?: number | null,
    id: number,
  } | null,
};

export type UpdateCLASSXSTUDENTMutationVariables = {
  updateCLASSXSTUDENTInput: UpdateCLASSXSTUDENTInput,
};

export type UpdateCLASSXSTUDENTMutation = {
  updateCLASSXSTUDENT?:  {
    __typename: "CLASSXSTUDENT",
    idClass?: number | null,
    idStudent?: number | null,
    id: number,
  } | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type CreateTaskMutation = {
  createTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type UpdateTaskMutation = {
  updateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type DeleteTaskMutation = {
  deleteTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePrivateNoteMutationVariables = {
  input: CreatePrivateNoteInput,
  condition?: ModelPrivateNoteConditionInput | null,
};

export type CreatePrivateNoteMutation = {
  createPrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePrivateNoteMutationVariables = {
  input: UpdatePrivateNoteInput,
  condition?: ModelPrivateNoteConditionInput | null,
};

export type UpdatePrivateNoteMutation = {
  updatePrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePrivateNoteMutationVariables = {
  input: DeletePrivateNoteInput,
  condition?: ModelPrivateNoteConditionInput | null,
};

export type DeletePrivateNoteMutation = {
  deletePrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetAPPOINTMENTQueryVariables = {
  id: number,
};

export type GetAPPOINTMENTQuery = {
  getAPPOINTMENT?:  {
    __typename: "APPOINTMENT",
    id: number,
    day?: string | null,
    hour?: string | null,
    idExperiment?: number | null,
    idStudent?: number | null,
    status?: string | null,
  } | null,
};

export type ListAPPOINTMENTsQuery = {
  listAPPOINTMENTs?:  Array< {
    __typename: "APPOINTMENT",
    id: number,
    day?: string | null,
    hour?: string | null,
    idExperiment?: number | null,
    idStudent?: number | null,
    status?: string | null,
  } | null > | null,
};

export type GetCLASSQueryVariables = {
  id: number,
};

export type GetCLASSQuery = {
  getCLASS?:  {
    __typename: "CLASS",
    id: number,
    name: string,
    idTeacher: number,
    period?: string | null,
    shift?: string | null,
  } | null,
};

export type ListCLASSsQuery = {
  listCLASSs?:  Array< {
    __typename: "CLASS",
    id: number,
    name: string,
    idTeacher: number,
    period?: string | null,
    shift?: string | null,
  } | null > | null,
};

export type GetEXPERIMENTQueryVariables = {
  id: number,
};

export type GetEXPERIMENTQuery = {
  getEXPERIMENT?:  {
    __typename: "EXPERIMENT",
    id: number,
    name?: string | null,
    img_path?: string | null,
  } | null,
};

export type ListEXPERIMENTsQuery = {
  listEXPERIMENTs?:  Array< {
    __typename: "EXPERIMENT",
    id: number,
    name?: string | null,
    img_path?: string | null,
  } | null > | null,
};

export type GetSTUDENTQueryVariables = {
  id: number,
};

export type GetSTUDENTQuery = {
  getSTUDENT?:  {
    __typename: "STUDENT",
    id: number,
    first_name: string,
    last_name: string,
    file_id: string,
    email: string,
    quantityViolations?: number | null,
    status?: string | null,
    cleanDate?: string | null,
  } | null,
};

export type ListSTUDENTsQuery = {
  listSTUDENTs?:  Array< {
    __typename: "STUDENT",
    id: number,
    first_name: string,
    last_name: string,
    file_id: string,
    email: string,
    quantityViolations?: number | null,
    status?: string | null,
    cleanDate?: string | null,
  } | null > | null,
};

export type GetTEACHERQueryVariables = {
  id: number,
};

export type GetTEACHERQuery = {
  getTEACHER?:  {
    __typename: "TEACHER",
    id: number,
    first_name: string,
    last_name: string,
    email: string,
  } | null,
};

export type ListTEACHERsQuery = {
  listTEACHERs?:  Array< {
    __typename: "TEACHER",
    id: number,
    first_name: string,
    last_name: string,
    email: string,
  } | null > | null,
};

export type GetCLASSXSTUDENTQueryVariables = {
  id: number,
};

export type GetCLASSXSTUDENTQuery = {
  getCLASSXSTUDENT?:  {
    __typename: "CLASSXSTUDENT",
    idClass?: number | null,
    idStudent?: number | null,
    id: number,
  } | null,
};

export type ListCLASSXSTUDENTsQuery = {
  listCLASSXSTUDENTs?:  Array< {
    __typename: "CLASSXSTUDENT",
    idClass?: number | null,
    idStudent?: number | null,
    id: number,
  } | null > | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "ModelTaskConnection",
    items?:  Array< {
      __typename: "Task",
      id: string,
      title: string,
      description?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPrivateNoteQueryVariables = {
  id: string,
};

export type GetPrivateNoteQuery = {
  getPrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPrivateNotesQueryVariables = {
  filter?: ModelPrivateNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPrivateNotesQuery = {
  listPrivateNotes?:  {
    __typename: "ModelPrivateNoteConnection",
    items?:  Array< {
      __typename: "PrivateNote",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAPPOINTMENTSubscription = {
  onCreateAPPOINTMENT?:  {
    __typename: "APPOINTMENT",
    id: number,
    day?: string | null,
    hour?: string | null,
    idExperiment?: number | null,
    idStudent?: number | null,
    status?: string | null,
  } | null,
};

export type OnCreateCLASSSubscription = {
  onCreateCLASS?:  {
    __typename: "CLASS",
    id: number,
    name: string,
    idTeacher: number,
    period?: string | null,
    shift?: string | null,
  } | null,
};

export type OnCreateEXPERIMENTSubscription = {
  onCreateEXPERIMENT?:  {
    __typename: "EXPERIMENT",
    id: number,
    name?: string | null,
    img_path?: string | null,
  } | null,
};

export type OnCreateSTUDENTSubscription = {
  onCreateSTUDENT?:  {
    __typename: "STUDENT",
    id: number,
    first_name: string,
    last_name: string,
    file_id: string,
    email: string,
    quantityViolations?: number | null,
    status?: string | null,
    cleanDate?: string | null,
  } | null,
};

export type OnCreateTEACHERSubscription = {
  onCreateTEACHER?:  {
    __typename: "TEACHER",
    id: number,
    first_name: string,
    last_name: string,
    email: string,
  } | null,
};

export type OnCreateCLASSXSTUDENTSubscription = {
  onCreateCLASSXSTUDENT?:  {
    __typename: "CLASSXSTUDENT",
    idClass?: number | null,
    idStudent?: number | null,
    id: number,
  } | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePrivateNoteSubscriptionVariables = {
  owner: string,
};

export type OnCreatePrivateNoteSubscription = {
  onCreatePrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePrivateNoteSubscriptionVariables = {
  owner: string,
};

export type OnUpdatePrivateNoteSubscription = {
  onUpdatePrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePrivateNoteSubscriptionVariables = {
  owner: string,
};

export type OnDeletePrivateNoteSubscription = {
  onDeletePrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
