/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment {
    onCreateAppointment {
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
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment {
    onUpdateAppointment {
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
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment {
    onDeleteAppointment {
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
export const onCreateAppointmentTaken = /* GraphQL */ `
  subscription OnCreateAppointmentTaken {
    onCreateAppointmentTaken {
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
export const onUpdateAppointmentTaken = /* GraphQL */ `
  subscription OnUpdateAppointmentTaken {
    onUpdateAppointmentTaken {
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
export const onDeleteAppointmentTaken = /* GraphQL */ `
  subscription OnDeleteAppointmentTaken {
    onDeleteAppointmentTaken {
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
export const onCreateSubject = /* GraphQL */ `
  subscription OnCreateSubject {
    onCreateSubject {
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
export const onUpdateSubject = /* GraphQL */ `
  subscription OnUpdateSubject {
    onUpdateSubject {
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
export const onDeleteSubject = /* GraphQL */ `
  subscription OnDeleteSubject {
    onDeleteSubject {
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
export const onCreateConfig = /* GraphQL */ `
  subscription OnCreateConfig {
    onCreateConfig {
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
export const onUpdateConfig = /* GraphQL */ `
  subscription OnUpdateConfig {
    onUpdateConfig {
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
export const onDeleteConfig = /* GraphQL */ `
  subscription OnDeleteConfig {
    onDeleteConfig {
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
