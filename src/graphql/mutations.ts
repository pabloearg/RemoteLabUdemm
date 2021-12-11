/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserRL = /* GraphQL */ `
  mutation CreateUserRL(
    $input: CreateUserRLInput!
    $condition: ModelUserRLConditionInput
  ) {
    createUserRL(input: $input, condition: $condition) {
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
export const updateUserRL = /* GraphQL */ `
  mutation UpdateUserRL(
    $input: UpdateUserRLInput!
    $condition: ModelUserRLConditionInput
  ) {
    updateUserRL(input: $input, condition: $condition) {
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
export const deleteUserRL = /* GraphQL */ `
  mutation DeleteUserRL(
    $input: DeleteUserRLInput!
    $condition: ModelUserRLConditionInput
  ) {
    deleteUserRL(input: $input, condition: $condition) {
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
export const createAppointmentRL = /* GraphQL */ `
  mutation CreateAppointmentRL(
    $input: CreateAppointmentRLInput!
    $condition: ModelAppointmentRLConditionInput
  ) {
    createAppointmentRL(input: $input, condition: $condition) {
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
export const updateAppointmentRL = /* GraphQL */ `
  mutation UpdateAppointmentRL(
    $input: UpdateAppointmentRLInput!
    $condition: ModelAppointmentRLConditionInput
  ) {
    updateAppointmentRL(input: $input, condition: $condition) {
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
export const deleteAppointmentRL = /* GraphQL */ `
  mutation DeleteAppointmentRL(
    $input: DeleteAppointmentRLInput!
    $condition: ModelAppointmentRLConditionInput
  ) {
    deleteAppointmentRL(input: $input, condition: $condition) {
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
export const createAppointmentTakenRL = /* GraphQL */ `
  mutation CreateAppointmentTakenRL(
    $input: CreateAppointmentTakenRLInput!
    $condition: ModelAppointmentTakenRLConditionInput
  ) {
    createAppointmentTakenRL(input: $input, condition: $condition) {
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
export const updateAppointmentTakenRL = /* GraphQL */ `
  mutation UpdateAppointmentTakenRL(
    $input: UpdateAppointmentTakenRLInput!
    $condition: ModelAppointmentTakenRLConditionInput
  ) {
    updateAppointmentTakenRL(input: $input, condition: $condition) {
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
export const deleteAppointmentTakenRL = /* GraphQL */ `
  mutation DeleteAppointmentTakenRL(
    $input: DeleteAppointmentTakenRLInput!
    $condition: ModelAppointmentTakenRLConditionInput
  ) {
    deleteAppointmentTakenRL(input: $input, condition: $condition) {
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
export const createAppointmentStudentRL = /* GraphQL */ `
  mutation CreateAppointmentStudentRL(
    $input: CreateAppointmentStudentRLInput!
    $condition: ModelAppointmentStudentRLConditionInput
  ) {
    createAppointmentStudentRL(input: $input, condition: $condition) {
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
export const updateAppointmentStudentRL = /* GraphQL */ `
  mutation UpdateAppointmentStudentRL(
    $input: UpdateAppointmentStudentRLInput!
    $condition: ModelAppointmentStudentRLConditionInput
  ) {
    updateAppointmentStudentRL(input: $input, condition: $condition) {
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
export const deleteAppointmentStudentRL = /* GraphQL */ `
  mutation DeleteAppointmentStudentRL(
    $input: DeleteAppointmentStudentRLInput!
    $condition: ModelAppointmentStudentRLConditionInput
  ) {
    deleteAppointmentStudentRL(input: $input, condition: $condition) {
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
export const createSubjectRL = /* GraphQL */ `
  mutation CreateSubjectRL(
    $input: CreateSubjectRLInput!
    $condition: ModelSubjectRLConditionInput
  ) {
    createSubjectRL(input: $input, condition: $condition) {
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
export const updateSubjectRL = /* GraphQL */ `
  mutation UpdateSubjectRL(
    $input: UpdateSubjectRLInput!
    $condition: ModelSubjectRLConditionInput
  ) {
    updateSubjectRL(input: $input, condition: $condition) {
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
export const deleteSubjectRL = /* GraphQL */ `
  mutation DeleteSubjectRL(
    $input: DeleteSubjectRLInput!
    $condition: ModelSubjectRLConditionInput
  ) {
    deleteSubjectRL(input: $input, condition: $condition) {
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
export const createConfigRL = /* GraphQL */ `
  mutation CreateConfigRL(
    $input: CreateConfigRLInput!
    $condition: ModelConfigRLConditionInput
  ) {
    createConfigRL(input: $input, condition: $condition) {
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
export const updateConfigRL = /* GraphQL */ `
  mutation UpdateConfigRL(
    $input: UpdateConfigRLInput!
    $condition: ModelConfigRLConditionInput
  ) {
    updateConfigRL(input: $input, condition: $condition) {
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
export const deleteConfigRL = /* GraphQL */ `
  mutation DeleteConfigRL(
    $input: DeleteConfigRLInput!
    $condition: ModelConfigRLConditionInput
  ) {
    deleteConfigRL(input: $input, condition: $condition) {
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
