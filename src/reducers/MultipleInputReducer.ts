import { InitMultipleInputState } from '../data/AppStates';
import { MultipleInputInterface } from '../data/Interfaces';
const set = require('lodash/set');
const cloneDeep = require('lodash/cloneDeep');

interface PayloadValue {
  value?: string,
  path: string
}

interface Action {
  type: string
  payload?: PayloadValue
}

export const MultipleInputReducer = (state: MultipleInputInterface, action: Action): MultipleInputInterface => {
  let newState: MultipleInputInterface | any;

  switch (action.type) {
    case 'on_input':
      newState = cloneDeep(state);
      if (action.payload) {
        set(newState, action.payload.path, action.payload.value);
      }
      return newState;
    case 'clear':
      newState = InitMultipleInputState;
      return newState;
    default:
      return state;
  }
}