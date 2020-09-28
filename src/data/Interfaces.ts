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
  skills: [],
  work: [],
  courses: []
};
