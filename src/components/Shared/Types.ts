export type InputInterface = {
  value: string,
  placeholder: string,
  type: InputType,
  label?: string,
  path?: string
}

export type MultipleInputInterface = {
  type: InputType,
  path: string
}

export type AddItemButtonInterface = {
  childPath: string,
  parentPath: string,
  label: string
}

export enum InputType {
  textarea,
  text,
  dropdown,
  date,
  action
}
