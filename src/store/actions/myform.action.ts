import {Action} from '@ngrx/store';
import { IGetForm } from 'src/interfaces/getmyform.model';
import { Update } from "@ngrx/entity";


export enum FormActionType {
  LOAD_FORMS="[Form] Load Forms",
  LOAD_FORMS_SUCCESS="[Form] Load Forms Success",
  LOAD_FORMS_FAIL="[Form] Load Forms Fail",
  LOAD_FORM="[Form] Load Form",
  LOAD_FORM_SUCCESS="[Form] Load Form Success",
  LOAD_FORM_FAIL="[Form] Load Form Fail",
  CREATE_FORM="[Form] Create Form",
  CREATE_FORM_SUCCESS="[Form] Create Form Success",
  CREATE_FORM_FAIL="[Form] Create Form Fail",
  UPDATE_FORM="[Form] Update Form",
  UPDATE_FORM_SUCCESS="[Form] Update Form Success",
  UPDATE_FORM_FAIL="[Form] Update Form Fail",
  DELETE_FORM="[Form] Delete Form",
  DELETE_FORM_SUCCESS="[Form] Delete Form Success",
  DELETE_FORM_FAIL="[Form] Delete Form Fail",
}

export class LoadForms implements Action{
  readonly type = FormActionType.LOAD_FORMS
}

export class LoadFormsSuccess implements Action{
  readonly type = FormActionType.LOAD_FORMS_SUCCESS

  constructor(public payload:IGetForm[]){
  }
}

export class LoadFormsFail implements Action{
  readonly type = FormActionType.LOAD_FORMS_FAIL
  constructor(public payload:string){
  }
}

export class LoadForm implements Action{
  readonly type = FormActionType.LOAD_FORM
  constructor(public payload:number){

  }
}

export class LoadFormSuccess implements Action{
  readonly type = FormActionType.LOAD_FORM_SUCCESS

  constructor(public payload:IGetForm){
  }
}

export class LoadFormFail implements Action{
  readonly type = FormActionType.LOAD_FORM_FAIL
  constructor(public payload:string){
  }
}

export class CreateForm implements Action{
  readonly type = FormActionType.CREATE_FORM
  constructor(public payload:IGetForm){

  }
}

export class CreateFormSuccess implements Action{
  readonly type = FormActionType.CREATE_FORM_SUCCESS

  constructor(public payload:IGetForm){
  }
}

export class CreateFormFail implements Action{
  readonly type = FormActionType.CREATE_FORM_FAIL
  constructor(public payload:string){
  }
}

export class UpdateForm implements Action{
  readonly type = FormActionType.UPDATE_FORM
  constructor(public payload:IGetForm){

  }
}

export class UpdateFormSuccess implements Action{
  readonly type = FormActionType.UPDATE_FORM_SUCCESS

  constructor(public payload:Update<IGetForm>){
  }
}

export class UpdateFormFail implements Action{
  readonly type = FormActionType.UPDATE_FORM_FAIL
  constructor(public payload:string){
  }
}

export class DeleteForm implements Action{
  readonly type = FormActionType.DELETE_FORM
  constructor(public payload:number){

  }
}

export class DeleteFormSuccess implements Action{
  readonly type = FormActionType.DELETE_FORM_SUCCESS

  constructor(public payload:number){
  }
}

export class DeleteFormFail implements Action{
  readonly type = FormActionType.DELETE_FORM_FAIL
  constructor(public payload:string){
  }
}
export type Action =
LoadForms|LoadFormsSuccess|LoadFormsFail|
LoadForm|LoadFormSuccess|LoadFormFail|
CreateForm|CreateFormSuccess|CreateFormFail|
UpdateForm|UpdateFormSuccess|UpdateFormFail|
DeleteForm|DeleteFormSuccess|DeleteFormFail
;
