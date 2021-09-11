/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAPPOINTMENT = /* GraphQL */ `
  subscription OnCreateAPPOINTMENT {
    onCreateAPPOINTMENT {
      id
      day
      hour
      idExperiment
      idStudent
      status
    }
  }
`;
export const onCreateCLASS = /* GraphQL */ `
  subscription OnCreateCLASS {
    onCreateCLASS {
      id
      name
      idTeacher
      period
      shift
    }
  }
`;
export const onCreateEXPERIMENT = /* GraphQL */ `
  subscription OnCreateEXPERIMENT {
    onCreateEXPERIMENT {
      id
      name
      img_path
    }
  }
`;
export const onCreateSTUDENT = /* GraphQL */ `
  subscription OnCreateSTUDENT {
    onCreateSTUDENT {
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
export const onCreateTEACHER = /* GraphQL */ `
  subscription OnCreateTEACHER {
    onCreateTEACHER {
      id
      first_name
      last_name
      email
    }
  }
`;
export const onCreateCLASSXSTUDENT = /* GraphQL */ `
  subscription OnCreateCLASSXSTUDENT {
    onCreateCLASSXSTUDENT {
      idClass
      idStudent
      id
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote($owner: String!) {
    onCreatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote($owner: String!) {
    onUpdatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote($owner: String!) {
    onDeletePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
