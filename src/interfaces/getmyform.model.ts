import { IUser } from "./user";
import { IFields } from './fields.model';

export interface IGetForm {
name: string,
id?:number,
background: string,
fields?: IFields[]
}
