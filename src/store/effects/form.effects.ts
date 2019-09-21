import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { FormService } from 'src/services/form.service';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import {map, mergeMap, catchError} from 'rxjs/operators';
import * as formsActions from '../actions/myform.action';
import { IForm } from 'src/interfaces/myform.model';

@Injectable()
export class FormsEffect{

  constructor(private actions$:Actions,
    private formService:FormService){}

@Effect()
loadForms$:Observable<Action>=this.actions$.pipe(
  ofType<formsActions.LoadForms>(
    formsActions.FormActionType.LOAD_FORMS
  ),
  mergeMap((actions:formsActions.LoadForms)=>
  this.formService.getForm().pipe(
    map((forms:IForm[])=>
    new formsActions.LoadFormsSuccess(forms)
    ),
    catchError(err=>of(new formsActions.LoadFormsFail(err)))
  ))
);

@Effect()
loadForm$:Observable<Action>=this.actions$.pipe(
  ofType<formsActions.LoadForm>(
    formsActions.FormActionType.LOAD_FORM
  ),
  mergeMap((action:formsActions.LoadForm)=>
  this.formService.getFormById(action.payload).pipe(
    map((form:IForm)=>
    new formsActions.LoadFormSuccess(form)
    ),
    catchError(err=>of(new formsActions.LoadFormFail(err)))
  ))
);

@Effect()
createForm$:Observable<Action>=this.actions$.pipe(
  ofType<formsActions.CreateForm>(
    formsActions.FormActionType.CREATE_FORM
  ),
  map((action:formsActions.CreateForm)=>action.payload),
  mergeMap((form:IForm)=>
  this.formService.createForm(form).pipe(
    map((newForm:IForm)=>
    new formsActions.CreateFormSuccess(newForm)
    ),
    catchError(err=>of(new formsActions.CreateFormFail(err)))
  ))
);
@Effect()
updateForm$:Observable<Action>=this.actions$.pipe(
  ofType<formsActions.UpdateForm>(
    formsActions.FormActionType.UPDATE_FORM
  ),
  map((action:formsActions.UpdateForm)=>action.payload),
  mergeMap((form:IForm)=>
  this.formService.updateForm(form).pipe(
    map((updateForm:IForm)=>
    new formsActions.UpdateFormSuccess(
      {id:updateForm.id,
       changes:updateForm
    })
    ),
    catchError(err=>of(new formsActions.UpdateFormFail(err)))
  ))
);
@Effect()
deleteForm$:Observable<Action>=this.actions$.pipe(
  ofType<formsActions.DeleteForm>(
    formsActions.FormActionType.DELETE_FORM
  ),
  map((action:formsActions.DeleteForm)=>action.payload),
  mergeMap((id:number)=>
  this.formService.deleteForm(id).pipe(
    map(()=>new formsActions.DeleteFormSuccess(id)
    ),
    catchError(err=>of(new formsActions.DeleteFormFail(err)))
  ))
);
}
