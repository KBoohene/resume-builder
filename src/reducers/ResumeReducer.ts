import { ResumeInterface } from '../data/Interfaces';
const set = require('lodash/set');
const get = require('lodash/get');
const cloneDeep = require('lodash/cloneDeep');

interface PayloadValue {
  value?: string;
  path: string;
}

interface Action {
  type: string;
  payload: PayloadValue;
}

export const ResumeReducer = (
  state: ResumeInterface,
  action: Action
): ResumeInterface => {
  let newState: ResumeInterface | any;

  switch (action.type) {
    case 'on_input':
      newState = cloneDeep(state);
      set(newState, action.payload.path, action.payload.value);
      return newState;
    case 'on_add_item':
      newState = cloneDeep(state);
      const items = get(state, action.payload.path, []);
      set(newState, action.payload.path, [...items, action.payload.value]);
      return newState;
    default:
      return state;
  }
};
