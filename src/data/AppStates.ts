import { BuilderAppInterface } from "./Interfaces";

export const InitialBuilderState: BuilderAppInterface = {
  profile: {
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
    city: '',
    country: '',
    duration: { from: '', to: '' },
    schoolName: ''
  },
  skills: [],
  courses: [],
  work: []
};
