import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { } from 'events';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {

  constructor() { }
  @Output()chooseOption=new EventEmitter<number>();
  selectOption(value:number){
    this.chooseOption.emit(value);
  }
  @Input()FromName='';
  @Input()date='';
showFormOption=false;
Option(){
  this.showFormOption=!this.showFormOption;
}
  ngOnInit() {
  }

}
