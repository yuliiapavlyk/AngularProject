import { IUser } from "./user";
import { IFields } from './fields.model';

export interface IForm {
name: string,
id?:number,
background: string,
fields?: IFields[]
}
