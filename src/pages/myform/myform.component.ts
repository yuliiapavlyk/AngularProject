import { Component, OnInit } from '@angular/core';
import{FormService} from '../../services/form.service'
import { Form } from '@angular/forms';
import { IForm } from 'src/interfaces/myform.model';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
  providers:[FormService]
})
export class MyformComponent implements OnInit {
// form:IForm[]=[];
forms;
  constructor(private formService:FormService, private store:Store<any>) {}
  ngOnInit() {
    this.store.dispatch({type:'LOAD_FORMS'})
    this.store.subscribe(state=>(this.forms=state.forms.forms))
  }

  // private getForms(param = {}) {
  //   this.formService.getForm(param)
  //   .subscribe((res) => {
  //     this.form= res;
  //     console.log(res);
  //   },
  //   err => {
  //     console.log(err);
  //   });
  //  }

addNewForm(){

}

Option(value:number){
  switch(value){
    case 1:
      //to do
      break;
    case 2:
      //to do
      break;
    case 3:
      //to do
      break;
    case 4:
      //to do
      break;
    case 5:
          //to do
      break;
  }
}

}
