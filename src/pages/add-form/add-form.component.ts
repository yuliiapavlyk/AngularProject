import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  @Output() onAddForm = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addForm(): void {
    this.router.navigate(['new-form']);
    //this.onAddForm.emit();
  }
}
