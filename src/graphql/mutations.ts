/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteAPPOINTMENT = /* GraphQL */ `
  mutation DeleteAPPOINTMENT($id: Int!) {
    deleteAPPOINTMENT(id: $id) {
      id
      day
      hour
      idExperiment
      idStudent
      status
    }
  }
`;
export const createAPPOINTMENT = /* GraphQL */ `
  mutation CreateAPPOINTMENT($createAPPOINTMENTInput: CreateAPPOINTMENTInput!) {
    createAPPOINTMENT(createAPPOINTMENTInput: $createAPPOINTMENTInput) {
      id
      day
      hour
      idExperiment
      idStudent
      status
    }
  }
`;
export const updateAPPOINTMENT = /* GraphQL */ `
  mutation UpdateAPPOINTMENT($updateAPPOINTMENTInput: UpdateAPPOINTMENTInput!) {
    updateAPPOINTMENT(updateAPPOINTMENTInput: $updateAPPOINTMENTInput) {
      id
      day
      hour
      idExperiment
      idStudent
      status
    }
  }
`;
export const deleteCLASS = /* GraphQL */ `
  mutation DeleteCLASS($id: Int!) {
    deleteCLASS(id: $id) {
      id
      name
      idTeacher
      period
      shift
    }
  }
`;
export const createCLASS = /* GraphQL */ `
  mutation CreateCLASS($createCLASSInput: CreateCLASSInput!) {
    createCLASS(createCLASSInput: $createCLASSInput) {
      id
      name
      idTeacher
      period
      shift
    }
  }
`;
export const updateCLASS = /* GraphQL */ `
  mutation UpdateCLASS($updateCLASSInput: UpdateCLASSInput!) {
    updateCLASS(updateCLASSInput: $updateCLASSInput) {
      id
      name
      idTeacher
      period
      shift
    }
  }
`;
export const deleteEXPERIMENT = /* GraphQL */ `
  mutation DeleteEXPERIMENT($id: Int!) {
    deleteEXPERIMENT(id: $id) {
      id
      name
      img_path
    }
  }
`;
export const createEXPERIMENT = /* GraphQL */ `
  mutation CreateEXPERIMENT($createEXPERIMENTInput: CreateEXPERIMENTInput!) {
    createEXPERIMENT(createEXPERIMENTInput: $createEXPERIMENTInput) {
      id
      name
      img_path
    }
  }
`;
export const updateEXPERIMENT = /* GraphQL */ `
  mutation UpdateEXPERIMENT($updateEXPERIMENTInput: UpdateEXPERIMENTInput!) {
    updateEXPERIMENT(updateEXPERIMENTInput: $updateEXPERIMENTInput) {
      id
      name
      img_path
    }
  }
`;
export const deleteSTUDENT = /* GraphQL */ `
  mutation DeleteSTUDENT($id: Int!) {
    deleteSTUDENT(id: $id) {
      id
      first_name
      last_name
      file_id
      email
      quantityViolations
      status
      cleanDate
    }
  }
`;
export const createSTUDENT = /* GraphQL */ `
  mutation CreateSTUDENT($createSTUDENTInput: CreateSTUDENTInput!) {
    createSTUDENT(createSTUDENTInput: $createSTUDENTInput) {
      id
      first_name
      last_name
      file_id
      email
      quantityViolations
      status
      cleanDate
    }
  }
`;
export const updateSTUDENT = /* GraphQL */ `
  mutation UpdateSTUDENT($updateSTUDENTInput: UpdateSTUDENTInput!) {
    updateSTUDENT(updateSTUDENTInput: $updateSTUDENTInput) {
      id
      first_name
      last_name
      file_id
      email
      quantityViolations
      status
      cleanDate
    }
  }
`;
export const deleteTEACHER = /* GraphQL */ `
  mutation DeleteTEACHER($id: Int!) {
    deleteTEACHER(id: $id) {
      id
      first_name
      last_name
      email
    }
  }
`;
export const createTEACHER = /* GraphQL */ `
  mutation CreateTEACHER($createTEACHERInput: CreateTEACHERInput!) {
    createTEACHER(createTEACHERInput: $createTEACHERInput) {
      id
      first_name
      last_name
      email
    }
  }
`;
export const updateTEACHER = /* GraphQL */ `
  mutation UpdateTEACHER($updateTEACHERInput: UpdateTEACHERInput!) {
    updateTEACHER(updateTEACHERInput: $updateTEACHERInput) {
      id
      first_name
      last_name
      email
    }
  }
`;
export const deleteCLASSXSTUDENT = /* GraphQL */ `
  mutation DeleteCLASSXSTUDENT($id: Int!) {
    deleteCLASSXSTUDENT(id: $id) {
      idClass
      idStudent
      id
    }
  }
`;
export const createCLASSXSTUDENT = /* GraphQL */ `
  mutation CreateCLASSXSTUDENT(
    $createCLASSXSTUDENTInput: CreateCLASSXSTUDENTInput!
  ) {
    createCLASSXSTUDENT(createCLASSXSTUDENTInput: $createCLASSXSTUDENTInput) {
      idClass
      idStudent
      id
    }
  }
`;
export const updateCLASSXSTUDENT = /* GraphQL */ `
  mutation UpdateCLASSXSTUDENT(
    $updateCLASSXSTUDENTInput: UpdateCLASSXSTUDENTInput!
  ) {
    updateCLASSXSTUDENT(updateCLASSXSTUDENTInput: $updateCLASSXSTUDENTInput) {
      idClass
      idStudent
      id
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const createPrivateNote = /* GraphQL */ `
  mutation CreatePrivateNote(
    $input: CreatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    createPrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePrivateNote = /* GraphQL */ `
  mutation UpdatePrivateNote(
    $input: UpdatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    updatePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePrivateNote = /* GraphQL */ `
  mutation DeletePrivateNote(
    $input: DeletePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    deletePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
