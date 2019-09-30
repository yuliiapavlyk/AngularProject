import { IUser } from "./user";

export interface IForm {
name: string,
id?:number,
background: string,
fields:IFormField[]
}

