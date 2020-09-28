import { BuilderAppInterface } from '../data/Interfaces';
const set = require('lodash/set');
const get = require('lodash/get');
const cloneDeep = require('lodash/cloneDeep');

interface PayloadValue {
  value?: string,
  path: string
}

interface Action {
  type: string
  payload: PayloadValue
}

export const ResumeReducer = (state: BuilderAppInterface, action: Action): BuilderAppInterface => {
  let newState: BuilderAppInterface | any;

  switch (action.type) {
    case 'on_input':
      newState = cloneDeep(state);
      set(newState, action.payload.path, action.payload.value);
      return newState;
    case 'on_input_temp':
      newState = cloneDeep(state);
      set(newState, 'temp.' + action.payload.path, action.payload.value);
      return newState;
    case 'on_add_item':
      const items = get(state, action.payload.path, []);
      newState = cloneDeep(state);
      const tempValues = state.temp;
      set(newState, action.payload.path, [...items, tempValues]);
      return newState;
    default:
      return state;
  }
}