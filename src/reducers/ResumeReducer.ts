export interface BuilderAppState {
  profile: {
    firstName: string,
    lastName: string,
    email: string
  }
}

interface Action {
  type: string
  payload: string
}

export const ResumeReducer = (state: BuilderAppState, action: Action): BuilderAppState => {
  switch (action.type) {
    case 'on_input':
      return { profile: { firstName: action.payload, lastName: action.payload, email: action.payload } }
    default:
      return state;
  }
}