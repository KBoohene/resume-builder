const set = require('lodash/set');
const get = require('lodash/get');
const cloneDeep = require('lodash/cloneDeep');

export interface BuilderAppState {
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
}

interface PayloadValue {
  value: string,
  path: string
}

interface Action {
  type: string
  payload: PayloadValue
}

export const ResumeReducer = (state: BuilderAppState, action: Action): BuilderAppState => {
  let newState: BuilderAppState | any;

  switch (action.type) {
    case 'on_input':
      newState = cloneDeep(state);
      set(newState, action.payload.path, action.payload.value);
      return newState;
    case 'on_add_item':
      const items = get(state, action.payload.path, []);
      newState = cloneDeep(state);
      set(newState, action.payload.path, [...items, action.payload.value]);
      return newState;
    default:
      return state;
  }
}