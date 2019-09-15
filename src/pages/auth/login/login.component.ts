import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
type='password';
show = false;
  constructor(

  ) { }

  ngOnInit() {

  }
  myGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
 });

onSubmit(){
  console.log(this.myGroup);
}
ShowPassword(){
  this.show = !this.show;
  if (this.show){
      this.type = "text";
  }
  else {
      this.type = "password";
  }
}
}
