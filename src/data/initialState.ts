import { BuilderAppState } from "../reducers/ResumeReducer";

export const InitialState: BuilderAppState = {
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
    duration: '',
    schoolName: ''
  }
};