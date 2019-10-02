import { IUser } from "./user";
import { IFormField } from './form-field.model';

export interface IForm {
name: string,
id?:number,
background: string,
fields?:  IFormField[];
}
