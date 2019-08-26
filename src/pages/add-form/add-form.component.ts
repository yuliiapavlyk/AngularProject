import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  @Output()onAddForm=new EventEmitter();
addForm(){
  this.onAddForm.emit();
}
  constructor() { }

  ngOnInit() {
  }

}
