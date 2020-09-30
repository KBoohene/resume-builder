import { ResumeInterface, MultipleInputInterface } from './Interfaces';

export const InitialBuilderState: ResumeInterface = {
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
      apt: '',
    },
  },
  education: {
    id: '',
    city: '',
    country: '',
    duration: { from: '', to: '' },
    schoolName: '',
  },
  skills: [],
  courses: [],
  work: [],
  projects: [],
};

export const InitMultipleInputState: MultipleInputInterface = {
  work: {
    description: '',
    duration: { from: '', to: '' },
    role: '',
    address: { country: '', city: '' },
    company: '',
  },
  skill: '',
  course: '',
  project: { title: '', duration: { from: '', to: '' }, description: '' },
};
