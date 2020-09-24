export type InputInterface = {
  value: string,
  placeholder: string,
  type: InputType,
  label: string,
  path?: string
}

export enum InputType {
  textarea,
  text,
  dropdown,
  date,
  action
}
