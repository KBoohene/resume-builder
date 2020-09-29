type ProjectType = {
  title: string;
  durationFrom: string;
  durationTo: string;
  description: string;
};

type ProfileType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: {
    state: string;
    zip: string;
    city: string;
    country: string;
    street: string;
    apt: string;
  };
};

type EducationType = {
  id: string;
  schoolName: string;
  city: string;
  country: string;
  duration: { from: string; to: string };
};

export interface MultipleInputInterface {
  work: {};
  skill: string;
  course: {};
  project: {} | ProjectType;
}

export interface BuilderAppInterface {
  profile: ProfileType;
  education: EducationType;
  skills: string[];
  work: [];
  courses: [];
  projects: [];
}
