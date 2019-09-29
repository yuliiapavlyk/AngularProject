import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormsModule, ReactiveFormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { IForm } from '../../interfaces/myform.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {
router:Router;
addFieldForm: FormGroup;
mainFormInfo:FormGroup;
formFields:IFormField[]=[];
newForm:IForm;

  constructor(private formBuilder: FormBuilder,
  private formService:FormService,
  private toastr:ToastrService) { }

  addField():void{
    const fieldInfo = {
      name:	this.addFieldForm.get('name').value,
      pattern:	this.addFieldForm.get('pattern').value,
      type : this.addFieldForm.get('type').value,
      placeholder:	this.addFieldForm.get('placeholder').value,
      formControl:	this.addFieldForm.get('formControl').value
    }
    this.formFields.push(fieldInfo);
    this.addFieldForm = this.formBuilder.group({
      name: [],
      pattern: [],
      type:[],
      placeholder:[],
      formControl:[]});
  }

  deleteField(deletingField:IFormField):void{
    this.formFields = this.formFields.filter(field=>{
      return field.name != deletingField.name;
    })
  }

  saveForm():void{
    const fieldInfo = {
      title:	this.mainFormInfo.get('title').value,
      background:	this.mainFormInfo.get('styles').value
    };
    this.newForm = {
      name: fieldInfo.title,
      background: fieldInfo.background,
      fields:this.formFields
    };
    console.log(this.newForm)
    this.formService.createForm(this.newForm).subscribe(
      res=>{
        this.formFields= [];
        this.toastr.success('Form '+fieldInfo.title + 'was created');
      },
      err=>{
        this.toastr.error('Try create form one more time');
      });
  }

  ngOnInit():void {
    this.addFieldForm = new FormGroup({
      name: new FormControl(null),
      pattern: new FormControl(null),
      type:new FormControl(null),
      placeholder:new FormControl(null),
      formControl:new FormControl(null)
   });

    this.mainFormInfo = new FormGroup({
      title: new FormControl(null),
      styles: new FormControl(null)
    });
  }

}
