import { BuilderAppInterface } from "./Interfaces";

export const InitialBuilderState: BuilderAppInterface = {
  profile: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    address: {
      state: '',
      zip: '',
      city: '',
      country: '',
      street: '',
      apt: ''
    }
  },
  education: {
    id: '',
    city: '',
    country: '',
    duration: { from: '', to: '' },
    schoolName: ''
  },
  skills: [],
  courses: [],
  work: [],
  projects: [],
  temp: {}
};
