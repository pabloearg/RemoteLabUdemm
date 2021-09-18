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
      classes
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
        classes
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
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
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
export const listClasss = /* GraphQL */ `
  query ListClasss(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasss(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        classes
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
export const appointmentByEmail = /* GraphQL */ `
  query AppointmentByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentByEmail(
      email: $email
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
export const classById = /* GraphQL */ `
  query ClassById(
    $id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    classById(
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
