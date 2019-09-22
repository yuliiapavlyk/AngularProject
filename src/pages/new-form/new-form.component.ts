import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {
router:Router;
  constructor() { }
  openModal=false;
  addField():void{
    console.log("new Window");
    //service method
  }
  ngOnInit() {
  }

}
