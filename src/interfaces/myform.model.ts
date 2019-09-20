import { IUser } from "./user";

export interface IForm {
name: string,
backgroung: string,
fields: [
  {
    placeholder: string,
    pattern: number,
    fieldType: number
  },
  {
    placeholder: string,
      pattern: number,
      fieldType: number
  }
]
}
