import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {

  constructor() { }
  openModal=false;
  addField():void{
    console.log("new Window");
    this.openModal=!this.openModal;
  }
  ngOnInit() {
  }

}
