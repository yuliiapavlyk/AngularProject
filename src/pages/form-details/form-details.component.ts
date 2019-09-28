import { Component, OnInit, Output,  EventEmitter } from '@angular/core';
import { IForm } from 'src/interfaces/myform.model';
import {Store, select} from '@ngrx/store';
import * as formActions from '../../store/actions/myform.action';
import { Observable } from "rxjs";
import * as fromForms from "../../store/reducers/form.reducer";
import { Router } from '@angular/router';
import { FormService } from 'src/services/form.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MyformComponent} from '../myform/myform.component';
import { IFields } from 'src/interfaces/fields.model';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.scss'],
  providers:[FormService]
})
export class FormDetailsComponent implements OnInit {
  @Output() onChanged = new EventEmitter<boolean>();
  editForms:boolean=false;
  forms$:Observable<IForm[]>;
  form$: Observable<IForm>;
  showDetail:boolean=false;
  formDetails:FormGroup;

  constructor(private store:Store<fromForms.AppState>, private fb:FormBuilder) { }


  ngOnInit() {
    this.store.dispatch(new formActions.LoadForms())
    const form$:Observable<IForm>=this.store.select(
      fromForms.getCurrentForm
    )
    this.forms$=this.store.pipe(select(fromForms.getForms))
    this.formDetails=this.fb.group({
      name:[' ', Validators.required],
      background:['', Validators.required],
      id:['', Validators.required],
      fields:[' ']
    })

    form$.subscribe(currentForm=>{
      if(currentForm){
        this.formDetails.patchValue({
          name:currentForm.name,
          background:currentForm.background,
          id:currentForm.id,
          fields:currentForm.fields
        })
      }
    });
  }

  ShowDetails(item:IForm){
    const openedForm:IForm={
      name:item.name,
      background:item.background,
      id:item.id,
      fields:item.fields
    };
    this.store.dispatch(new formActions.UpdateForm(openedForm));
    this.showDetail=!this.showDetail;
    this.store.dispatch(new formActions.LoadForms());
    this.editForms=false;

  }

  editForm(item:IForm){
  this.store.dispatch(new formActions.LoadForm(item.id));
    this.editForms=!this.editForms;
  }

  updateForm(){
    const updatedForm:IForm={
      name:this.formDetails.get('name').value,
      background:this.formDetails.get('background').value,
      id:this.formDetails.get('id').value,
      fields:this.formDetails.get('fields').value
    };
    this.store.dispatch(new formActions.UpdateForm(updatedForm));
    this.editForms=!this.editForms;
  }


  deleteForm(item:IForm){
    this.store.dispatch(new formActions.DeleteForm(item.id));
  }
}
