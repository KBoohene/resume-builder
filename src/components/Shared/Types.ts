export type InputInterface = {
  value: string,
  placeholder: string,
  type: InputType,
  label: string
}

export enum InputType {
  textarea,
  text,
  dropdown,
  date
}