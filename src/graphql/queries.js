// @flow
// this is an auto generated file. This will be overwritten

export const getUserRL = /* GraphQL */ `
  query GetUserRL($id: ID!) {
    getUserRL(id: $id) {
      email
      id
      firstName
      lastName
      filedId
      quantityViolations
      cleanDate
      type
      subjects
      appointments
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUserRLs = /* GraphQL */ `
  query ListUserRLs(
    $filter: ModelUserRLFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserRLs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        email
        id
        firstName
        lastName
        filedId
        quantityViolations
        cleanDate
        type
        subjects
        appointments
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAppointmentRL = /* GraphQL */ `
  query GetAppointmentRL($id: ID!) {
    getAppointmentRL(id: $id) {
      id
      day
      hour
      uuid
      isTaken
      experimentId
      createdAt
      updatedAt
    }
  }
`;
export const listAppointmentRLs = /* GraphQL */ `
  query ListAppointmentRLs(
    $filter: ModelAppointmentRLFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointmentRLs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        day
        hour
        uuid
        isTaken
        experimentId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAppointmentTakenRL = /* GraphQL */ `
  query GetAppointmentTakenRL($email: String!) {
    getAppointmentTakenRL(email: $email) {
      email
      day
      hour
      uuid
      firstName
      lastName
      experimentId
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAppointmentTakenRLs = /* GraphQL */ `
  query ListAppointmentTakenRLs(
    $email: String
    $filter: ModelAppointmentTakenRLFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAppointmentTakenRLs(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        day
        hour
        uuid
        firstName
        lastName
        experimentId
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAppointmentStudentRL = /* GraphQL */ `
  query GetAppointmentStudentRL($email: String!, $uuid: String!) {
    getAppointmentStudentRL(email: $email, uuid: $uuid) {
      email
      day
      hour
      uuid
      firstName
      lastName
      experimentId
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAppointmentStudentRLs = /* GraphQL */ `
  query ListAppointmentStudentRLs(
    $email: String
    $uuid: ModelStringKeyConditionInput
    $filter: ModelAppointmentStudentRLFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAppointmentStudentRLs(
      email: $email
      uuid: $uuid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        day
        hour
        uuid
        firstName
        lastName
        experimentId
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSubjectRL = /* GraphQL */ `
  query GetSubjectRL($id: ID!) {
    getSubjectRL(id: $id) {
      id
      name
      students {
        email
        firstName
        lastName
      }
      periodBlock
      university
      createdAt
      updatedAt
    }
  }
`;
export const listSubjectRLs = /* GraphQL */ `
  query ListSubjectRLs(
    $filter: ModelSubjectRLFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjectRLs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        students {
          email
          firstName
          lastName
        }
        periodBlock
        university
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConfigRL = /* GraphQL */ `
  query GetConfigRL($id: ID!) {
    getConfigRL(id: $id) {
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
export const listConfigRLs = /* GraphQL */ `
  query ListConfigRLs(
    $filter: ModelConfigRLFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConfigRLs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    $filter: ModelUserRLFilterInput
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
        email
        id
        firstName
        lastName
        filedId
        quantityViolations
        cleanDate
        type
        subjects
        appointments
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const appointmentByDayAndExperimentUserless = /* GraphQL */ `
  query AppointmentByDayAndExperimentUserless(
    $day: String
    $experimentIdIsTaken: ModelAppointmentRLAppointmentByDayAndExperimentUserlessCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentRLFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentByDayAndExperimentUserless(
      day: $day
      experimentIdIsTaken: $experimentIdIsTaken
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
        isTaken
        experimentId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const appointmentByUuidUserless = /* GraphQL */ `
  query AppointmentByUuidUserless(
    $uuid: String
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentRLFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentByUuidUserless(
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
        isTaken
        experimentId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getByStatus = /* GraphQL */ `
  query GetByStatus(
    $status: String
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentTakenRLFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        email
        day
        hour
        uuid
        firstName
        lastName
        experimentId
        status
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
    $experimentId: String
    $dayHour: ModelAppointmentTakenRLAppointmentByDateAndExperimentCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentTakenRLFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentByDateAndExperiment(
      experimentId: $experimentId
      dayHour: $dayHour
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        email
        day
        hour
        uuid
        firstName
        lastName
        experimentId
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getByUuid = /* GraphQL */ `
  query GetByUuid(
    $uuid: String
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentTakenRLFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getByUuid(
      uuid: $uuid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        email
        day
        hour
        uuid
        firstName
        lastName
        experimentId
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAppointmentByStatus = /* GraphQL */ `
  query GetAppointmentByStatus(
    $status: String
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentStudentRLFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getAppointmentByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        email
        day
        hour
        uuid
        firstName
        lastName
        experimentId
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAppointmentByDateAndExperiment = /* GraphQL */ `
  query GetAppointmentByDateAndExperiment(
    $experimentId: String
    $dayHour: ModelAppointmentStudentRLByDateAndExperimentCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentStudentRLFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getAppointmentByDateAndExperiment(
      experimentId: $experimentId
      dayHour: $dayHour
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        email
        day
        hour
        uuid
        firstName
        lastName
        experimentId
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAppointmentByUuid = /* GraphQL */ `
  query GetAppointmentByUuid(
    $uuid: String
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentStudentRLFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getAppointmentByUuid(
      uuid: $uuid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        email
        day
        hour
        uuid
        firstName
        lastName
        experimentId
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const subjectById = /* GraphQL */ `
  query SubjectById(
    $id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelSubjectRLFilterInput
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
        periodBlock
        university
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
