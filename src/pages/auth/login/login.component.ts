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
error:string;

  constructor(private userServ:UserService, private _rout:Router) { }

  ngOnInit() {

  }
  myGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
 });

onSubmit(){
  const { value }=this.myGroup;
  this.userServ.logIn({email:value.email,
      password:value.password}).subscribe(
            res=>{
              localStorage.setItem("accessToken", res.accessToken);
              this._rout.navigate(['/my-forms']);
            },
            err=>{
              this.error=err.message;
            }
            )
}
ShowPassword(){
  this.show = !this.show;
}
}
