/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAppointment = /* GraphQL */ `
  mutation CreateAppointment(
    $input: CreateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    createAppointment(input: $input, condition: $condition) {
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
export const updateAppointment = /* GraphQL */ `
  mutation UpdateAppointment(
    $input: UpdateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    updateAppointment(input: $input, condition: $condition) {
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
export const deleteAppointment = /* GraphQL */ `
  mutation DeleteAppointment(
    $input: DeleteAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    deleteAppointment(input: $input, condition: $condition) {
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
export const createAppointmentTaken = /* GraphQL */ `
  mutation CreateAppointmentTaken(
    $input: CreateAppointmentTakenInput!
    $condition: ModelAppointmentTakenConditionInput
  ) {
    createAppointmentTaken(input: $input, condition: $condition) {
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
export const updateAppointmentTaken = /* GraphQL */ `
  mutation UpdateAppointmentTaken(
    $input: UpdateAppointmentTakenInput!
    $condition: ModelAppointmentTakenConditionInput
  ) {
    updateAppointmentTaken(input: $input, condition: $condition) {
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
export const deleteAppointmentTaken = /* GraphQL */ `
  mutation DeleteAppointmentTaken(
    $input: DeleteAppointmentTakenInput!
    $condition: ModelAppointmentTakenConditionInput
  ) {
    deleteAppointmentTaken(input: $input, condition: $condition) {
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
export const createSubject = /* GraphQL */ `
  mutation CreateSubject(
    $input: CreateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    createSubject(input: $input, condition: $condition) {
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
export const updateSubject = /* GraphQL */ `
  mutation UpdateSubject(
    $input: UpdateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    updateSubject(input: $input, condition: $condition) {
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
export const deleteSubject = /* GraphQL */ `
  mutation DeleteSubject(
    $input: DeleteSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    deleteSubject(input: $input, condition: $condition) {
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
export const createConfig = /* GraphQL */ `
  mutation CreateConfig(
    $input: CreateConfigInput!
    $condition: ModelConfigConditionInput
  ) {
    createConfig(input: $input, condition: $condition) {
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
export const updateConfig = /* GraphQL */ `
  mutation UpdateConfig(
    $input: UpdateConfigInput!
    $condition: ModelConfigConditionInput
  ) {
    updateConfig(input: $input, condition: $condition) {
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
export const deleteConfig = /* GraphQL */ `
  mutation DeleteConfig(
    $input: DeleteConfigInput!
    $condition: ModelConfigConditionInput
  ) {
    deleteConfig(input: $input, condition: $condition) {
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
