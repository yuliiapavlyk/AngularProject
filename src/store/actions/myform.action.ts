import {Action} from '@ngrx/store';
import { IForm } from 'src/interfaces/myform.model';


export enum FormActionType {
  LOAD_FORMS="[Form] LoadForm",
  LOAD_FORMS_SUCCESS="[Form] LoadForm Success",
  LOAD_FORMS_FAIL="[Form] LoadForm Fail",
}

export class LoadForms implements Action{
  readonly type = FormActionType.LOAD_FORMS
}

export class LoadFormsSuccess implements Action{
  readonly type = FormActionType.LOAD_FORMS_SUCCESS

  constructor(public payload:IForm[]){
  }
}


export class LoadFormsFail implements Action{
  readonly type = FormActionType.LOAD_FORMS_FAIL
  constructor(public payload:string){
  }
}

export type Action = LoadForms|LoadFormsSuccess|LoadFormsFail;
