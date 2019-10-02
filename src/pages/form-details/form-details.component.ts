import { Component, OnInit, Output,  EventEmitter } from '@angular/core';
import { IForm } from 'src/interfaces/myform.model';
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
  forms$:Observable<IForm[]>;
  form$: Observable<IForm>;
  showDetail:boolean=false;
  formDetails:FormGroup;
  fieldPlaceholder:string;
  fieldType:string;
  fieldPattern:string;
  currentForm:IForm;
  newField:boolean=false;

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
      placeholder:[' '],
      pattern:['', Validators.required],
      type:['', Validators.required]
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

  showDetails(item:IForm){
    const openedForm:IForm={
      name:item.name,
      background:item.background,
      id:item.id,
      fields:item.fields
    };
    this.store.dispatch(new formActions.UpdateForm(openedForm));
    this.store.dispatch(new formActions.LoadForm(item.id));
    this.showDetail=!this.showDetail;
  }

  editForm(item:IForm){
    const openedForm:IForm={
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
    const updatedForm:IForm={
      name:this.formDetails.get('name').value,
      background:this.formDetails.get('background').value,
      id:this.formDetails.get('id').value,
      fields:[{placeholder:this.formDetails.get('placeholder').value,
      pattern:this.formDetails.get('pattern').value,
      type:this.formDetails.get('type').value}]
    };
    for(let key of this.currentForm.fields){
      console.log(key.placeholder, key.pattern, key.type);
      updatedForm.fields.push({placeholder: key.placeholder, pattern:key.pattern, type:key.type});
      console.log(updatedForm.fields);
    }
    this.store.dispatch(new formActions.UpdateForm(updatedForm));
    this.editForms=!this.editForms;
    this.newField=!this.newField;
  }


  deleteForm(item:IForm){
    this.store.dispatch(new formActions.DeleteForm(item.id));
  }
  addField(){
    this.newField=!this.newField;
  }
}
