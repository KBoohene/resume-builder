interface PayloadValue {
  value: string;
}

interface Action {
  type: string;
  payload: PayloadValue;
}

export interface BuilderAppInterface {
  section: string;
}

export const BuilderReducer = (
  state: BuilderAppInterface,
  action: Action
): BuilderAppInterface => {
  switch (action.type) {
    case 'change_section':
      return { section: action.payload.value };
    default:
      return state;
  }
};
