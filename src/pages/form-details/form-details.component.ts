import { Component, OnInit, Output,  EventEmitter } from '@angular/core';
import { IGetForm} from 'src/interfaces/getmyform.model';
import {Store, select} from '@ngrx/store';
import * as formActions from '../../store/actions/myform.action';
import { Observable } from "rxjs";
import * as fromForms from "../../store/reducers/form.reducer";
import { FormService } from 'src/services/form.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.scss'],
  providers:[FormService]
})
export class FormDetailsComponent implements OnInit {
  editForms:boolean=false;
  forms$:Observable<IGetForm[]>;
  form$: Observable<IGetForm>;
  showDetail:boolean=false;
  formDetails:FormGroup;
  fieldPlaceholder:string;
  fieldType:string;
  fieldPattern:string;
  currentForm:IGetForm;
  newField:boolean=false;

  constructor(private store:Store<fromForms.AppState>, private fb:FormBuilder) { }


  ngOnInit() {
    this.store.dispatch(new formActions.LoadForms())
    const form$:Observable<IGetForm>=this.store.select(
      fromForms.getCurrentForm
    )
    this.forms$=this.store.pipe(select(fromForms.getForms))
    this.formDetails=this.fb.group({
      name:[' ', Validators.required],
      background:['', Validators.required],
      id:['', Validators.required],
      placeholder:[' '],
      pattern:['', Validators.required],
      fieldType:['', Validators.required]
    }),


    form$.subscribe(currentForm=>{
      if(currentForm){
        this.formDetails.patchValue({
          name:currentForm.name,
          background:currentForm.background,
          id:currentForm.id,
        })
      }
    });
  }

  showDetails(item:IGetForm){
    const openedForm:IGetForm={
      name:item.name,
      background:item.background,
      id:item.id,
      fields:item.fields
    };
    this.store.dispatch(new formActions.UpdateForm(openedForm));
    this.store.dispatch(new formActions.LoadForm(item.id));
    this.showDetail=!this.showDetail;
  }

  editForm(item:IGetForm){
    const openedForm:IGetForm={
      name:item.name,
      background:item.background,
      id:item.id,
    };
    this.store.dispatch(new formActions.UpdateForm(openedForm));
    this.store.dispatch(new formActions.LoadForm(item.id));
    this.currentForm=item;
    console.log(this.currentForm);
    this.editForms=!this.editForms;
  }

  updateForm(){
    const updatedForm:IGetForm={
      name:this.formDetails.get('name').value,
      background:this.formDetails.get('background').value,
      id:this.formDetails.get('id').value,
      fields:[{placeholder:this.formDetails.get('placeholder').value,
      pattern:this.formDetails.get('pattern').value,
      fieldType:this.formDetails.get('fieldType').value}]
    };
    for(let key of this.currentForm.fields){
      console.log(key.placeholder, key.pattern, key.fieldType);
      updatedForm.fields.push({placeholder: key.placeholder, pattern:key.pattern, fieldType:key.fieldType});
      console.log(updatedForm.fields);
    }
    this.store.dispatch(new formActions.UpdateForm(updatedForm));
    this.editForms=!this.editForms;
    this.newField=!this.newField;
  }


  deleteForm(item:IGetForm){
    this.store.dispatch(new formActions.DeleteForm(item.id));
  }
  addField(){
    this.newField=!this.newField;
  }
}
