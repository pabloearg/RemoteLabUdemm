/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserRL = /* GraphQL */ `
  subscription OnCreateUserRL {
    onCreateUserRL {
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
export const onUpdateUserRL = /* GraphQL */ `
  subscription OnUpdateUserRL {
    onUpdateUserRL {
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
export const onDeleteUserRL = /* GraphQL */ `
  subscription OnDeleteUserRL {
    onDeleteUserRL {
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
export const onCreateAppointmentRL = /* GraphQL */ `
  subscription OnCreateAppointmentRL {
    onCreateAppointmentRL {
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
export const onUpdateAppointmentRL = /* GraphQL */ `
  subscription OnUpdateAppointmentRL {
    onUpdateAppointmentRL {
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
export const onDeleteAppointmentRL = /* GraphQL */ `
  subscription OnDeleteAppointmentRL {
    onDeleteAppointmentRL {
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
export const onCreateAppointmentTakenRL = /* GraphQL */ `
  subscription OnCreateAppointmentTakenRL {
    onCreateAppointmentTakenRL {
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
export const onUpdateAppointmentTakenRL = /* GraphQL */ `
  subscription OnUpdateAppointmentTakenRL {
    onUpdateAppointmentTakenRL {
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
export const onDeleteAppointmentTakenRL = /* GraphQL */ `
  subscription OnDeleteAppointmentTakenRL {
    onDeleteAppointmentTakenRL {
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
export const onCreateAppointmentStudentRL = /* GraphQL */ `
  subscription OnCreateAppointmentStudentRL {
    onCreateAppointmentStudentRL {
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
export const onUpdateAppointmentStudentRL = /* GraphQL */ `
  subscription OnUpdateAppointmentStudentRL {
    onUpdateAppointmentStudentRL {
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
export const onDeleteAppointmentStudentRL = /* GraphQL */ `
  subscription OnDeleteAppointmentStudentRL {
    onDeleteAppointmentStudentRL {
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
export const onCreateSubjectRL = /* GraphQL */ `
  subscription OnCreateSubjectRL {
    onCreateSubjectRL {
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
export const onUpdateSubjectRL = /* GraphQL */ `
  subscription OnUpdateSubjectRL {
    onUpdateSubjectRL {
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
export const onDeleteSubjectRL = /* GraphQL */ `
  subscription OnDeleteSubjectRL {
    onDeleteSubjectRL {
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
export const onCreateConfigRL = /* GraphQL */ `
  subscription OnCreateConfigRL {
    onCreateConfigRL {
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
export const onUpdateConfigRL = /* GraphQL */ `
  subscription OnUpdateConfigRL {
    onUpdateConfigRL {
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
export const onDeleteConfigRL = /* GraphQL */ `
  subscription OnDeleteConfigRL {
    onDeleteConfigRL {
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
