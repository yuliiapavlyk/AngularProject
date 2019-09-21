import { Component, OnInit } from '@angular/core';
import{FormService} from '../../services/form.service'
import { Form } from '@angular/forms';
import { IForm } from 'src/interfaces/myform.model';
import {Store, select} from '@ngrx/store';
import * as formActions from '../../store/actions/myform.action';
import { Observable } from "rxjs";
import * as fromForms from "../../store/reducers/form.reducer";


@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
  providers:[FormService]
})
export class MyformComponent implements OnInit {
forms$:Observable<IForm[]>;
  constructor(private formService:FormService, private store:Store<fromForms.AppState>) {}
  ngOnInit() {
    this.store.dispatch(new formActions.LoadForms())
   this.forms$=this.store.pipe(select(fromForms.getForms))
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
