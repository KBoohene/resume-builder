import { BuilderAppInterface, MultipleInputInterface } from "./Interfaces";

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
  projects: []
};

export const InitMultipleInputState: MultipleInputInterface = {
  work: {},
  skill: '',
  course: {},
  project: {}
}