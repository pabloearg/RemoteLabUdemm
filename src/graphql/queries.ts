/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAPPOINTMENT = /* GraphQL */ `
  query GetAPPOINTMENT($id: Int!) {
    getAPPOINTMENT(id: $id) {
      id
      day
      hour
      idExperiment
      idStudent
      status
    }
  }
`;
export const listAPPOINTMENTs = /* GraphQL */ `
  query ListAPPOINTMENTs {
    listAPPOINTMENTs {
      id
      day
      hour
      idExperiment
      idStudent
      status
    }
  }
`;
export const getCLASS = /* GraphQL */ `
  query GetCLASS($id: Int!) {
    getCLASS(id: $id) {
      id
      name
      idTeacher
      period
      shift
    }
  }
`;
export const listCLASSs = /* GraphQL */ `
  query ListCLASSs {
    listCLASSs {
      id
      name
      idTeacher
      period
      shift
    }
  }
`;
export const getEXPERIMENT = /* GraphQL */ `
  query GetEXPERIMENT($id: Int!) {
    getEXPERIMENT(id: $id) {
      id
      name
      img_path
    }
  }
`;
export const listEXPERIMENTs = /* GraphQL */ `
  query ListEXPERIMENTs {
    listEXPERIMENTs {
      id
      name
      img_path
    }
  }
`;
export const getSTUDENT = /* GraphQL */ `
  query GetSTUDENT($id: Int!) {
    getSTUDENT(id: $id) {
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
export const listSTUDENTs = /* GraphQL */ `
  query ListSTUDENTs {
    listSTUDENTs {
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
export const getTEACHER = /* GraphQL */ `
  query GetTEACHER($id: Int!) {
    getTEACHER(id: $id) {
      id
      first_name
      last_name
      email
    }
  }
`;
export const listTEACHERs = /* GraphQL */ `
  query ListTEACHERs {
    listTEACHERs {
      id
      first_name
      last_name
      email
    }
  }
`;
export const getCLASSXSTUDENT = /* GraphQL */ `
  query GetCLASSXSTUDENT($id: Int!) {
    getCLASSXSTUDENT(id: $id) {
      idClass
      idStudent
      id
    }
  }
`;
export const listCLASSXSTUDENTs = /* GraphQL */ `
  query ListCLASSXSTUDENTs {
    listCLASSXSTUDENTs {
      idClass
      idStudent
      id
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrivateNote = /* GraphQL */ `
  query GetPrivateNote($id: ID!) {
    getPrivateNote(id: $id) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPrivateNotes = /* GraphQL */ `
  query ListPrivateNotes(
    $filter: ModelPrivateNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
