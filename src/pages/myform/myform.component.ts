import { Component, OnInit } from '@angular/core';
import{FormService} from '../../services/form.service'
import { Form } from '@angular/forms';
import { IForm } from 'src/interfaces/myform.model';
import {Store, select} from '@ngrx/store';
import * as formActions from '../../store/actions/myform.action';
import { Observable } from "rxjs";
import * as fromForms from "../../store/reducers/form.reducer";
import { Router } from '@angular/router';



@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
  providers:[FormService]
})
export class MyformComponent implements OnInit {
forms$:Observable<IForm[]>;
public curId:number;
  constructor(private formService:FormService, private store:Store<fromForms.AppState>,
    private router:Router) {}
  ngOnInit() {
    this.store.dispatch(new formActions.LoadForms())
    this.forms$=this.store.pipe(select(fromForms.getForms))
  }

  formDetail(item:IForm){
    this.router.navigate(['form-details']);
    this.curId=item.id;
    console.log(item.id);
    return item.id;
  }
addNewForm(){

}

Option(value:number){
  switch(value){
    case 1:
      // let form:IForm;
      // this.router.navigate(['form-details']);
      //  console.log(this.store.dispatch(new formActions.LoadForm(form.name)));
      //  this.store.dispatch(new formActions.LoadForm(form.name));
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
