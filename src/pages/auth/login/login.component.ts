import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {
type='password';
show = false;
accessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQG1haWwuY29tIiwiaWF0IjoxNTY4NTY5MTg3LCJleHAiOjE1Njg2NTU1ODd9.CLo_uHV9kncr5YAXliP_H8r6h4JpA0SYBOjMNUiJSKE";

  constructor(private userServ:UserService, private _rout:Router) { }

  ngOnInit() {

  }
  myGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
 });

onSubmit(){
  const valueForm=this.myGroup.value;
  this.userServ.logIn({email:valueForm.email,
      password:valueForm.password}).subscribe(
            res=>{
              console.log(res);
              localStorage.setItem('accessToken', this.accessToken);
              this._rout.navigate(['/my-forms']);
            },
            err=>console.log(err)
            )
}
ShowPassword(){
  this.show = !this.show;
}
}
