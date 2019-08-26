import { Component, OnInit } from '@angular/core';
import{FormService} from '../../services/form.service'

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
  providers:[FormService]
})
export class MyformComponent implements OnInit {

  constructor(private formSrvc: FormService) { }
  forms=[];
  ngOnInit() {
    this.forms=this.formSrvc.forms;
  }
formName='Standard name';
date=new Date();

addNewForm(){
  this.formName=prompt('Enter name of form');
  if(this.formName!==null){
    this.forms.push({name:this.formName, date:this.date});
  }
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
