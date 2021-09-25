/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      firstName
      lastName
      filedId
      quantityViolations
      cleanDate
      type
      subjects
      appointments {
        experimentId
        uuid
        hour
        day
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        firstName
        lastName
        filedId
        quantityViolations
        cleanDate
        type
        subjects
        appointments {
          experimentId
          uuid
          hour
          day
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAppointment = /* GraphQL */ `
  query GetAppointment($id: ID!) {
    getAppointment(id: $id) {
      id
      day
      hour
      uuid
      email
      firstName
      lastName
      experimentId
      createdAt
      updatedAt
    }
  }
`;
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        day
        hour
        uuid
        email
        firstName
        lastName
        experimentId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSubject = /* GraphQL */ `
  query GetSubject($id: ID!) {
    getSubject(id: $id) {
      id
      name
      students {
        email
        firstName
        lastName
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSubjects = /* GraphQL */ `
  query ListSubjects(
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        students {
          email
          firstName
          lastName
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConfig = /* GraphQL */ `
  query GetConfig($id: ID!) {
    getConfig(id: $id) {
      id
      experiments {
        uuid
        name
        iconUrl
      }
      createdAt
      updatedAt
    }
  }
`;
export const listConfigs = /* GraphQL */ `
  query ListConfigs(
    $filter: ModelConfigFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConfigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        experiments {
          uuid
          name
          iconUrl
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userByEmail = /* GraphQL */ `
  query UserByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        firstName
        lastName
        filedId
        quantityViolations
        cleanDate
        type
        subjects
        appointments {
          experimentId
          uuid
          hour
          day
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const appointmentByDateAndExperiment = /* GraphQL */ `
  query AppointmentByDateAndExperiment(
    $id: ID
    $experimentIdDayHour: ModelAppointmentAppointmentByDateAndExperimentCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentByDateAndExperiment(
      id: $id
      experimentIdDayHour: $experimentIdDayHour
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        day
        hour
        uuid
        email
        firstName
        lastName
        experimentId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const appointmentByDayAndExperiment = /* GraphQL */ `
  query AppointmentByDayAndExperiment(
    $day: String
    $experimentId: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentByDayAndExperiment(
      day: $day
      experimentId: $experimentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        day
        hour
        uuid
        email
        firstName
        lastName
        experimentId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const appointmentByUuid = /* GraphQL */ `
  query AppointmentByUuid(
    $uuid: String
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentByUuid(
      uuid: $uuid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        day
        hour
        uuid
        email
        firstName
        lastName
        experimentId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const subjectById = /* GraphQL */ `
  query SubjectById(
    $id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    subjectById(
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        students {
          email
          firstName
          lastName
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
