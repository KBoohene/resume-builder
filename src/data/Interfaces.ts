export interface ActionInputInterface {
  work?: {
    role: string,
    companyName: string,
    durationFrom: string,
    durationTo: string,
    description: string,
    location: string
  },
  relevantCourse?: string,
  skill?: string,
  project?: {
    title: string,
    durationFrom: string,
    durationTo: string,
    description: string
  }
};

export interface BuilderAppInterface {
  profile: {
    firstName: string,
    lastName: string,
    email: string,
    address: {
      state: string,
      zip: string,
      city: string,
      country: string,
      street: string,
      apt: string
    }
  },
  education: {
    schoolName: string,
    city: string,
    country: string,
    duration: { from: string, to: string }
  },
  skills: []
};
